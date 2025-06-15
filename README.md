# Hello Student - Premium Student Accommodation Website

This is a Next.js-based static website for Hello Student, a premium student accommodation service in Mumbai.

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm (comes with Node.js)

### Installation & Build Instructions

1. **Navigate to the app directory:**
   ```bash
   cd app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build the static website:**
   ```bash
   npm run build
   ```

## 📁 Directory Structure

```
hello-student-website/
├── app/                    # Main application directory
│   ├── app/               # Next.js app directory with pages
│   ├── components/        # React components
│   ├── public/           # Static assets (images, etc.)
│   ├── out/              # 📌 DEPLOYMENT FOLDER (generated after build)
│   ├── package.json      # Dependencies and scripts
│   └── next.config.js    # Next.js configuration
├── .github/              # GitHub Actions workflows
└── README.md            # This file
```

## 🌐 Deployment

### Static Files Location
After running the build command, the static website files will be generated in:
```
app/out/
```

**This `out` folder contains all the files needed for deployment.**

### What to Deploy
Upload the entire contents of the `app/out/` folder to your web server or static hosting service.

### Hosting Requirements
- Any static file hosting service (Nginx, Apache, AWS S3, Netlify, Vercel, etc.)
- No server-side runtime required
- Supports HTML5 routing

### Hosting Configuration

#### For Nginx:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/app/out;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

#### For Apache (.htaccess in out folder):
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ /index.html [L]
```

#### For Static Hosting Services:
- **Root/Publish Directory:** `app/out`
- **Index File:** `index.html`
- **404 File:** `404.html`

## 🛠️ Development

To run the development server:
```bash
cd app
npm run dev
```

Visit http://localhost:3000 to see the website.

## 📝 Environment Variables

No environment variables are required for the production build.

## 🔧 Build Commands Summary

```bash
# Install dependencies
cd app && npm install

# Build for production
npm run build

# Run development server
npm run dev
```

## 📦 Deployment Package Contents

When sharing for deployment, include:
1. The entire `app/out/` folder (after building)
2. This README.md file for reference

## 🤝 Support

For any issues or questions regarding deployment, please contact the Hello Student team.

---

**Note:** Always run `npm run build` before deployment to ensure you have the latest static files.