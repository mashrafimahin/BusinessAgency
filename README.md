# Business Agency Website

A modern, responsive business consulting website built with React and Vite. This project serves as a professional showcase for business consulting services with a clean, modern design.

## 🚀 Features

- **Modern Design**: Clean, professional interface designed for business consulting
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Engaging animations and interactive components
- **Modern Tech Stack**: Built with React 19, Vite, and Styled Components
- **Performance Optimized**: Fast loading times and smooth user experience
- **Accessibility**: Semantic HTML and accessible components

## 🛠️ Tech Stack

### Core Technologies

- **React 19.2.0** - JavaScript library for building user interfaces
- **Vite 7.3.1** - Fast build tool and development server
- **React Router 7.13.0** - Client-side routing
- **Styled Components 6.3.9** - CSS-in-JS styling library

### Development Tools

- **ESLint** - Code linting and formatting
- **React SWC Plugin** - Fast compilation with SWC
- **SimpleBar** - Custom scrollbar library

### Icons & Assets

- **Font Awesome** - Icon library for scalable vector icons
- **WebP Images** - Optimized image format for better performance

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Footer.jsx       # Website footer
│   ├── InputBox.jsx     # Form input component
│   ├── MobileNav.jsx    # Mobile navigation menu
│   ├── Navbar.jsx       # Main navigation
│   ├── PrimaryButton.jsx # Primary call-to-action button
│   ├── RatingBox.jsx    # Rating/review component
│   ├── TopBar.jsx       # Top information bar
│   └── Pointer.jsx      # Custom cursor pointer
├── pages/               # Main page components
│   ├── Hero.jsx         # Hero section with main CTA
│   ├── Features.jsx     # Features showcase
│   ├── Service.jsx      # Services overview
│   ├── ServiceCard.jsx  # Individual service cards
│   ├── Progress.jsx     # Progress indicators
│   ├── Testimonial.jsx  # Client testimonials
│   ├── Projects.jsx     # Portfolio/projects section
│   ├── Blog.jsx         # Blog/news section
│   └── Bars.jsx         # Decorative elements
├── Styles/              # Styling files
│   ├── Global.Styles.jsx # Global styles and resets
│   ├── Common.Styles.jsx # Common styled components
│   ├── Hero.Styles.jsx   # Hero section styles
│   └── compStyles/       # Component-specific styles
├── context/             # React context providers
│   ├── ScreenSizeContext.jsx # Screen size detection
│   └── ScrollContext.jsx     # Scroll position tracking
└── assets/              # Static assets
    ├── images/          # WebP optimized images
    ├── icons/           # SVG icons and logos
    └── fonts/           # Custom fonts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/mashrafimahin/BusinessAgency.git
   cd BusinessAgency
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This will create an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎨 Design System

### Color Palette

The project uses a professional color scheme suitable for business consulting:

- Primary colors for branding and CTAs
- Neutral backgrounds for readability
- Accent colors for highlights and emphasis

### Typography

- Custom font for brand text
- Web-safe fallbacks for body text
- Responsive font sizing with clamp()

### Spacing & Layout

- Consistent spacing system using CSS custom properties
- Flexible grid layouts with CSS Grid and Flexbox
- Mobile-first responsive design approach

## 🔧 Configuration

### ESLint Configuration

The project includes ESLint rules for:

- React hooks validation
- Code formatting standards
- Import organization

### Vite Configuration

Custom Vite settings for:

- Development server options
- Build optimization
- Asset handling

## 📸 Screenshots

> [Add screenshots of your application here]

## 🤝 Contributing

We welcome contributions to this project! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Follow the existing code style and patterns
- Run `npm run lint` before submitting PRs
- Ensure all components are responsive
- Test in multiple browsers

## 📋 Project Maintenance

### Regular Maintenance Tasks

1. **Dependency Updates**

   ```bash
   npm update
   npm audit fix
   ```

2. **Performance Monitoring**
   - Monitor bundle size with `npm run build`
   - Check Lighthouse scores
   - Review image optimization

3. **Code Quality**
   - Run ESLint regularly: `npm run lint`
   - Review component performance
   - Update documentation as needed

4. **Security**
   - Keep dependencies updated
   - Review for security vulnerabilities
   - Follow secure coding practices

### Troubleshooting

**Common Issues:**

- **Build fails**: Check Node.js version compatibility
- **Styles not loading**: Verify Styled Components installation
- **Images not displaying**: Check WebP support in browser

**Getting Help:**

- Check the browser console for errors
- Review the Vite documentation
- Search existing issues

## 📄 License

### Free Resource License

This project is provided as a **FREE RESOURCE** for educational and learning purposes only.

**Terms of Use:**

- ✅ **FREE** to use, modify, and distribute
- ✅ **FREE** for educational and learning purposes
- ✅ **FREE** for personal projects and portfolios
- ✅ **FREE** to study and understand the code

**Restrictions:**

- ❌ **NOT FOR COMMERCIAL USE** - Cannot be used for commercial projects or monetization
- ❌ **NOT FOR RESALE** - Cannot be sold as-is or as part of a commercial product
- ❌ **NOT FOR PROFIT** - Cannot be used to generate revenue directly

**Requirements:**

- 🙏 **Credit Required** - Please credit the original author when using this code
- 🔄 **Share Improvements** - If you make significant improvements, consider sharing them back

**Disclaimer:**
This project is provided "as is" without any warranties. The author is not responsible for any misuse or commercial exploitation of this code.

**For Commercial Use:**
If you wish to use this code for commercial purposes, please contact the author for licensing options.

### Original License (for reference)

This project was originally created with the standard Vite + React template license. The above Free Resource License supersedes any previous licensing terms.

## 📞 Contact

**Project Maintainer:** Mashrafi Mahin
**Repository:** [https://github.com/mashrafimahin/BusinessAgency](https://github.com/mashrafimahin/BusinessAgency)

For questions, suggestions, or feedback:

- Create an issue on GitHub
- Submit a pull request for improvements

## 🙏 Acknowledgments

- **Vite Team** - For the excellent build tool
- **React Team** - For the fantastic UI library
- **Styled Components Team** - For powerful CSS-in-JS styling
- **Font Awesome** - For the comprehensive icon library

## 📊 Project Statistics

- **Last Updated:** March 2026
- **Framework:** React 19
- **Build Tool:** Vite 7
- **License:** Free Resource (Educational Use Only)
- **Status:** Active Development

---

**Note:** This project is intended for educational purposes and as a learning resource. Please respect the free resource license and use it accordingly.
