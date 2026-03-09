import './style.css'

// Navigation Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav?.classList.add('scrolled');
    } else {
        nav?.classList.remove('scrolled');
    }
});

// Scroll Reveal Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <nav>
    <div class="container nav-container">
      <a href="#" class="logo">KHARECE<span>.</span></a>
      <ul class="nav-links">
        <li><a href="#services">Solutions</a></li>
        <li><a href="#expertise">Expertise</a></li>
        <li><a href="#insights">Insights</a></li>
        <li><a href="#why-us">Vision</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div class="nav-actions">
        <a href="#contact" class="btn btn-primary" style="padding: 0.6rem 1.5rem; font-size: 0.85rem;">Get Started</a>
      </div>
      <div class="menu-toggle" id="mobile-menu-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>

  <header class="hero">
    <div class="container">
      <div class="hero-content reveal">
        <div class="badge">Modern Business Tech</div>
        <h1 class="text-gradient">Smart <span class="text-brand">Software</span> for Modern Business.</h1>
        <p>KHARECE provides expert technology services designed to grow your business, keep your data safe, and improve how you use digital tools with people-focused technology.</p>
        <div class="hero-actions">
          <a href="#services" class="btn btn-primary">
            Explore Solutions
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
          <a href="#contact" class="btn btn-secondary">Talk to an Expert</a>
        </div>
      </div>
    </div>
  </header>

  <section id="services">
    <div class="container">
      <div class="section-header reveal">
        <div class="badge">Services</div>
        <h2 class="text-gradient">Our Core <span class="text-brand">Expertise</span></h2>
        <p>Strategic technology solutions built to give your business an edge and help things run smoothly.</p>
      </div>
      
      <div class="services-grid">
        <div class="service-card reveal">
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
          </div>
          <h3>Software Development</h3>
          <p>Custom-built, scalable software solutions engineered with the latest frameworks to drive your business digital transformation.</p>
        </div>
        
        <div class="service-card reveal">
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
          </div>
          <h3>Cloud Support</h3>
          <p>Smooth move to the cloud, easy-to-manage systems, and reliable storage solutions for the modern era.</p>
        </div>
        
        <div class="service-card reveal">
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          </div>
          <h3>Dedicated Support</h3>
          <p>A reliable technical partner by your side. Continuous maintenance and fast fixes to keep your team working without breaks.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="expertise" style="background: var(--bg-surface);">
    <div class="container">
      <div class="section-header reveal">
        <div class="badge">Expertise</div>
        <h2 class="text-gradient">Technical <span class="text-brand">Depth</span> & Mastery</h2>
        <p>We leverage a modern tech stack to deliver high-performance, resilient systems.</p>
      </div>
      <div class="services-grid">
        <div class="service-card reveal">
          <h3>Website & App Experts</h3>
          <p>Building high-performance websites and applications that are easy to use and fast.</p>
        </div>
        <div class="service-card reveal">
          <h3>Cloud Setup</h3>
          <p>Setting up and managing reliable cloud systems that grow with your business.</p>
        </div>
        <div class="service-card reveal">
          <h3>Safe & Secure</h3>
          <p>High-level security and data protection built into every part of your technology.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="insights">
    <div class="container">
      <div class="section-header reveal">
        <div class="badge">Insights</div>
        <h2 class="text-gradient">Thought <span class="text-brand">Leadership</span></h2>
        <p>Stay ahead of the curve with our latest perspectives on technology and business strategy.</p>
      </div>
      <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
         <div class="service-card reveal" style="padding: 2rem;">
            <div style="color: var(--brand-primary); font-size: 0.8rem; margin-bottom: 1rem;">March 2026 • AI Strategy</div>
            <h4>How AI is Changing the Way Businesses Work</h4>
            <p style="font-size: 0.95rem; margin-top: 1rem;">Looking at how smart tools are making businesses run better and helping customers more.</p>
         </div>
         <div class="service-card reveal" style="padding: 2rem;">
            <div style="color: var(--brand-primary); font-size: 0.8rem; margin-bottom: 1rem;">Feb 2026 • Cloud Costs</div>
            <h4>Managing Technology Costs</h4>
            <p style="font-size: 0.95rem; margin-top: 1rem;">Easy steps to lower your technology spending without slowing down your business.</p>
         </div>
      </div>
    </div>
  </section>

  <section id="why-us" style="background: var(--bg-surface);">
    <div class="container">
      <div class="contact-grid">
        <div class="reveal">
          <div class="badge">The KHARECE Advantage</div>
          <h2 class="text-gradient">Engineered for <span class="text-brand">Trust</span> and Performance.</h2>
          <p style="margin-top: 1.5rem;">We don't just manage IT; we architect resilient environments that allow your business to innovate without friction.</p>
          <ul style="list-style: none; margin-top: 2.5rem; display: grid; gap: 1.5rem;">
            <li style="display: flex; gap: 1rem; align-items: center;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>24/7/365 Proactive Monitoring</span>
            </li>
            <li style="display: flex; gap: 1rem; align-items: center;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Security-First Infrastructure Fabric</span>
            </li>
            <li style="display: flex; gap: 1rem; align-items: center;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Dedicated Partner-Level Support</span>
            </li>
          </ul>
        </div>
        <div class="reveal">
          <div style="background: linear-gradient(135deg, var(--bg-surface-soft) 0%, var(--bg-deep) 100%); padding: 3rem; border-radius: 32px; border: 1px solid var(--glass-border); position: relative;">
            <div style="position: absolute; top: -20px; right: -20px; width: 100px; height: 100px; background: var(--brand-primary); border-radius: 50%; filter: blur(60px); opacity: 0.2;"></div>
            <h3 style="margin-bottom: 2rem;">"Our mission is to bridge the gap between complex technology and tangible business growth."</h3>
            <div style="display: flex; align-items: center; gap: 1rem;">
              <div style="width: 48px; height: 48px; background: var(--brand-primary); border-radius: 50%;"></div>
              <div>
                <p style="color: #fff; font-weight: 700; margin: 0;">Peter Kharece</p>
                <p style="font-size: 0.85rem; margin: 0;">Lead Architect & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="contact">
    <div class="container">
      <div class="contact-grid">
        <div class="reveal">
          <div class="badge">Connect</div>
          <h2 class="text-gradient">Ready to <span class="text-brand">Transform?</span></h2>
          <p style="margin: 2rem 0;">Initiate a consultation with our technology strategists and discover how we can elevate your IT environment.</p>
          <div style="display: grid; gap: 2rem;">
            <div>
              <p style="color: #fff; font-weight: 700; margin-bottom: 0.5rem;">Strategy Hub</p>
              <p>UMUSA DIGITAL Center, London UK</p>
            </div>
            <div>
              <p style="color: #fff; font-weight: 700; margin-bottom: 0.5rem;">Direct Inquiry</p>
              <p>expert@kharece.co.uk</p>
            </div>
          </div>
        </div>
        
        <div class="contact-card reveal">
          <form id="lead-form">
            <div class="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" required>
            </div>
            <div class="form-group">
              <label>Professional Email</label>
              <input type="email" placeholder="john@company.com" required>
            </div>
            <div class="form-group">
              <label>Company</label>
              <input type="text" placeholder="Tech Innovations Ltd.">
            </div>
            <div class="form-group">
              <label>Inquiry Details</label>
              <textarea rows="4" placeholder="Tell us about your technical challenges..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%;">
              Send Message
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="container footer-content">
      <p style="font-size: 0.9rem;">&copy; ${new Date().getFullYear()} KHARECE Technology Ltd. Registered in the UK.</p>
      <div class="social-links">
        <a href="#">LinkedIn</a>
        <a href="#">Twitter</a>
        <a href="#">Security Hub</a>
      </div>
    </div>
  </footer>
`

// Initial activation of scroll reveals
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Mobile Menu Toggle Logic
const menuBtn = document.querySelector('#mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

menuBtn?.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinks?.classList.toggle('active');
    document.body.style.overflow = navLinks?.classList.contains('active') ? 'hidden' : '';
});

// Close menu when a link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        menuBtn?.classList.remove('active');
        navLinks?.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navLinks?.classList.contains('active') && 
        !navLinks.contains(e.target as Node) && 
        !menuBtn?.contains(e.target as Node)) {
        menuBtn?.classList.remove('active');
        navLinks?.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Form submission handler
const form = document.querySelector('#lead-form') as HTMLFormElement;
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    if (btn) {
        const originalContent = btn.innerHTML;
        btn.textContent = 'Request Dispatched';
        btn.style.background = '#22c55e';
        btn.style.boxShadow = '0 10px 30px rgba(34, 197, 94, 0.4)';
        
        setTimeout(() => {
            btn.innerHTML = originalContent;
            btn.style.background = '';
            btn.style.boxShadow = '';
            form.reset();
        }, 3000);
    }
});
