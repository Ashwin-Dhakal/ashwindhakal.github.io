# Personal Academic Website

Portfolio website for Ashwin Dhakal - Computer Science PhD Candidate

## Domain
ashwindhakal.com

## Hosting
This website is hosted on GitHub Pages.

## Setup Instructions

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `ashwindhakal.github.io` (this is important for GitHub Pages to work with a custom domain)
3. Make it public (required for free GitHub Pages)

### 2. Push Your Code to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/ashwindhakal.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select `main` branch (or `master` if that's your default branch)
5. Click **Save**

### 4. Configure Custom Domain

1. In the same **Pages** settings section, under **Custom domain**, enter: `ashwindhakal.com`
2. Check **Enforce HTTPS** (this may take a few minutes to become available)
3. Click **Save**

### 5. Configure DNS Settings

You need to configure your domain's DNS records to point to GitHub Pages:

**Option A: Using A Records (Recommended)**
- Create an A record pointing to: `185.199.108.153`
- Create an A record pointing to: `185.199.109.153`
- Create an A record pointing to: `185.199.110.153`
- Create an A record pointing to: `185.199.111.153`

**Option B: Using CNAME Record**
- Create a CNAME record pointing to: `YOUR_USERNAME.github.io`

**Note:** DNS changes can take up to 24-48 hours to propagate, though usually it's much faster.

### 6. Create CNAME File (Important!)

After setting up the custom domain in GitHub settings, GitHub will automatically create a `CNAME` file in your repository. However, you can also create it manually:

Create a file named `CNAME` (no extension) in the root directory with just:
```
ashwindhakal.com
```

### 7. Verify Setup

- Your site should be accessible at: `https://ashwindhakal.com`
- It may also be accessible at: `https://YOUR_USERNAME.github.io`

## Local Development

Simply open `index.html` in your web browser, or use a local server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## Next Steps

1. Update the content in `index.html` with your actual information
2. Add your publications, research, and other academic content
3. Consider adding more pages (Research, Publications, Teaching, etc.)
4. You may want to add CSS frameworks or build tools later for a more sophisticated site

## Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Setup Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

