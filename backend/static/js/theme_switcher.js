(function() {
    const themes = [
        { id: 'indigo', color: 'bg-indigo', name: 'Midnight Indigo' },
        { id: 'gold', color: 'bg-gold', name: 'Royal Gold' },
        { id: 'emerald', color: 'bg-emerald', name: 'Emerald Forest' },
        { id: 'crimson', color: 'bg-crimson', name: 'Deep Crimson' }
    ];

    // 1. Apply saved theme immediately to prevent flicker
    const savedTheme = localStorage.getItem('unfold-luxury-theme') || 'indigo';
    document.documentElement.setAttribute('data-theme', savedTheme);

    function createSwitcher() {
        // More robust selectors for Unfold's header right area
        const headerRight = document.querySelector('header .flex.items-center.gap-x-2') || 
                            document.querySelector('.flex.items-center.ms-auto') ||
                            document.querySelector('.ml-auto.flex.items-center') ||
                            document.querySelector('header .flex.justify-end');
        
        if (!headerRight || document.querySelector('.theme-switcher-container')) return;

        const container = document.createElement('div');
        container.className = 'theme-switcher-container';
        
        themes.forEach(theme => {
            const btn = document.createElement('div');
            btn.className = `theme-btn ${theme.color} ${savedTheme === theme.id ? 'active' : ''}`;
            btn.title = theme.name;
            btn.onclick = () => {
                document.documentElement.setAttribute('data-theme', theme.id);
                localStorage.setItem('unfold-luxury-theme', theme.id);
                
                // Update active state
                document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Reload to refresh charts and other dynamic components
                setTimeout(() => location.reload(), 200);
            };
            container.appendChild(btn);
        });

        // Insert before the last element (usually the logout/profile)
        headerRight.insertBefore(container, headerRight.firstChild);
    }

    // Run on load and also periodically because Unfold might re-render parts
    window.addEventListener('DOMContentLoaded', createSwitcher);
    
    // Fallback/Retry logic for dynamic headers
    const timer = setInterval(() => {
        if (document.querySelector('.theme-switcher-container')) {
            clearInterval(timer);
        } else {
            createSwitcher();
        }
    }, 1000);
    
    // Limit retries
    setTimeout(() => clearInterval(timer), 10000);
})();
