// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Schedule day navigation
    const scheduleDayBtns = document.querySelectorAll('.schedule-day-btn');
    const scheduleDays = document.querySelectorAll('.schedule-day');

    scheduleDayBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetDay = this.getAttribute('data-day');
            
            // Remove active class from all buttons and days
            scheduleDayBtns.forEach(b => b.classList.remove('active'));
            scheduleDays.forEach(d => d.classList.remove('active'));
            
            // Add active class to clicked button and corresponding day
            this.classList.add('active');
            document.getElementById(targetDay).classList.add('active');
        });
    });

    // Registration form ticket selection
    const ticketOptions = document.querySelectorAll('.ticket-option');
    const ticketTypeInput = document.getElementById('ticketType');
    const totalPriceElement = document.getElementById('totalPrice');

    ticketOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            ticketOptions.forEach(opt => opt.classList.remove('active'));
            
            // Add active class to clicked option
            this.classList.add('active');
            
            // Update form fields
            const ticketName = this.querySelector('h3').textContent;
            const ticketPrice = this.querySelector('.price').textContent;
            
            if (ticketTypeInput) {
                ticketTypeInput.value = `${ticketName} - ${ticketPrice}`;
            }
            
            if (totalPriceElement) {
                totalPriceElement.textContent = ticketPrice;
            }
        });
    });

    // Form submissions
    const contactForm = document.getElementById('contactForm');
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');
    const notifyForm = document.getElementById('notifyForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
            this.reset();
        });
    }

    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Registration submitted! Redirecting to payment...', 'success');
            setTimeout(() => {
                // In a real app, this would redirect to payment processor
                window.location.href = 'user-dashboard.html';
            }, 2000);
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Login successful! Redirecting to dashboard...', 'success');
            setTimeout(() => {
                window.location.href = 'user-dashboard.html';
            }, 1500);
        });
    }

    if (notifyForm) {
        notifyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Thank you! We\'ll notify you when this feature launches.', 'success');
            this.reset();
        });
    }

    // Countdown functionality
    function startCountdown() {
        // Set the date we're counting down to
        const countDownDate = new Date("March 15, 2025 09:00:00").getTime();
        
        const timer = setInterval(function() {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Update countdown displays
            updateCountdownElement('days', days);
            updateCountdownElement('hours', hours);
            updateCountdownElement('minutes', minutes);
            updateCountdownElement('seconds', seconds);
            
            // Coming soon page countdown
            updateCountdownElement('csdays', days);
            updateCountdownElement('cshours', hours);
            updateCountdownElement('csminutes', minutes);
            updateCountdownElement('csseconds', seconds);
            
            if (distance < 0) {
                clearInterval(timer);
                updateCountdownElement('days', 0);
                updateCountdownElement('hours', 0);
                updateCountdownElement('minutes', 0);
                updateCountdownElement('seconds', 0);
            }
        }, 1000);
    }

    function updateCountdownElement(id, value) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = value.toString().padStart(2, '0');
        }
    }

    // Start countdown if on page with countdown
    if (document.querySelector('.countdown-timer') || document.querySelector('.countdown-display')) {
        startCountdown();
    }

    // Password toggle functionality
    window.togglePassword = function(inputId) {
        const input = document.getElementById(inputId);
        const toggle = input.nextElementSibling;
        const icon = toggle.querySelector('i');
        
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            input.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    };

    // Dashboard sidebar navigation
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                // Remove active class from all links
                sidebarLinks.forEach(l => l.classList.remove('active'));
                // Add active class to clicked link
                this.classList.add('active');
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#privacy' && href !== '#terms') {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add loading animation to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.type === 'submit' || this.closest('form')) {
                this.style.opacity = '0.8';
                setTimeout(() => {
                    this.style.opacity = '1';
                }, 1000);
            }
        });
    });

    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existing = document.querySelector('.notification');
        if (existing) {
            existing.remove();
        }

        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 90px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
            max-width: 400px;
            font-weight: 500;
        `;
        
        notification.textContent = message;
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Animate out and remove
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 4000);

        // Click to dismiss
        notification.addEventListener('click', () => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        });
    }

    // Make showNotification globally available
    window.showNotification = showNotification;

    // Add hover effects to interactive elements
    document.querySelectorAll('.feature-card, .speaker-card, .track-card, .pricing-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Initialize tooltips for buttons with icons
    document.querySelectorAll('[data-tooltip]').forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('data-tooltip');
            tooltip.style.cssText = `
                position: absolute;
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 8px 12px;
                border-radius: 4px;
                font-size: 12px;
                white-space: nowrap;
                z-index: 1000;
                pointer-events: none;
                transform: translateX(-50%);
                bottom: 100%;
                left: 50%;
                margin-bottom: 8px;
            `;
            
            this.style.position = 'relative';
            this.appendChild(tooltip);
        });
        
        element.addEventListener('mouseleave', function() {
            const tooltip = this.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });

    // Add subtle animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.feature-card, .speaker-card, .track-card, .stat-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    console.log('TechConf 2025 - All systems ready! 🚀');
});