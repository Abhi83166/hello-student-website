# Deployment Package Guide

## 📦 What to Share for Deployment

Since we cannot create a zip file directly, please follow these steps to create the deployment package:

### Step 1: Create the Deployment Package

1. **On Windows:**
   - Right-click on the `hello-student-website` folder
   - Select "Send to" → "Compressed (zipped) folder"
   - Name it `hello-student-website.zip`

2. **On Mac/Linux:**
   ```bash
   cd /path/to/parent/directory
   zip -r hello-student-website.zip hello-student-website \
     -x "*.git*" "*node_modules*" "*.next*" "*.log" "*.DS_Store" "*.claude*"
   ```

### Step 2: What's Included

The package contains:
- ✅ `app/` folder with all source code
- ✅ `app/out/` folder with pre-built static files
- ✅ `README.md` with build instructions
- ✅ `.github/` folder with CI/CD workflows
- ✅ All configuration files

### Step 3: Instructions for the Deployment Team

Share this message with the deployment team:

---

## Deployment Instructions

### Option 1: Use Pre-built Files (Recommended)
The static website files are already built and ready in `app/out/`. Simply upload the contents of this folder to your web server.

### Option 2: Build from Source
If you need to rebuild:
1. Ensure Node.js 18+ is installed
2. Navigate to the `app` directory
3. Run `npm install`
4. Run `npm run build`
5. Deploy the contents of `app/out/`

### Hosting Configuration
- **Document Root:** Point to the `app/out/` directory
- **Index File:** `index.html`
- **404 Page:** `404.html`
- **URL Rewriting:** Enable for single-page app routing

### Static Hosting Services Settings
- **Build Command:** `cd app && npm install && npm run build`
- **Publish Directory:** `app/out`
- **Node Version:** 18

---

## 📋 Pre-deployment Checklist

Before sharing the package, ensure:
- [ ] The `app/out/` folder exists and contains the built files
- [ ] README.md is included
- [ ] No sensitive information in the code
- [ ] Package size is reasonable (should be < 50MB without node_modules)