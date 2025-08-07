# TechConf 2025 - Event Website

A pure HTML, CSS, and JavaScript event website for TechConf 2025.

## Features

- **Responsive Design**: Mobile-first approach with RTL support
- **Modern UI**: Clean, professional design with smooth animations
- **Multiple Pages**: 
  - Homepage (index.html, index2.html)
  - Event Details
  - Schedule
  - Registration
  - Login/Authentication
  - Admin Dashboard
  - User Dashboard
  - Contact Page
  - Coming Soon Page
  - 404 Error Page

## Getting Started

### Prerequisites

No build tools or dependencies required! This is a pure HTML/CSS/JS project.

### Running the Project

1. **Local Development Server** (Recommended):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Or using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js
   npx serve .
   ```

2. **Direct File Opening**:
   Simply open `index.html` in your web browser.

3. **Live Server Extension**:
   If using VS Code, install the "Live Server" extension and right-click on `index.html` → "Open with Live Server"

### Project Structure

```
├── index.html              # Main homepage
├── index2.html             # Alternative homepage
├── admin-dashboard.html    # Admin dashboard
├── user-dashboard.html     # User dashboard
├── event-details.html      # Event information
├── schedule.html           # Event schedule
├── register.html           # Registration page
├── login.html              # Authentication
├── contact.html            # Contact form
├── coming-soon.html        # Coming soon page
├── 404.html                # Error page
├── style.css               # All styles
├── main.js                 # Main JavaScript functionality
├── rtl-toggle.js           # RTL/LTR toggle functionality
├── javascript.svg          # JavaScript icon
└── README.md               # This file
```

## Features

### RTL Support
Toggle between Left-to-Right and Right-to-Left layouts using the RTL button in the navigation.

### Responsive Navigation
- Desktop: Horizontal navigation with dropdowns
- Mobile: Hamburger menu with slide-in navigation
- RTL-aware positioning

### Dashboard Features
- Admin dashboard with statistics and management tools
- User dashboard with personalized content
- Charts, tables, and quick actions

### Form Handling
All forms include client-side validation and user feedback.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers
- IE11+ (with some limitations)

## Contributing

1. Clone the repository
2. Make your changes
3. Test in multiple browsers
4. Submit a pull request

## License

This project is open source and available under the MIT License.
