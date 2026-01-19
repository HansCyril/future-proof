# Setup Instructions

## Prerequisites
- Node.js 18.0 or higher
- npm or yarn

## Installation Steps

### 1. Install Dependencies
```bash
npm install
```

This will install all required packages including:
- React and React DOM
- Framer Motion for animations
- Tailwind CSS for styling
- TypeScript for type safety
- And other development dependencies

### 2. Start Development Server
```bash
npm run dev
```

The development server will start and automatically open in your browser at `http://localhost:3000/`

### 3. Make Changes
- Edit files in the `src/` directory
- Changes will hot-reload automatically
- Check console for any errors or warnings

## Common Development Tasks

### Building for Production
```bash
npm run build
```
Creates an optimized production build in the `dist/` folder

### Preview Production Build
```bash
npm run preview
```
Test the production build locally before deployment

### Run Linter
```bash
npm run lint
```
Check code quality and style issues

## Customization Checklist

- [ ] Update name and title in `src/pages/HomePage.tsx`
- [ ] Update skills in `src/data/content.ts`
- [ ] Add your projects in `src/data/content.ts`
- [ ] Update experience in `src/data/content.ts`
- [ ] Update social links in `src/data/content.ts`
- [ ] Change email in contact section
- [ ] Customize colors in `tailwind.config.js`
- [ ] Update meta description in `index.html`
- [ ] Add your profile image/avatar
- [ ] Replace project images with your work
- [ ] Update GitHub/LinkedIn links
- [ ] Test dark mode toggle
- [ ] Test on mobile devices

## Deployment

### Build First
```bash
npm run build
```

### Then Deploy to Your Preferred Platform

**Netlify:**
1. Connect your GitHub repo to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

**Vercel:**
1. Connect your GitHub repo to Vercel
2. Framework preset: React/Vite
3. Automatic deployment on push

**Other Hosting:**
1. Upload the `dist/` folder to your web host
2. Configure for SPA routing (all requests should serve index.html)

## Environment Variables (Optional)

Create a `.env.local` file for environment variables:
```
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=your@email.com
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

## Troubleshooting

**Port 3000 in use:**
```bash
npm run dev -- --port 3001
```

**Module not found errors:**
```bash
rm -rf node_modules
npm install
```

**Build errors:**
- Check TypeScript errors: `tsc --noEmit`
- Clear cache: `npm run build -- --force`

## Performance Tips

1. **Optimize Images**: Use WebP format and appropriate sizes
2. **Lazy Load**: Components load only when needed
3. **Code Splitting**: Vite automatically splits code for routes
4. **Monitor Bundle**: Run `npm run build` and check sizes

## Security Checklist

- [ ] Never commit `.env.local` with sensitive data
- [ ] Use HTTPS for deployment
- [ ] Update dependencies regularly: `npm update`
- [ ] Audit dependencies: `npm audit`

## Next Steps

1. Customize your portfolio content
2. Add your own projects and images
3. Test thoroughly on different devices
4. Deploy to production
5. Share with recruiters and clients!

For detailed documentation, see `README.md` and `PROJECT_SUMMARY.md`
