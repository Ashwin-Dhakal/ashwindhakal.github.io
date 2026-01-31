# Website Design Architecture

## Reference Websites Analysis

### 1. Santosh Pandey's Website (https://concept-inversion.github.io/)
**Technology**: Jekyll with al-folio theme, GitHub Pages

#### Pages Structure:
- **Home/About**: Main landing page with bio, research interests, news, selected publications
- **ExchangeMeet**: (Specific content not fully visible in search results)
- **Publications**: Full list of publications
- **Projects**: Research projects showcase
- **Repositories**: Code repositories
- **Teaching**: Teaching information

#### Design Elements:
- **Navigation**: Top navigation bar with toggle for mobile
- **Layout**: Clean, centered content with max-width container
- **Typography**: Modern sans-serif fonts (system fonts)
- **Color Scheme**: Professional, minimal (likely dark text on light background)
- **Key Features**:
  - News section with date-stamped updates
  - Selected publications with icons (PDF, HTML, Video, Code links)
  - Professional headshot image
  - Contact information (office location, email)
  - Research interests clearly stated
  - Call-to-action for PhD student recruitment

#### Home Page Sections:
1. Header with name, title, location
2. Profile image
3. Brief bio paragraph
4. Research interests summary
5. News section (table format with dates)
6. Selected publications (numbered list with details)
7. Footer with copyright

---

### 2. Maanak Gupta's Website (https://sites.google.com/view/maanakgupta)
**Technology**: Google Sites

#### Pages Structure:
- **HOME**: Main landing page
- **Grants and Funding**: Funding information
- **Publications**: Research publications
- **Teaching**: Teaching experience and courses
- **Invited Talks etc.**: Speaking engagements
- **Students**: Current and past students
- **Awards/Honors**: Recognition and awards
- **Media/Service**: Media appearances and service activities
- **Contact**: Contact information

#### Design Elements:
- **Navigation**: Sidebar navigation menu
- **Layout**: Traditional academic website layout
- **Content Organization**: Well-structured sections with clear headings
- **Key Features**:
  - Comprehensive work experience timeline
  - Education history
  - Research interests listed with sub-points
  - Personal briefing section
  - Professional profiles links
  - Detailed sections for various academic activities

#### Home Page Sections:
1. Name and title
2. Department and university affiliation
3. Brief introduction paragraph
4. Research interests (numbered list)
5. Work experience timeline
6. Education history
7. Personal briefing
8. Professional profile links

---

## Proposed Design Architecture

### Design Philosophy
**Combining Best Elements**:
- Modern, clean aesthetic from Santosh's site
- Comprehensive content organization from Maanak's site
- Professional yet approachable
- Mobile-responsive
- Fast-loading (static HTML/CSS/JS)

### Site Structure

```
/
├── index.html          # Home/About page
├── publications.html   # Publications page
├── projects.html       # Research projects
├── teaching.html       # Teaching experience
├── awards.html         # Awards and honors
├── contact.html        # Contact information
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── main.js         # JavaScript functionality
└── assets/
    ├── images/         # Images (headshot, etc.)
    └── icons/          # Icon files
```

### Page Breakdown

#### 1. Home Page (index.html)
**Sections**:
1. **Navigation Bar** (sticky/fixed)
   - Logo/Name (left)
   - Menu items: Home, Publications, Projects, Teaching, Awards, Contact
   - Mobile hamburger menu

2. **Hero Section**
   - Name (large, prominent)
   - Title/Position
   - Affiliation (University, Department)
   - Location
   - Profile image (circular or rounded)

3. **About Section**
   - Brief bio paragraph (2-3 sentences)
   - Research interests summary
   - Key highlights

4. **News Section** (optional)
   - Recent updates/announcements
   - Date-stamped entries
   - Table or card layout

5. **Selected Publications** (3-5 most important)
   - Numbered list
   - Each with: Title, Authors, Venue, Year
   - Links: PDF, HTML, Code, Video (if available)
   - Icons for each link type

6. **Quick Links**
   - Email, GitHub, Google Scholar, LinkedIn, Twitter/X
   - Icon-based social links

7. **Footer**
   - Copyright notice
   - Last updated date
   - Links to other pages

#### 2. Publications Page (publications.html)
**Sections**:
- Page header with title
- Filter/toggle options (if needed): All, Journal, Conference, Workshop
- Publications list:
  - Grouped by year (newest first)
  - Each publication card/entry:
    - Title (link to paper if available)
    - Authors (bold your name)
    - Venue/Journal name
    - Year
    - Links: PDF, HTML, Code, Video, Slides
    - Abstract (expandable/collapsible)
    - Citation count (if available)

#### 3. Projects Page (projects.html)
**Sections**:
- Page header
- Project cards in grid layout:
  - Project image/icon
  - Project title
  - Brief description
  - Technologies used
  - Links: GitHub, Demo, Paper

