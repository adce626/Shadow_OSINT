// DOM Elements
const searchInput = document.getElementById('searchInput');
const categoryCards = document.querySelectorAll('.category-card');
const filterBtns = document.querySelectorAll('.filter-btn');

// OSINT Categories Data with resources
const osintCategories = {
    username: {
        title: "أسماء المستخدمين",
        resources: [
            { name: "Sherlock", url: "https://github.com/sherlock-project/sherlock", description: "البحث عن أسماء المستخدمين عبر المنصات" },
            { name: "WhatsMyName", url: "https://whatsmyname.app", description: "فحص أسماء المستخدمين" },
            { name: "Namechk", url: "https://namechk.com", description: "فحص توفر أسماء المستخدمين" }
        ]
    },
    email: {
        title: "عناوين البريد الإلكتروني",
        resources: [
            { name: "Hunter.io", url: "https://hunter.io", description: "البحث عن عناوين البريد الإلكتروني" },
            { name: "Have I Been Pwned", url: "https://haveibeenpwned.com", description: "فحص تسريب البيانات" },
            { name: "EmailRep", url: "https://emailrep.io", description: "سمعة البريد الإلكتروني" }
        ]
    },
    domain: {
        title: "أسماء النطاقات",
        resources: [
            { name: "Whois Lookup", url: "https://whois.net", description: "معلومات النطاق" },
            { name: "SecurityTrails", url: "https://securitytrails.com", description: "تاريخ DNS والنطاقات الفرعية" },
            { name: "BuiltWith", url: "https://builtwith.com", description: "تقنيات المواقع" }
        ]
    },
    ip: {
        title: "عناوين IP و MAC",
        resources: [
            { name: "Shodan", url: "https://shodan.io", description: "محرك بحث للأجهزة المتصلة" },
            { name: "VirusTotal", url: "https://virustotal.com", description: "فحص عناوين IP والملفات" },
            { name: "AbuseIPDB", url: "https://abuseipdb.com", description: "قاعدة بيانات عناوين IP المشبوهة" }
        ]
    },
    social: {
        title: "الشبكات الاجتماعية",
        resources: [
            { name: "Social Searcher", url: "https://socialsearcher.com", description: "البحث في وسائل التواصل الاجتماعي" },
            { name: "Mention", url: "https://mention.com", description: "مراقبة الإشارات" },
            { name: "Brand24", url: "https://brand24.com", description: "مراقبة العلامة التجارية" }
        ]
    },
    geolocation: {
        title: "أدوات الموقع الجغرافي والخرائط",
        resources: [
            { name: "Google Earth", url: "https://earth.google.com", description: "صور الأقمار الصناعية" },
            { name: "Wikimapia", url: "https://wikimapia.org", description: "خرائط تفاعلية" },
            { name: "SunCalc", url: "https://suncalc.org", description: "حساب موقع الشمس والظلال" }
        ]
    },
    search: {
        title: "محركات البحث",
        resources: [
            { name: "DuckDuckGo", url: "https://duckduckgo.com", description: "محرك بحث يحمي الخصوصية" },
            { name: "Yandex", url: "https://yandex.com", description: "محرك بحث روسي" },
            { name: "StartPage", url: "https://startpage.com", description: "نتائج Google مع الخصوصية" }
        ]
    },
    archives: {
        title: "الأرشيف",
        resources: [
            { name: "Wayback Machine", url: "https://archive.org", description: "أرشيف الإنترنت" },
            { name: "Archive.today", url: "https://archive.today", description: "أرشيف المواقع" },
            { name: "CachedPages", url: "http://cachedpages.com", description: "الصفحات المحفوظة" }
        ]
    },
    crypto: {
        title: "العملات الرقمية",
        resources: [
            { name: "Blockchain.info", url: "https://blockchain.info", description: "مستكشف البيتكوين" },
            { name: "Etherscan", url: "https://etherscan.io", description: "مستكشف الإيثريوم" },
            { name: "OXT", url: "https://oxt.me", description: "تحليل معاملات البيتكوين" }
        ]
    },
    threat: {
        title: "استخبارات التهديدات",
        resources: [
            { name: "MISP", url: "https://misp-project.org", description: "منصة مشاركة التهديدات" },
            { name: "AlienVault OTX", url: "https://otx.alienvault.com", description: "تبادل التهديدات" },
            { name: "ThreatCrowd", url: "https://threatcrowd.org", description: "محرك بحث التهديدات" }
        ]
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    initializeCards();
    addInteractiveEffects();
});

