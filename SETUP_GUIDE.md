# Step-by-Step Setup Guide

Follow these steps in order to get your website live on GitHub Pages with your custom domain.

## Step 1: Test Locally (Optional but Recommended)

Before pushing to GitHub, test your website locally:

```bash
# Navigate to your project directory
cd /media/ad256/9f98bdb4-bd06-4a6a-b14b-0460952f01e6/ashwin/projects/personal_website

# Open index.html in your browser
# Or use a simple HTTP server:
python3 -m http.server 8000
# Then visit http://localhost:8000 in your browser
```

**Check:** Make sure the page displays correctly and looks good.

---

## Step 2: Create GitHub Repository

1. **Go to GitHub**: Open [https://github.com](https://github.com) and sign in
2. **Create New Repository**:
   - Click the "+" icon in the top right corner
   - Select "New repository"
3. **Repository Settings**:
   - **Repository name**: `ashwindhakal.github.io` ⚠️ **IMPORTANT**: Must be exactly this name!
   - **Description**: (optional) "Personal academic portfolio website"
   - **Visibility**: Select **Public** (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click **"Create repository"**

---

## Step 3: Initialize Git and Push Code

Open your terminal and run these commands:

```bash
# Navigate to your project directory
cd /media/ad256/9f98bdb4-bd06-4a6a-b14b-0460952f01e6/ashwin/projects/personal_website

# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote
# REPLACE YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/ashwindhakal.github.io.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Note:** When you run `git push`, GitHub will ask for your credentials:
- **Username**: Your GitHub username
- **Password**: Use a **Personal Access Token** (not your GitHub password)
  - To create one: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token
  - Give it `repo` permissions
  - Copy and use it as your password

**Check:** Go to your GitHub repository page and verify all files are there (index.html, README.md, .gitignore).

---

## Step 4: Enable GitHub Pages

1. **Go to Repository Settings**:
   - In your GitHub repository, click the **"Settings"** tab (top menu)
2. **Navigate to Pages**:
   - In the left sidebar, scroll down and click **"Pages"**
3. **Configure Source**:
   - Under **"Source"**, select:
     - **Branch**: `main`
     - **Folder**: `/ (root)`
   - Click **"Save"**
4. **Wait for Deployment**:
   - GitHub will show: "Your site is ready to be published at `https://YOUR_USERNAME.github.io`"
   - Wait 1-2 minutes for the first deployment

**Check:** Visit `https://YOUR_USERNAME.github.io` - your website should be live!

---

## Step 5: Configure Custom Domain in GitHub

1. **Still in Pages Settings**:
   - Scroll down to **"Custom domain"** section
   - Enter: `ashwindhakal.com` (without www or https://)
   - Click **"Save"**
2. **Wait for DNS Check**:
   - GitHub will show a warning that DNS is not configured yet (this is expected)
   - Check the box **"Enforce HTTPS"** (may take a few minutes to become available)

**Note:** GitHub will automatically create a `CNAME` file in your repository. You can verify this by checking your repository files.

---

## Step 6: Configure DNS Records

You need to configure DNS at your domain registrar (where you bought ashwindhakal.com).

### Find Your Domain Registrar

Common registrars: GoDaddy, Namecheap, Google Domains, Cloudflare, etc.

### Add DNS Records

**Option A: A Records (Recommended for apex domain)**

Add **4 A records** pointing to GitHub Pages IPs:

| Type | Name/Host | Value | TTL |
|------|-----------|-------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |

**Note:** `@` means the root domain (ashwindhakal.com)

**Option B: CNAME Record (Alternative)**

If your registrar doesn't support multiple A records, use:

| Type | Name/Host | Value | TTL |
|------|-----------|-------|-----|
| CNAME | @ | YOUR_USERNAME.github.io | 3600 |

**Important:** Replace `YOUR_USERNAME` with your actual GitHub username.

### Save DNS Changes

- Save the DNS records
- DNS propagation can take **5 minutes to 48 hours** (usually 15-30 minutes)

---

## Step 7: Verify DNS Configuration

After adding DNS records, verify they're working:

### Method 1: Check DNS Propagation

Visit: [https://www.whatsmydns.net/#A/ashwindhakal.com](https://www.whatsmydns.net/#A/ashwindhakal.com)

Look for the GitHub IP addresses (185.199.108.x, 185.199.109.x, etc.) appearing globally.

### Method 2: Command Line

```bash
# Check DNS records
dig ashwindhakal.com +short

# Should return GitHub IP addresses:
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153
```

---

## Step 8: Final Verification

1. **Check GitHub Pages Status**:
   - Go back to your repository → Settings → Pages
   - The custom domain section should show a green checkmark ✅
   - It should say "DNS check successful" or similar

2. **Test Your Website**:
   - Visit: `https://ashwindhakal.com`
   - Visit: `https://www.ashwindhakal.com` (if you configured www)
   - Both should work and redirect to HTTPS

3. **Test HTTPS**:
   - Make sure the site loads with HTTPS (green lock icon)
   - If not, wait a bit longer for GitHub to provision SSL certificate

---

## Troubleshooting

### Website not loading after DNS setup?

- **Wait longer**: DNS can take up to 48 hours (usually much faster)
- **Check DNS**: Use whatsmydns.net to verify DNS propagation
- **Clear cache**: Try accessing in incognito/private browsing mode
- **Check GitHub Pages**: Repository → Settings → Pages should show green checkmark

### GitHub Pages shows DNS error?

- **Double-check DNS records**: Make sure A records point to correct IPs
- **Wait for propagation**: DNS changes need time to propagate
- **Check domain registrar**: Make sure DNS changes were saved

### HTTPS not working?

- **Wait**: GitHub needs time to provision SSL certificate (can take up to 24 hours)
- **Check "Enforce HTTPS"**: Make sure it's enabled in Pages settings
- **Clear browser cache**: Try incognito mode

### Need to update your website?

Simply edit files locally, then:

```bash
git add .
git commit -m "Update website content"
git push
```

Changes will be live in 1-2 minutes!

---

## Summary Checklist

- [ ] Tested website locally
- [ ] Created GitHub repository: `ashwindhakal.github.io`
- [ ] Pushed code to GitHub
- [ ] Enabled GitHub Pages (main branch)
- [ ] Added custom domain in GitHub Pages settings
- [ ] Configured DNS records at domain registrar
- [ ] Verified DNS propagation
- [ ] Tested website at https://ashwindhakal.com
- [ ] HTTPS is working

---

## Next Steps After Setup

1. **Update Content**: Edit `index.html` with your actual information
2. **Add More Pages**: Create additional HTML files (research.html, publications.html, etc.)
3. **Customize Design**: Add your own CSS, images, or use a framework
4. **Add Analytics**: Consider adding Google Analytics or similar
5. **Regular Updates**: Keep your website updated with new publications and achievements

---

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GitHub Support](https://support.github.com/)

