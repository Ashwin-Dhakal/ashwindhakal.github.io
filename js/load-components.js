// ============================================
// Load Header and Footer Components
// ============================================

// Load header
fetch('includes/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
        initializeNavigation();
    })
    .catch(error => console.error('Error loading header:', error));

// Load footer
fetch('includes/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
        initializeFooter();
    })
    .catch(error => console.error('Error loading footer:', error));

// ============================================
// Initialize Navigation After Loading
// ============================================

function initializeNavigation() {
    // Show/hide Projects and Teaching links based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const projectsItem = document.querySelector('.nav-item-projects');
    const teachingItem = document.querySelector('.nav-item-teaching');
    
    // Show Projects/Teaching on those pages and hide on others
    if (currentPage === 'projects.html' || currentPage === 'teaching.html') {
        if (projectsItem) projectsItem.style.display = 'list-item';
        if (teachingItem) teachingItem.style.display = 'list-item';
    } else {
        if (projectsItem) projectsItem.style.display = 'none';
        if (teachingItem) teachingItem.style.display = 'none';
    }
    
    // Set active link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Initialize mobile menu toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
    
    // Initialize navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > 100) {
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
            } else {
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
            lastScroll = currentScroll;
        });
    }
}

// ============================================
// Initialize Footer After Loading
// ============================================

function initializeFooter() {
    // Set Last Updated Date
    const lastUpdatedElement = document.getElementById('lastUpdated');
    if (lastUpdatedElement) {
        const lastUpdated = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        lastUpdatedElement.textContent = lastUpdated.toLocaleDateString('en-US', options);
    }
}

