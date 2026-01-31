# Header and Footer Components Guide

This website uses reusable header and footer components to make maintenance easier.

## File Structure

```
personal_website/
├── includes/
│   ├── header.html      # Navigation bar component
│   └── footer.html      # Footer component
├── js/
│   ├── load-components.js  # Loads header/footer dynamically
│   └── main.js            # Other site functionality
└── [all HTML pages]
```

## How It Works

1. **Header** (`includes/header.html`): Contains the navigation bar
2. **Footer** (`includes/footer.html`): Contains the footer with copyright and last updated date
3. **Loader** (`js/load-components.js`): Uses JavaScript `fetch()` to load these components into placeholders

## Usage in HTML Pages

Replace the navigation and footer sections with placeholders:

```html
<body>
    <!-- Header placeholder - will be loaded by load-components.js -->
    <div id="header-placeholder"></div>
    
    <!-- Your page content here -->
    
    <!-- Footer placeholder - will be loaded by load-components.js -->
    <div id="footer-placeholder"></div>

    <!-- Load components first, then main.js -->
    <script src="js/load-components.js"></script>
    <script src="js/main.js"></script>
</body>
```

## Features

- **Automatic Active Link**: The loader automatically highlights the active page in navigation
- **Dynamic Navigation**: Projects/Teaching links only show on those pages
- **Single Source of Truth**: Update header/footer once, changes apply everywhere
- **Last Updated Date**: Automatically set when footer loads

## Important Notes

### Testing Locally

⚠️ **The `fetch()` API requires a web server**. If you're testing locally:

1. **Option 1**: Use a local server (recommended)
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (if you have http-server installed)
   npx http-server
   ```
   Then visit `http://localhost:8000`

2. **Option 2**: Keep inline HTML for local testing, use components for production

### GitHub Pages

✅ Works perfectly on GitHub Pages since files are served over HTTP/HTTPS.

## Updating Header/Footer

Simply edit:
- `includes/header.html` - for navigation changes
- `includes/footer.html` - for footer changes

Changes will automatically appear on all pages that use the components.

## Migration Status

- ✅ `index.html` - Updated to use components
- ⏳ Other pages - Can be updated similarly

To migrate other pages, replace their `<nav>` and `<footer>` sections with the placeholders shown above.

