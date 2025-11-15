// Filter Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterHeaders = document.querySelectorAll('.filter-header');
    
    filterHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const filterContent = this.nextElementSibling;
            const arrow = this.querySelector('.arrow');
            
            // Toggle visibility
            if (filterContent.style.display === 'none') {
                filterContent.style.display = 'flex';
                arrow.textContent = '▼';
            } else {
                filterContent.style.display = 'none';
                arrow.textContent = '▶';
            }
        });
    });

    // Product card click handlers
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            console.log('Product clicked:', this.querySelector('.product-title').textContent);
            // Add your product detail page navigation here
        });
    });

    // Filter checkbox handlers
    const filterCheckboxes = document.querySelectorAll('.filter-content input[type="checkbox"]');
    
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            console.log('Filter changed:', this.parentElement.textContent.trim(), this.checked);
            // Add your filtering logic here
            applyFilters();
        });
    });

    // Simple filter application function
    function applyFilters() {
        // Get all checked filters
        const checkedFilters = Array.from(filterCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.parentElement.textContent.trim());
        
        console.log('Active filters:', checkedFilters);
        
        // Here you would implement your actual filtering logic
        // This is just a placeholder for demonstration
        if (checkedFilters.length === 0) {
            // Show all products
            productCards.forEach(card => {
                card.style.display = 'block';
            });
        } else {
            // Apply filters (you would need to add data attributes to products)
            // This is a simplified example
            productCards.forEach(card => {
                // Implement your filtering logic here
                card.style.display = 'block';
            });
        }
    }

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
    alert('Product added to cart!');
}

// Quick view functionality (placeholder)
function quickView(productId) {
    console.log('Quick view for product:', productId);
    // Implement your quick view modal logic here
}