// Initialize event listeners
function initializeEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            handleFilter(this.dataset.category);
        });
    });

    // Category cards click handlers
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            handleCategoryClick(this.dataset.category);
        });
    });
}

// Handle search functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    categoryCards.forEach(card => {
        const cardTitle = card.querySelector('h3').textContent.toLowerCase();
        const cardDescription = card.querySelector('p').textContent.toLowerCase();
        
        if (searchTerm === '' || 
            cardTitle.includes(searchTerm) || 
            cardDescription.includes(searchTerm)) {
            card.style.display = 'flex';
            card.classList.remove('hidden');
            // Add highlight animation
            card.style.animation = 'none';
            setTimeout(() => {
                card.style.animation = 'pulse 0.5s ease-in-out';
            }, 10);
        } else {
            card.style.display = 'none';
            card.classList.add('hidden');
        }
    });

    // Show "no results" message if needed
    const visibleCards = Array.from(categoryCards).filter(card => 
        card.style.display !== 'none'
    );
    
    if (visibleCards.length === 0 && searchTerm !== '') {
        showNoResultsMessage();
    } else {
        hideNoResultsMessage();
    }
}

// Handle filter functionality
function handleFilter(category) {
    // Update active filter button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Filter cards
    if (category === 'all') {
        categoryCards.forEach(card => {
            card.style.display = 'flex';
            card.classList.remove('hidden');
        });
    } else if (category === 'trending') {
        // Show trending categories (you can define which ones are trending)
        const trendingCategories = ['social', 'search', 'crypto', 'threat'];
        categoryCards.forEach(card => {
            if (trendingCategories.includes(card.dataset.category)) {
                card.style.display = 'flex';
                card.classList.remove('hidden');
                card.classList.add('trending');
            } else {
                card.style.display = 'none';
                card.classList.add('hidden');
            }
        });
    }
}

// Handle category card clicks
function handleCategoryClick(category) {
    const categoryData = osintCategories[category];
    
    if (categoryData) {
        showCategoryModal(categoryData);
    } else {
        // For categories without specific data, show a generic message
        showGenericCategoryInfo(category);
    }
}

// Show category modal with resources
function showCategoryModal(categoryData) {
    // Create modal HTML
    const modalHTML = `
        <div class="modal-overlay" onclick="closeModal()">
            <div class="modal-content" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <h2>${categoryData.title}</h2>
                    <button class="close-btn" onclick="closeModal()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="resources-grid">
                        ${categoryData.resources.map(resource => `
                            <div class="resource-item">
                                <h4>${resource.name}</h4>
                                <p>${resource.description}</p>
                                <a href="${resource.url}" target="_blank" class="resource-link">
                                    <i class="fas fa-external-link-alt"></i>
                                    زيارة الموقع
                                </a>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;

    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add modal styles dynamically
    addModalStyles();
    
    // Animate modal in
    setTimeout(() => {
        document.querySelector('.modal-overlay').style.opacity = '1';
        document.querySelector('.modal-content').style.transform = 'translateY(0) scale(1)';
    }, 10);
}

