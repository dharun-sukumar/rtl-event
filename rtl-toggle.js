// RTL Toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const rtlToggle = document.getElementById('rtlToggle');
    const htmlElement = document.documentElement;
    
    // Check for saved RTL preference
    const savedDirection = localStorage.getItem('textDirection');
    if (savedDirection) {
        htmlElement.setAttribute('dir', savedDirection);
        updateToggleButton(savedDirection === 'rtl');
    }
    
    if (rtlToggle) {
        rtlToggle.addEventListener('click', function() {
            const currentDirection = htmlElement.getAttribute('dir');
            const isRTL = currentDirection === 'rtl';
            const newDirection = isRTL ? 'ltr' : 'rtl';
            
            // Toggle direction
            htmlElement.setAttribute('dir', newDirection);
            
            // Save preference
            localStorage.setItem('textDirection', newDirection);
            
            // Update button appearance
            updateToggleButton(!isRTL);
            
            // Show notification
            const message = newDirection === 'rtl' 
                ? 'Switched to Right-to-Left layout' 
                : 'Switched to Left-to-Right layout';
            
            if (window.showNotification) {
                window.showNotification(message, 'info');
            }
            
            // Add smooth transition effect
            document.body.style.transition = 'all 0.3s ease-in-out';
            setTimeout(() => {
                document.body.style.transition = '';
            }, 300);
        });
    }
    
    function updateToggleButton(isRTL) {
        if (rtlToggle) {
            const icon = rtlToggle.querySelector('i');
            const text = rtlToggle.querySelector('i').nextSibling;
            
            if (isRTL) {
                rtlToggle.style.background = 'var(--primary-500)';
                rtlToggle.style.color = 'white';
                icon.className = 'fas fa-language';
                rtlToggle.innerHTML = '<i class="fas fa-language"></i> RTL';
                rtlToggle.title = 'Switch to Left-to-Right';
            } else {
                rtlToggle.style.background = 'var(--primary-100)';
                rtlToggle.style.color = 'var(--primary-600)';
                icon.className = 'fas fa-language';
                rtlToggle.innerHTML = '<i class="fas fa-language"></i> RTL';
                rtlToggle.title = 'Switch to Right-to-Left';
            }
        }
    }

    // Apply RTL-specific styles
    function applyRTLStyles() {
        const isRTL = htmlElement.getAttribute('dir') === 'rtl';
        
        if (isRTL) {
            // Add RTL-specific styling
            const style = document.createElement('style');
            style.id = 'rtl-styles';
            style.textContent = `
                [dir="rtl"] .hero-stats {
                    flex-direction: row-reverse;
                }
                
                [dir="rtl"] .nav-menu {
                    flex-direction: row-reverse;
                }
                
                [dir="rtl"] .home-switcher {
                    flex-direction: row-reverse;
                }
                
                [dir="rtl"] .hero-buttons,
                [dir="rtl"] .hero-actions,
                [dir="rtl"] .cta-buttons {
                    flex-direction: row-reverse;
                }
                
                [dir="rtl"] .contact-method,
                [dir="rtl"] .meta-item,
                [dir="rtl"] .schedule-item,
                [dir="rtl"] .stat-card {
                    flex-direction: row-reverse;
                }
                
                [dir="rtl"] .contact-method .contact-details,
                [dir="rtl"] .meta-item div,
                [dir="rtl"] .schedule-details,
                [dir="rtl"] .stat-info {
                    text-align: right;
                }
                
                [dir="rtl"] .features-grid,
                [dir="rtl"] .speakers-grid,
                [dir="rtl"] .tracks-grid,
                [dir="rtl"] .pricing-grid {
                    direction: rtl;
                }
                
                [dir="rtl"] .track-topics li:before {
                    content: '←';
                    right: 0;
                    left: auto;
                }
                
                [dir="rtl"] .track-topics li {
                    padding-right: var(--spacing-6);
                    padding-left: 0;
                }
                
                [dir="rtl"] .venue-features li:before {
                    right: 0;
                    left: auto;
                }
                
                [dir="rtl"] .venue-features li {
                    padding-right: var(--spacing-6);
                    padding-left: 0;
                }
                
                [dir="rtl"] .footer-content {
                    direction: rtl;
                }
                
                [dir="rtl"] .social-links {
                    flex-direction: row-reverse;
                }
                
                [dir="rtl"] .dashboard-container {
                    flex-direction: row-reverse;
                }
                
                [dir="rtl"] .dashboard-sidebar {
                    border-right: none;
                    border-left: 1px solid var(--neutral-200);
                }
                
                [dir="rtl"] .sidebar-link {
                    flex-direction: row-reverse;
                }
                
                [dir="rtl"] .header-actions,
                [dir="rtl"] .card-header {
                    flex-direction: row-reverse;
                }
                
                [dir="rtl"] .form-row {
                    direction: rtl;
                }
                
                [dir="rtl"] .ticket-header {
                    flex-direction: row-reverse;
                }
                
                [dir="rtl"] .auth-form-wrapper {
                    direction: rtl;
                }
                
                [dir="rtl"] .error-actions,
                [dir="rtl"] .coming-soon-actions {
                    flex-direction: row-reverse;
                }
                
                [dir="rtl"] .schedule-item:hover {
                    transform: translateX(-4px);
                }
                
                [dir="rtl"] .ticket-features li {
                    flex-direction: row-reverse;
                }
                
                [dir="rtl"] .notification {
                    right: auto;
                    left: 20px;
                    transform: translateX(-100%);
                }
                
                [dir="rtl"] .notification.show {
                    transform: translateX(0);
                }
            `;
            
            // Remove existing RTL styles
            const existingStyle = document.getElementById('rtl-styles');
            if (existingStyle) {
                existingStyle.remove();
            }
            
            document.head.appendChild(style);
        } else {
            // Remove RTL styles when switching back to LTR
            const rtlStyles = document.getElementById('rtl-styles');
            if (rtlStyles) {
                rtlStyles.remove();
            }
        }
    }

    // Apply RTL styles when direction changes
    const directionObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'dir') {
                applyRTLStyles();
            }
        });
    });

    directionObserver.observe(htmlElement, {
        attributes: true,
        attributeFilter: ['dir']
    });

    // Initial application of RTL styles
    applyRTLStyles();

    console.log('RTL Toggle functionality initialized ✨');
});