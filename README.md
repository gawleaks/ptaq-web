# PTAQ Bookstore Website

A modern, static website for PTAQ - a publishing house specializing in children's books about birds.

## 🚀 Technology Stack

- **Next.js 15** with App Router and static export
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Shadcn/ui** component library
- **React** for components

## 📚 Features

- **Responsive Design**: Mobile-first design that works on all devices
- **Static Export**: SEO-optimized static HTML generation
- **Modern UI**: Clean, accessible interface with smooth animations
- **Book Carousels**: Interactive carousels for book series
- **Navigation**: Full navigation with mobile support
- **GitHub Pages Ready**: Configured for easy deployment

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js app router pages
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   ├── o-nas/          # About page
│   ├── ptaq-3/         # PTAQ 3+ series page
│   ├── ptaq-6/         # PTAQ 6+ series page
│   ├── ptaq-uczy/      # PTAQ Uczy series page
│   └── kontakt/        # Contact page
├── components/         # Reusable components
│   ├── ui/            # Shadcn/ui components
│   ├── Header.tsx     # Main navigation
│   ├── Footer.tsx     # Site footer
│   └── BookCarousel.tsx # Book carousel component
└── lib/
    ├── books.ts       # Book data and types
    └── utils.ts       # Utility functions
```

## 🚀 Getting Started

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

```bash
npm run build
```

This generates static files in the `out/` directory.

## 🌐 Deployment to GitHub Pages

### Prerequisites
1. Create a GitHub repository named `ptaq-web`
2. Push your code to the `main` branch

### Automatic Deployment Setup

1. **Repository Setup**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/ptaq-web.git
   git push -u origin main
   ```

2. **GitHub Pages Configuration**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy on every push to `main`

3. **Your site will be available at**:
   ```
   https://YOUR_USERNAME.github.io/ptaq-web
   ```

### Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
npm run build
```

Then upload the contents of the `out/` folder to your web hosting service.

### Environment Variables

For production builds, the site automatically configures itself for GitHub Pages with the correct base path.

## 🎨 Design Guidelines

- Following design references: czarnaowca.pl and otop.org.pl
- Modern, clean design suitable for children's content
- Consistent spacing and typography
- Accessible color contrast
- Mobile-first responsive design

## 📖 Content Structure

### Navigation
- **O nas** - About the publishing house
- **Ptaq 3+** - Book series for ages 3+
- **Ptaq 6+** - Book series for ages 6+
- **Ptaq Uczy** - Educational series (coming soon)
- **Kontakt** - Contact information

### Homepage Sections
1. **Hero Section** - Main introduction with call-to-action buttons
2. **PTAQ 3+ Carousel** - Books for younger children
3. **PTAQ 6+ Carousel** - Books for older children
4. **About Section** - Brief overview of the mission

## 🔧 Customization

The project uses Tailwind CSS for styling and Shadcn/ui for components. To customize:

1. **Colors**: Edit the CSS variables in `src/app/globals.css`
2. **Components**: Modify components in `src/components/ui/`
3. **Content**: Update book data in `src/lib/books.ts`
4. **Styling**: Use Tailwind classes throughout components

## 📱 Responsive Design

- **Mobile**: Optimized for small screens with hamburger navigation
- **Tablet**: Adapted layouts for medium screens
- **Desktop**: Full-width layouts with optimal spacing

## 🛠️ Development Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run export     # Build and export static files
```

## 🌟 Future Enhancements

- Shopping cart functionality
- User authentication
- Admin panel for content management
- Payment integration
- Dynamic content management

## 📄 License

This project is part of the PTAQ brand. All rights reserved.