#### 4. Teaching Page (teaching.html)
**Sections**:
- Current courses
- Past courses
- Teaching philosophy (optional)
- Student testimonials (optional)

#### 5. Awards Page (awards.html)
**Sections**:
- Awards and honors (chronological or by category)
- Grants and funding
- Recognition

#### 6. Contact Page (contact.html)
**Sections**:
- Contact information
- Office location
- Office hours (if applicable)
- Email form (optional, front-end only)
- Social media links

---

### Design Specifications

#### Color Palette
- **Primary**: Professional blue (#2c3e50 or #3498db)
- **Secondary**: Dark gray (#333333)
- **Accent**: Blue (#3498db) or custom brand color
- **Background**: White (#ffffff) or light gray (#f5f5f5)
- **Text**: Dark gray (#333333) or black (#000000)
- **Links**: Blue (#3498db) with hover effects

#### Typography
- **Headings**: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto)
- **Body**: System fonts for readability
- **Font Sizes**:
  - H1: 2.5em (mobile: 2em)
  - H2: 1.8em
  - H3: 1.4em
  - Body: 1em (16px base)
  - Small: 0.9em

#### Layout
- **Max Width**: 900-1000px for content
- **Padding**: 20-40px (responsive)
- **Spacing**: Consistent vertical rhythm (1.6em line-height)
- **Grid**: CSS Grid or Flexbox for responsive layouts

#### Components

1. **Navigation Bar**
   - Fixed/sticky at top
   - Transparent or white background
   - Smooth scroll to sections
   - Active page indicator
   - Mobile: Hamburger menu with slide-out drawer

2. **Publication Cards**
   - Clean, minimal design
   - Hover effects
   - Icon-based links
   - Expandable abstracts

3. **Buttons/Links**
   - Clear hover states
   - Underline or background color change
   - Icon support

4. **Cards/Sections**
   - Subtle shadows or borders
   - Rounded corners (optional)
   - Padding for breathing room

#### Responsive Design
- **Mobile First**: Design for mobile, enhance for desktop
- **Breakpoints**:
  - Mobile: < 600px
  - Tablet: 600px - 900px
  - Desktop: > 900px
- **Mobile Features**:
  - Collapsible navigation
  - Stacked layouts
  - Touch-friendly buttons
  - Optimized images

#### Performance
- **Optimization**:
  - Minified CSS/JS (for production)
  - Optimized images (WebP with fallbacks)
  - Lazy loading for images
  - Minimal external dependencies

#### Accessibility
- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Alt text for images
- Proper heading hierarchy
- Color contrast compliance (WCAG AA)

---

### Technology Stack

**Front-End Only**:
- HTML5
- CSS3 (with CSS Grid/Flexbox)
- Vanilla JavaScript (minimal, for interactivity)
- No build tools required (can add later if needed)
- No frameworks (pure HTML/CSS/JS)

**Optional Enhancements** (can add later):
- CSS preprocessor (SASS/SCSS)
- Build tool (Webpack, Vite)
- Icon library (Font Awesome, or SVG icons)
- Animation library (for smooth transitions)

---

### File Organization

```
personal_website/
├── index.html
├── publications.html
├── projects.html
├── teaching.html
├── awards.html
├── contact.html
├── css/
│   ├── styles.css
│   ├── components.css (optional)
│   └── responsive.css (optional)
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   │   ├── headshot.jpg
│   │   └── [other images]
│   └── icons/
│       └── [icon files]
├── docs/
│   └── SETUP_GUIDE.md
├── .gitignore
├── README.md
└── CNAME
```

---

### Implementation Phases

**Phase 1: Foundation**
1. Create base HTML structure for all pages
2. Set up CSS architecture and base styles
3. Implement navigation system
4. Create responsive layout framework

**Phase 2: Home Page**
1. Hero section
2. About section
3. News section (if applicable)
4. Selected publications
5. Footer

**Phase 3: Content Pages**
1. Publications page
2. Projects page
3. Teaching page
4. Awards page
5. Contact page

**Phase 4: Polish**
1. Add animations/transitions
2. Optimize images
3. Test responsiveness
4. Accessibility audit
5. Performance optimization

**Phase 5: Content**
1. Add actual content
2. Add images
3. Add links
4. Final review

---

### Key Design Decisions

1. **Single Page vs Multi-Page**: Multi-page for better organization and SEO
2. **Navigation Style**: Top navigation bar (like Santosh's) - modern and clean
3. **Content Density**: Balanced - not too sparse, not too dense
4. **Visual Hierarchy**: Clear headings and sections
5. **Interactivity**: Subtle hover effects, smooth scrolling
6. **Branding**: Professional academic style

---

## Next Steps

1. Review and approve this architecture
2. Start with Phase 1: Foundation
3. Build incrementally, testing as we go
4. Gather content (bio, publications, etc.)
5. Finalize design details (colors, fonts, spacing)

