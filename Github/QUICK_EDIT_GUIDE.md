# Raheelsid.com - Quick Edit Reference

## 🔧 Most Common Edits

### 1. Update Contact Email
**File:** `index.html`
**Find:** `contact@raheelsid.com` (appears 2 times)
**Replace with:** Your actual email

**Location 1:** Line ~286
```html
<a href="mailto:contact@raheelsid.com">contact@raheelsid.com</a>
```

**Location 2:** Form section around line ~241
```html
<input type="email" placeholder="Email Address" required aria-label="Email">
```

---

### 2. Update Phone Number
**File:** `index.html`
**Find:** `+1-000-000-0000`
**Replace with:** Your phone number

**Location:** Line ~296
```html
<a href="tel:+1-000-000-0000">Available by Appointment</a>
```

---

### 3. Update Statistics (Hero Section)
**File:** `index.html`
**Lines:** 82-108

**Change Experience Years:**
```html
<div class="stat-val">20<span>+</span></div>
```

**Change Number of Engagements:**
```html
<div class="stat-val">50<span>+</span></div>
```

**Change AML Recoveries:**
```html
<div class="stat-val">$2B<span>+</span></div>
```

---

### 4. Add Social Media Links
**File:** `index.html`
**Lines:** 297-302

```html
<div class="social-links">
  <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
  <a href="https://twitter.com/yourhandle">Twitter</a>
  <a href="https://researchgate.net/yourprofile">ResearchGate</a>
</div>
```

---

### 5. Update Credentials/Qualifications
**File:** `index.html`
**Lines:** 237-268

Example - Change PhD info:
```html
<div class="cred-item">
  <div class="cred-type">PhD</div>
  <h3>Financial Crime & Compliance</h3>
  <p>University of Applied Sciences | Completed 2020</p>
</div>
```

---

### 6. Modify Expertise Cards
**File:** `index.html`
**Lines:** 152-197

Example card structure:
```html
<div class="info-card">
  <div class="info-card-num">01</div>
  <h3>Anti-Money Laundering</h3>
  <p>Comprehensive AML program development, implementation, and regulatory compliance strategies...</p>
</div>
```

---

### 7. Update Services Section
**File:** `index.html`
**Lines:** 220-265

Service block structure:
```html
<div class="service-block">
  <h3>Program Assessment</h3>
  <p>Complete evaluation of existing AML/CFT programs...</p>
  <ul class="service-list">
    <li>Risk Assessment Audits</li>
    <li>Compliance Gap Analysis</li>
    <li>Control Effectiveness Testing</li>
    <li>Regulatory Readiness Review</li>
  </ul>
</div>
```

---

### 8. Change Color Theme
**File:** `styles.css`
**Lines:** 5-16 (CSS Variables)

```css
:root {
  --navy: #0f2044;           /* Change primary color */
  --navy-light: #1e3d72;     /* Change accent color */
  --accent: #d4af37;         /* Change highlight color */
  --muted: #7a8398;          /* Change text color */
}
```

**Example - Change to Blue Theme:**
```css
--navy: #1e3a8a;           /* Dark blue */
--navy-light: #3b82f6;     /* Bright blue */
--accent: #60a5fa;         /* Light blue */
```

---

### 9. Add New Expertise Card
**File:** `index.html`
**After Line:** 193 (end of third-col)

```html
<div class="info-card">
  <div class="info-card-num">07</div>
  <h3>New Service Title</h3>
  <p>Description of your new service offering goes here.</p>
</div>
```

---

### 10. Update Page Title
**File:** `index.html`
**Line:** 5

```html
<title>Raheel Siddiqui — PhD, CAMS | Financial Crime & Compliance Expert</title>
```

---

## 📝 HTML Quick Tips

### Add Internal Link
```html
<a href="#expertise">Link to Expertise</a>
```

### Add External Link
```html
<a href="https://example.com" target="_blank">External Site</a>
```

### Add Email Link
```html
<a href="mailto:email@example.com">Send Email</a>
```

### Add Phone Link
```html
<a href="tel:+1-555-0000">Call Us</a>
```

### Format Text
```html
<strong>Bold Text</strong>
<em>Italic Text</em>
<u>Underlined Text</u>
```

---

## 🎨 CSS Quick Tips

### Change Font Size
```css
font-size: 18px;  /* Change the number */
```

### Change Color
```css
color: #0f2044;  /* Navy blue */
color: var(--navy);  /* Using CSS variable */
```

### Add Spacing
```css
margin: 20px;    /* Space outside */
padding: 20px;   /* Space inside */
```

### Change Width
```css
width: 100%;     /* Full width */
max-width: 800px; /* Maximum width */
width: 50%;      /* Half width */
```

---

## 🔄 Content Replacement Patterns

### Replace Email Everywhere
1. Use Find & Replace (Ctrl+H)
2. Find: `contact@raheelsid.com`
3. Replace: `your-email@domain.com`
4. Click "Replace All"

### Replace Phone Everywhere
1. Use Find & Replace (Ctrl+H)
2. Find: `+1-000-000-0000`
3. Replace: `+1-555-1234`
4. Click "Replace All"

---

## ✅ Editing Checklist

Before publishing, update:
- [ ] Your email address
- [ ] Your phone number
- [ ] Social media links (LinkedIn, Twitter, ResearchGate)
- [ ] Company/institution name (if applicable)
- [ ] Services descriptions (personalize for your offerings)
- [ ] Credentials (actual education/certifications)
- [ ] Statistics (20+ years, 50+ engagements, $2B+ in details)
- [ ] Page title (browser tab title)
- [ ] Meta description (for search engines)

---

## 🚀 Testing After Edit

1. **Save the file** (Ctrl+S)
2. **Hard refresh browser** (Ctrl+Shift+R)
3. **Check all elements load properly**
4. **Test on mobile** (press F12 → Toggle device toolbar)
5. **Click all links** to verify they work

---

## 💡 Pro Tips

1. **Keep backups** - Save a copy before major changes
2. **Test locally first** - Use Live Server or local server
3. **Use Find & Replace** - For bulk updates
4. **Comment your changes** - Add `<!-- Comment -->` notes
5. **Validate HTML** - Use validator.w3.org
6. **Check for typos** - Spell check before publishing

---

## 🆘 Common Mistakes

❌ Forgetting to update email/phone  
✅ Use Find & Replace to change all instances

❌ Breaking links when editing  
✅ Keep section IDs and href values matching

❌ Forgotten password for hosting  
✅ Save credentials securely

❌ Not backing up before changes  
✅ Always have a backup copy

❌ Testing only on desktop  
✅ Test on mobile, tablet, desktop (F12)

---

## 📞 Quick Reference URLs

- **Meta Tags Generator:** https://metatags.io
- **HTML Validator:** https://validator.w3.org
- **CSS Validator:** https://jigsaw.w3.org/css-validator/
- **Mobile Tester:** https://search.google.com/test/mobile-friendly
- **Color Picker:** https://colorpicker.com
- **Icon Finder:** https://fontawesome.com

---

**Last Updated:** April 25, 2024  
**Version:** 1.0

*For more detailed information, see README.md and DEPLOYMENT_GUIDE.md*
