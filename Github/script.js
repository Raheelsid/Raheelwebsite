// ════════════════════════════════════════════════════════════════════════════
// RAHEELSID.COM - Interactive Features & Enhancements
// ════════════════════════════════════════════════════════════════════════════

/**
 * Smooth Scroll Enhancement
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

/**
 * Navigation Scroll Effect
 * Adjust navbar background on scroll
 */
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > 50) {
    navbar.style.boxShadow = '0 2px 12px rgba(15, 32, 68, 0.1)';
  } else {
    navbar.style.boxShadow = 'none';
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

/**
 * Contact Form Handler
 */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const formValues = {
      name: formData.get('name') || this.querySelector('input[type="text"]').value,
      email: formData.get('email') || this.querySelector('input[type="email"]').value,
      organization: formData.get('organization') || this.querySelector('input[placeholder="Organization"]').value,
      message: formData.get('message') || this.querySelector('textarea').value
    };
    
    // Validate form
    if (!formValues.email || !formValues.message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Simulate form submission (in production, this would send to a backend service)
    console.log('Form submitted with data:', formValues);
    
    // Show success message
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Message Sent!';
    submitButton.style.background = 'var(--navy-light)';
    
    // Reset form
    this.reset();
    
    // Restore button after 3 seconds
    setTimeout(() => {
      submitButton.textContent = originalText;
      submitButton.style.background = '';
    }, 3000);
  });
}

/**
 * Intersection Observer for Fade-in Animations
 */
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply fade-in animation to cards
document.querySelectorAll('.info-card, .service-block, .pub-card, .cred-item').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(card);
});

/**
 * Active Navigation Link Highlighting
 */
window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href').slice(1) === current) {
      link.style.color = 'var(--navy)';
      link.style.fontWeight = '500';
    }
  });
});

/**
 * Stat Cards Counter Animation
 */
function animateCounter(element, target, duration = 2000) {
  let current = 0;
  const increment = target / (duration / 16);
  
  const updateCounter = () => {
    if (current < target) {
      current += increment;
      element.textContent = Math.floor(current);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  };
  
  updateCounter();
}

/**
 * Trigger counter animation when stats section comes into view
 */
const statsSection = document.querySelector('.hero-right');
if (statsSection) {
  const statsObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animation triggers here - you can enhance with actual counter values
        statsObserver.unobserve(entry.target);
      }
    });
  });
  
  statsObserver.observe(statsSection);
}

/**
 * Keyboard Navigation Support
 * Allow Tab key navigation and Enter key to activate links
 */
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && document.activeElement.tagName === 'A') {
    document.activeElement.click();
  }
});

/**
 * Mobile Menu Toggle (if needed in future)
 */
function initMobileMenu() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelector('.nav-links');
  
  if (window.innerWidth <= 768) {
    // Mobile view enhancements can be added here
    navbar.style.flexWrap = 'wrap';
  }
}

window.addEventListener('resize', initMobileMenu);
initMobileMenu();

/**
 * Print Styles Optimization
 */
window.addEventListener('beforeprint', function () {
  document.body.style.background = 'white';
  document.querySelector('.navbar').style.display = 'none';
});

window.addEventListener('afterprint', function () {
  document.querySelector('.navbar').style.display = 'flex';
});

/**
 * Accessibility: Focus Visible Styles
 */
document.addEventListener('keydown', function (e) {
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-nav');
  }
});

document.addEventListener('mousedown', function () {
  document.body.classList.remove('keyboard-nav');
});

/**
 * Performance Optimization: Lazy Loading
 */
if ('IntersectionObserver' in window) {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

/**
 * Service List Interaction
 */
document.querySelectorAll('.service-list li').forEach((item, index) => {
  item.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s forwards`;
  item.style.opacity = '0';
});

// Add keyframe animation if not already in CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

/**
 * Email Link Handler
 */
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
  link.addEventListener('click', function (e) {
    // This will open the default email client
    // In production, you might want to show a contact form instead
  });
});

/**
 * Phone Link Handler
 */
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
  link.addEventListener('click', function (e) {
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      e.preventDefault();
      alert('Please use your phone to call, or click the "Get in Touch" form above.');
    }
  });
});

/**
 * Track User Interactions (Analytics)
 */
function trackEvent(eventName, eventData = {}) {
  console.log(`Event: ${eventName}`, eventData);
  // In production, send to analytics service like Google Analytics
}

document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline').forEach(button => {
  button.addEventListener('click', function () {
    trackEvent('button_click', {
      text: this.textContent,
      href: this.href || 'N/A'
    });
  });
});

/**
 * Scroll Position Memory
 */
window.addEventListener('beforeunload', function () {
  sessionStorage.setItem('scrollPosition', window.scrollY);
});

window.addEventListener('load', function () {
  const scrollPosition = sessionStorage.getItem('scrollPosition');
  if (scrollPosition !== null) {
    window.scrollTo(0, parseInt(scrollPosition));
  }
});

/**
 * Dark Mode Toggle (Optional Enhancement)
 */
function initDarkModeToggle() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) {
    // Could implement dark mode here if desired
    console.log('User prefers dark mode');
  }
}

initDarkModeToggle();

/**
 * Log Page Load Performance
 */
window.addEventListener('load', function () {
  if (window.performance && window.performance.timing) {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`Page loaded in ${pageLoadTime}ms`);
  }
});

/**
 * Service Worker Registration (Optional for PWA)
 */
if ('serviceWorker' in navigator) {
  // Uncomment to enable service worker caching
  // navigator.serviceWorker.register('sw.js').catch(() => {});
}

// Initialize all features
console.log('Raheelsid.com website initialized successfully');
