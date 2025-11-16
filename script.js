// Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Filter Toggle Button (Mobile)
    const filterToggle = document.getElementById('filterToggle');
    const filterContainer = document.getElementById('filterContainer');

    if (filterToggle) {
        filterToggle.addEventListener('click', function() {
            filterContainer.classList.toggle('active');
        });
    }

    // Close filter panel when clicking on a checkbox (mobile)
    const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // Close filter panel on mobile after selection
            if (window.innerWidth <= 768 && filterContainer.classList.contains('active')) {
                filterContainer.classList.remove('active');
            }
        });
    });

    // Cart Modal Functionality
    const cartBtn = document.getElementById('cartBtn');
    const cartModal = document.getElementById('cartModal');
    const closeBtn = document.querySelector('.close');

    if (cartBtn) {
        cartBtn.addEventListener('click', function() {
            cartModal.style.display = 'block';
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            cartModal.style.display = 'none';
        });
    }

    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    // Filter Functionality
    const imageSets = document.querySelectorAll('.image-set');

    // Apply filters when checkboxes change
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });

    function applyFilters() {
        // Get all checked filter values
        const checkedFilters = Array.from(filterCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        // Show/hide image sets based on filters
        imageSets.forEach(imageSet => {
            const imageFilters = imageSet.getAttribute('data-filter');
            
            // If no filters are checked, show all
            if (checkedFilters.length === 0) {
                imageSet.style.display = 'flex';
                return;
            }

            // Check if any of the image's filters match the checked filters
            if (imageFilters) {
                const imageFilterArray = imageFilters.split(' ');
                const hasMatch = checkedFilters.some(filter => imageFilterArray.includes(filter));
                
                imageSet.style.display = hasMatch ? 'flex' : 'none';
            } else {
                // Hide images without filter data when filters are active
                imageSet.style.display = 'none';
            }
        });
    }

    // Product card click handlers
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            console.log('Product clicked');
            // Add your product detail page navigation here
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add to cart functionality (placeholder)
function addToCart(productId) {
    console.log('Adding product to cart:', productId);
    // Implement your cart logic here
}

// Quick view functionality (placeholder)
function quickView(productId) {
    console.log('Quick view for product:', productId);
    // Implement your quick view modal logic here
}
