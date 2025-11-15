# Fine Art Prints Product Page

A responsive product gallery page inspired by professional photography portfolios. This page features a filterable product grid layout without video components.

## Features

- **Responsive Navigation Bar** - Sticky header with logo, menu items, and action buttons
- **Hero Section** - Eye-catching gradient header with title and subtitle
- **Filter Sidebar** - Collapsible filters for Country, Category, Orientation, and Size
- **Product Grid** - Responsive grid layout that adapts to different screen sizes
- **Product Cards** - Individual product cards with images, titles, and status
- **Additional Information Section** - Detailed product and shipping information
- **Footer** - Copyright and social media links

## Structure

```
anachrome_website/
├── index.html          # Main HTML file with page structure
├── styles.css          # All styling and responsive design
├── script.js           # Interactive functionality (filters, clicks)
└── README.md           # This file
```

## Customization

### Changing Colors
The main gradient uses purple tones. To change it, modify the `.hero` section in `styles.css`:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Adding Real Images
Replace the placeholder images in `index.html`:

```html
<img src="https://via.placeholder.com/..." alt="...">
```

with your actual image paths:

```html
<img src="images/your-image.jpg" alt="...">
```

### Modifying Filter Options
Edit the filter groups in the sidebar section of `index.html` to add/remove options.

### Adjusting Grid Layout
Modify the grid columns in `styles.css`:

```css
.products-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}
```

## Responsive Breakpoints

- Desktop: 1024px and above (3-4 columns)
- Tablet: 768px - 1023px (2-3 columns)
- Mobile: Below 768px (1-2 columns)

## Usage

1. Open `index.html` in a web browser
2. Click filter headers to expand/collapse options
3. Check filter boxes to apply filters (logic needs backend implementation)
4. Click product cards to view details (routing needs implementation)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Connect filters to actual product filtering
- Add product detail pages
- Implement shopping cart functionality
- Add image lightbox/modal
- Backend integration for product data
- Search functionality
- Sorting options (price, name, date)
