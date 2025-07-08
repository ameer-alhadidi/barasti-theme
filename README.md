# Color Palette Generator for Tailwind CSS

A professional, interactive color palette generator that creates Tailwind CSS-compatible color configurations. Built with React, Tailwind CSS, and shadcn/ui components.

## Features

### 🎨 Color Management
- **Multiple Palettes**: Create and manage multiple color palettes
- **Interactive Color Picker**: Visual color selection with real-time preview
- **Color Editing**: Modify color names, values, and descriptions
- **Color Removal**: Remove unwanted colors from palettes

### 📱 User Interface
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations
- **Visual Preview**: Real-time color preview with proper contrast
- **Logo Integration**: Incorporates your brand logo in the header

### 🔧 Export Options
- **Tailwind CSS Configuration**: Ready-to-use tailwind.config.js format
- **CSS Custom Properties**: CSS variables format for broader compatibility
- **Copy to Clipboard**: One-click copying of generated configurations
- **Usage Instructions**: Built-in guidance for implementation

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### Installation
1. Navigate to the project directory:
   ```bash
   cd color-palette-form
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   pnpm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage Guide

### Creating a Color Palette

1. **Add New Palette**: Enter a name in the "New palette name" field and click "Add Palette"
2. **Add Colors**: Use the form at the bottom to add new colors:
   - Enter a descriptive color name (e.g., "primary", "accent")
   - Select the color using the color picker
   - Add an optional description
   - Click the "+" button to add the color

### Managing Colors

- **Edit Colors**: Click on any color name, value, or description to edit
- **Remove Colors**: Click the trash icon next to any color to remove it
- **Switch Palettes**: Click on palette tabs to switch between different palettes

### Exporting Configurations

#### Tailwind CSS Configuration
1. Click the "Tailwind Config" tab in the Export Options section
2. Copy the generated JSON configuration
3. Add it to your `tailwind.config.js` file:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#F1C40F",
        secondary: "#2C3E50",
        accent: "#FFFFFF",
        // ... your other colors
      }
    }
  }
}
```

#### CSS Custom Properties
1. Click the "CSS Variables" tab in the Export Options section
2. Copy the generated CSS variables
3. Add them to your CSS file:

```css
:root {
  --color-primary: #F1C40F;
  --color-secondary: #2C3E50;
  --color-accent: #FFFFFF;
  /* ... your other colors */
}
```

### Using the Colors

#### With Tailwind CSS
```html
<div class="bg-primary text-secondary">
  <h1 class="text-accent">Hello World</h1>
</div>
```

#### With CSS Variables
```css
.my-component {
  background-color: var(--color-primary);
  color: var(--color-secondary);
}
```

## Default Color Palette

The application comes with a pre-configured "Brand Colors" palette inspired by your logo:

- **Primary**: #F1C40F (Golden yellow from logo)
- **Secondary**: #2C3E50 (Dark blue-gray background)
- **Accent**: #FFFFFF (White accent)
- **Neutral**: #95A5A6 (Neutral gray)
- **Success**: #27AE60 (Success state green)

## Technical Details

### Built With
- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality React components
- **Lucide Icons**: Beautiful, customizable icons
- **Vite**: Fast build tool and development server

### Project Structure
```
color-palette-form/
├── src/
│   ├── components/ui/     # shadcn/ui components
│   ├── assets/           # Static assets (logo, etc.)
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   └── main.jsx         # Application entry point
├── public/              # Public assets
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

### Key Features Implementation
- **State Management**: React hooks for palette and color management
- **Color Utilities**: Hex to RGB conversion and contrast calculation
- **Responsive Design**: CSS Grid and Flexbox for adaptive layouts
- **Accessibility**: Proper contrast ratios and keyboard navigation
- **Performance**: Optimized rendering and minimal re-renders

## Customization

### Adding New Features
The application is built with modularity in mind. You can easily extend it by:

1. **Adding New Export Formats**: Modify the export functions in `App.jsx`
2. **Custom Color Formats**: Add support for HSL, RGB, or other color formats
3. **Palette Templates**: Create predefined color palette templates
4. **Import/Export**: Add functionality to save/load palettes from files

### Styling Customization
- Modify `App.css` for global styles
- Update Tailwind configuration for theme changes
- Customize shadcn/ui components in the `components/ui/` directory

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for your personal/commercial use. Feel free to modify and distribute as needed.

## Support

For questions or issues, refer to the usage instructions within the application or consult the Tailwind CSS documentation for implementation details.