// Show generic category information
function showGenericCategoryInfo(category) {
    const card = document.querySelector(`[data-category="${category}"]`);
    const title = card.querySelector('h3').textContent;
    const description = card.querySelector('p').textContent;
    
    const modalHTML = `
        <div class="modal-overlay" onclick="closeModal()">
            <div class="modal-content" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <h2>${title}</h2>
                    <button class="close-btn" onclick="closeModal()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <p>${description}</p>
                    <div class="coming-soon">
                        <i class="fas fa-tools"></i>
                        <h3>قريباً...</h3>
                        <p>سيتم إضافة المصادر والأدوات المتخصصة لهذا القسم قريباً</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    addModalStyles();
    
    setTimeout(() => {
        document.querySelector('.modal-overlay').style.opacity = '1';
        document.querySelector('.modal-content').style.transform = 'translateY(0) scale(1)';
    }, 10);
}

// Close modal
function closeModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.style.opacity = '0';
        modal.querySelector('.modal-content').style.transform = 'translateY(-50px) scale(0.9)';
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// Add modal styles
function addModalStyles() {
    if (!document.querySelector('#modal-styles')) {
        const styles = `
            <style id="modal-styles">
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .modal-content {
                    background: linear-gradient(135deg, var(--bg-card) 0%, var(--bg-hover) 100%);
                    border: 2px solid var(--primary-green);
                    border-radius: 20px;
                    max-width: 800px;
                    width: 90%;
                    max-height: 80vh;
                    overflow-y: auto;
                    transform: translateY(-50px) scale(0.9);
                    transition: transform 0.3s ease;
                    box-shadow: var(--glow-large);
                }

                .modal-header {
                    padding: 25px;
                    border-bottom: 1px solid var(--primary-green);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .modal-header h2 {
                    color: var(--primary-green);
                    font-size: 1.8rem;
                    margin: 0;
                }

                .close-btn {
                    background: none;
                    border: none;
                    color: var(--text-secondary);
                    font-size: 1.5rem;
                    cursor: pointer;
                    transition: color 0.3s ease;
                }

                .close-btn:hover {
                    color: var(--primary-green);
                }

                .modal-body {
                    padding: 25px;
                }

                .resources-grid {
                    display: grid;
                    gap: 20px;
                }

                .resource-item {
                    background: var(--bg-dark);
                    padding: 20px;
                    border-radius: 15px;
                    border: 1px solid var(--text-muted);
                    transition: all 0.3s ease;
                }

                .resource-item:hover {
                    border-color: var(--primary-green);
                    transform: translateY(-2px);
                    box-shadow: var(--glow-small);
                }

                .resource-item h4 {
                    color: var(--primary-green);
                    margin-bottom: 10px;
                    font-size: 1.2rem;
                }

                .resource-item p {
                    color: var(--text-secondary);
                    margin-bottom: 15px;
                    line-height: 1.5;
                }

                .resource-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    color: var(--primary-green);
                    text-decoration: none;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }

                .resource-link:hover {
                    color: var(--neon-green);
                    transform: translateX(5px);
                }

                .coming-soon {
                    text-align: center;
                    padding: 40px 20px;
                    color: var(--text-secondary);
                }

                .coming-soon i {
                    font-size: 3rem;
                    color: var(--primary-green);
                    margin-bottom: 20px;
                    animation: iconPulse 2s ease-in-out infinite alternate;
                }

                .coming-soon h3 {
                    color: var(--primary-green);
                    margin-bottom: 15px;
                }
            </style>
        `;
        document.head.insertAdjacentHTML('beforeend', styles);
    }
}

// Suggest resource functionality
function suggestResource() {
    alert('شكراً لاهتمامك! ميزة اقتراح المصادر ستكون متاحة قريباً.');
}

// Show no results message
function showNoResultsMessage() {
    if (!document.querySelector('.no-results')) {
        const message = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>لم يتم العثور على نتائج</h3>
                <p>جرب البحث بكلمات مختلفة أو تصفح جميع الفئات</p>
            </div>
        `;
        document.querySelector('.categories-grid').insertAdjacentHTML('afterend', message);
        
        // Add styles for no results message
        const styles = `
            <style>
                .no-results {
                    text-align: center;
                    padding: 60px 20px;
                    color: var(--text-secondary);
                }
                .no-results i {
                    font-size: 3rem;
                    color: var(--primary-green);
                    margin-bottom: 20px;
                    opacity: 0.7;
                }
                .no-results h3 {
                    color: var(--text-primary);
                    margin-bottom: 15px;
                    font-size: 1.5rem;
                }
            </style>
        `;
        if (!document.querySelector('#no-results-styles')) {
            document.head.insertAdjacentHTML('beforeend', styles.replace('<style>', '<style id="no-results-styles">'));
        }
    }
}

// Hide no results message
function hideNoResultsMessage() {
    const noResults = document.querySelector('.no-results');
    if (noResults) {
        noResults.remove();
    }
}

// Initialize cards with hover effects
function initializeCards() {
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Add interactive effects
function addInteractiveEffects() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('click', createRipple);
    });
}

// Create ripple effect
function createRipple(e) {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('span');
    const radius = Math.max(rect.width, rect.height);
    const left = e.clientX - rect.left - radius / 2;
    const top = e.clientY - rect.top - radius / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${radius}px;
        height: ${radius}px;
        left: ${left}px;
        top: ${top}px;
        background: rgba(0, 255, 136, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    `;
    
    if (!document.querySelector('#ripple-styles')) {
        document.head.insertAdjacentHTML('beforeend', `
            <style id="ripple-styles">
                @keyframes ripple {
                    to {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
            </style>
        `);
    }
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation for cards
function showLoadingState() {
    categoryCards.forEach(card => {
        card.classList.add('loading');
    });
}

function hideLoadingState() {
    categoryCards.forEach(card => {
        card.classList.remove('loading');
    });
}

// Performance optimization: Debounce search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to search
const debouncedSearch = debounce(handleSearch, 300);
searchInput.removeEventListener('input', handleSearch);
searchInput.addEventListener('input', debouncedSearch);