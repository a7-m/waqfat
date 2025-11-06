const suwarData = [
    { number: 1, name: "الفاتحة", type: "مكية", verses: 7 },
    { number: 2, name: "البقرة", type: "مكية", verses: 286 },
    { number: 3, name: "آل عمران", type: "مدنية", verses: 200 },
    { number: 4, name: "النساء", type: "مدنية", verses: 176 },
    { number: 5, name: "المائدة", type: "مدنية", verses: 120 },
    { number: 6, name: "الأنعام", type: "مكية", verses: 165 },
    { number: 7, name: "الأعراف", type: "مكية", verses: 206 },
    { number: 8, name: "الأنفال", type: "مدنية", verses: 75 },
    { number: 9, name: "التوبة", type: "مدنية", verses: 129 },
    { number: 10, name: "يونس", type: "مكية", verses: 109 },
    { number: 11, name: "هود", type: "مكية", verses: 123 },
    { number: 12, name: "يوسف", type: "مكية", verses: 111 },
    { number: 13, name: "الرعد", type: "مدنية", verses: 43 },
    { number: 14, name: "إبراهيم", type: "مكية", verses: 52 },
    { number: 15, name: "الحجر", type: "مكية", verses: 99 },
    { number: 16, name: "النحل", type: "مكية", verses: 128 },
    { number: 17, name: "الإسراء", type: "مكية", verses: 111 },
    { number: 18, name: "الكهف", type: "مكية", verses: 110 },
    { number: 19, name: "مريم", type: "مكية", verses: 98 },
    { number: 20, name: "طه", type: "مكية", verses: 135 },
    { number: 21, name: "الأنبياء", type: "مكية", verses: 112 },
    { number: 22, name: "الحج", type: "مدنية", verses: 78 },
    { number: 23, name: "المؤمنون", type: "مكية", verses: 118 },
    { number: 24, name: "النور", type: "مدنية", verses: 64 },
    { number: 25, name: "الفرقان", type: "مكية", verses: 77 },
    { number: 26, name: "الشعراء", type: "مكية", verses: 227 },
    { number: 27, name: "النمل", type: "مكية", verses: 93 },
    { number: 28, name: "القصص", type: "مكية", verses: 88 },
    { number: 29, name: "العنكبوت", type: "مكية", verses: 69 },
    { number: 30, name: "الروم", type: "مكية", verses: 60 },
    { number: 31, name: "لقمان", type: "مكية", verses: 34 },
    { number: 32, name: "السجدة", type: "مكية", verses: 30 },
    { number: 33, name: "الأحزاب", type: "مدنية", verses: 73 },
    { number: 34, name: "سبأ", type: "مكية", verses: 54 },
    { number: 35, name: "فاطر", type: "مكية", verses: 45 },
    { number: 36, name: "يس", type: "مكية", verses: 83 },
    { number: 37, name: "الصافات", type: "مكية", verses: 182 },
    { number: 38, name: "ص", type: "مكية", verses: 88 },
    { number: 39, name: "الزمر", type: "مكية", verses: 75 },
    { number: 40, name: "غافر", type: "مكية", verses: 85 },
    { number: 41, name: "فصلت", type: "مكية", verses: 54 },
    { number: 42, name: "الشورى", type: "مكية", verses: 53 },
    { number: 43, name: "الزخرف", type: "مكية", verses: 89 },
    { number: 44, name: "الدخان", type: "مكية", verses: 59 },
    { number: 45, name: "الجاثية", type: "مكية", verses: 37 },
    { number: 46, name: "الأحقاف", type: "مكية", verses: 35 },
    { number: 47, name: "محمد", type: "مدنية", verses: 38 },
    { number: 48, name: "الفتح", type: "مدنية", verses: 29 },
    { number: 49, name: "الحجرات", type: "مدنية", verses: 18 },
    { number: 50, name: "ق", type: "مكية", verses: 45 },
    { number: 51, name: "الذاريات", type: "مكية", verses: 60 },
    { number: 52, name: "الطور", type: "مكية", verses: 49 },
    { number: 53, name: "النجم", type: "مكية", verses: 62 },
    { number: 54, name: "القمر", type: "مكية", verses: 55 },
    { number: 55, name: "الرحمن", type: "مدنية", verses: 78 },
    { number: 56, name: "الواقعة", type: "مكية", verses: 96 },
    { number: 57, name: "الحديد", type: "مدنية", verses: 29 },
    { number: 58, name: "المجادلة", type: "مدنية", verses: 22 },
    { number: 59, name: "الحشر", type: "مدنية", verses: 24 },
    { number: 60, name: "الممتحنة", type: "مدنية", verses: 13 },
    { number: 61, name: "الصف", type: "مدنية", verses: 14 },
    { number: 62, name: "الجمعة", type: "مدنية", verses: 11 },
    { number: 63, name: "المنافقون", type: "مدنية", verses: 11 },
    { number: 64, name: "التغابن", type: "مدنية", verses: 18 },
    { number: 65, name: "الطلاق", type: "مدنية", verses: 12 },
    { number: 66, name: "التحريم", type: "مدنية", verses: 12 },
    { number: 67, name: "الملك", type: "مكية", verses: 30 },
    { number: 68, name: "القلم", type: "مكية", verses: 52 },
    { number: 69, name: "الحاقة", type: "مكية", verses: 52 },
    { number: 70, name: "المعارج", type: "مكية", verses: 44 },
    { number: 71, name: "نوح", type: "مكية", verses: 28 },
    { number: 72, name: "الجن", type: "مكية", verses: 28 },
    { number: 73, name: "المزمل", type: "مكية", verses: 20 },
    { number: 74, name: "المدثر", type: "مكية", verses: 56 },
    { number: 75, name: "القيامة", type: "مكية", verses: 40 },
    { number: 76, name: "الإنسان", type: "مدنية", verses: 31 },
    { number: 77, name: "المرسلات", type: "مكية", verses: 50 },
    { number: 78, name: "النبأ", type: "مكية", verses: 40 },
    { number: 79, name: "النازعات", type: "مكية", verses: 46 },
    { number: 80, name: "عبس", type: "مكية", verses: 42 },
    { number: 81, name: "التكوير", type: "مكية", verses: 29 },
    { number: 82, name: "الانفطار", type: "مكية", verses: 19 },
    { number: 83, name: "المطففين", type: "مكية", verses: 36 },
    { number: 84, name: "الانشقاق", type: "مكية", verses: 25 },
    { number: 85, name: "البروج", type: "مكية", verses: 22 },
    { number: 86, name: "الطارق", type: "مكية", verses: 17 },
    { number: 87, name: "الأعلى", type: "مكية", verses: 19 },
    { number: 88, name: "الغاشية", type: "مكية", verses: 26 },
    { number: 89, name: "الفجر", type: "مكية", verses: 30 },
    { number: 90, name: "البلد", type: "مكية", verses: 20 },
    { number: 91, name: "الشمس", type: "مكية", verses: 15 },
    { number: 92, name: "الليل", type: "مكية", verses: 21 },
    { number: 93, name: "الضحى", type: "مكية", verses: 11 },
    { number: 94, name: "الشرح", type: "مكية", verses: 8 },
    { number: 95, name: "التين", type: "مكية", verses: 8 },
    { number: 96, name: "العلق", type: "مكية", verses: 19 },
    { number: 97, name: "القدر", type: "مكية", verses: 5 },
    { number: 98, name: "البينة", type: "مدنية", verses: 8 },
    { number: 99, name: "الزلزلة", type: "مدنية", verses: 8 },
    { number: 100, name: "العاديات", type: "مكية", verses: 11 },
    { number: 101, name: "القارعة", type: "مكية", verses: 11 },
    { number: 102, name: "التكاثر", type: "مكية", verses: 8 },
    { number: 103, name: "العصر", type: "مكية", verses: 3 },
    { number: 104, name: "الهمزة", type: "مكية", verses: 9 },
    { number: 105, name: "الفيل", type: "مكية", verses: 5 },
    { number: 106, name: "قريش", type: "مكية", verses: 4 },
    { number: 107, name: "الماعون", type: "مكية", verses: 7 },
    { number: 108, name: "الكوثر", type: "مكية", verses: 3 },
    { number: 109, name: "الكافرون", type: "مكية", verses: 6 },
    { number: 110, name: "النصر", type: "مدنية", verses: 3 },
    { number: 111, name: "المسد", type: "مكية", verses: 5 },
    { number: 112, name: "الإخلاص", type: "مكية", verses: 4 },
    { number: 113, name: "الفلق", type: "مكية", verses: 5 },
    { number: 114, name: "الناس", type: "مكية", verses: 6 }
];

// المواضيع
const topicsData = [
    { name: "التوحيد والعبادة", icon: "🕌", count: 0 },
    { name: "الذكر والشكر", icon: "📿", count: 0 },
    { name: "التقوى", icon: "💚", count: 0 },
    { name: "الإيمان بالقدر", icon: "⭐", count: 0 },
    { name: "الصبر والرجاء", icon: "🌟", count: 0 },
    { name: "الأخلاق والآداب", icon: "✨", count: 0 },
    { name: "بر الوالدين", icon: "👨‍👩‍👧", count: 0 },
    { name: "التعاون والأخوة", icon: "🤝", count: 0 },
    { name: "الإخلاص والنية", icon: "💎", count: 0 },
    { name: "التوحيد والإخلاص", icon: "☝️", count: 0 },
    { name: "الدعاء", icon: "🤲", count: 0 },
    { name: "الاستقامة", icon: "🧭", count: 0 },
    { name: "الرجاء والأمل", icon: "🌈", count: 0 },
    { name: "الذكر وطمأنينة القلب", icon: "❤️", count: 0 },
    { name: "الشكر والنعم", icon: "🎁", count: 0 },
    { name: "دوام العبادة", icon: "🔄", count: 0 },
    { name: "السعادة والحياة الطيبة", icon: "😊", count: 0 },
    { name: "الصحبة الصالحة", icon: "🧑‍🤝‍🧑", count: 0 },
    { name: "المحبة والقبول", icon: "🥰", count: 0 },
    { name: "التوحيد والصلاة", icon: "🛐", count: 0 },
    { name: "الاستعداد للتوحيد", icon: "💪", count: 0 },
    { name: "البيت المقدس", icon: "🕋", count: 0 },
    { name: "الزواج", icon: "💍", count: 0 },
    { name: "البيوت", icon: "🏠", count: 0 },
    { name: "القلب السليم", icon: "💖", count: 0 },
    { name: "الشكر والابتلاء", icon: "🙏", count: 0 },
    { name: "التوازن في الحياة", icon: "⚖️", count: 0 },
    { name: "الصلاة", icon: "🙌", count: 0 },
    { name: "العبادة وفعل الخير", icon: "🌟", count: 0 },
    { name: "الإيمان والفلاح", icon: "✨", count: 0 },
    { name: "أسماء الله وصفاته", icon: "<h1>الله</h1>", count: 0 }
];



// حساب عدد الوقفات لكل موضوع
topicsData.forEach(topic => {
    topic.count = waqafatData.filter(w => w.topic === topic.name).length;
    topic.count += hadithData.filter(h => h.topic === topic.name).length;
});

// State Management
let currentPage = 'home';
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
const THEME_CHOICES = ['light', 'dark', 'system'];
let currentTheme = localStorage.getItem('theme');
if (!THEME_CHOICES.includes(currentTheme)) {
    currentTheme = 'system';
}
let modalElement = null;
let modalBodyElement = null;
let modalCloseButton = null;
const prefersDarkScheme = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;


// Initialize
document.addEventListener('DOMContentLoaded', () => {
    currentPage = document.body.dataset.page || 'home';
    initTheme();
    initNavigation();
    initSearch();
    initModal();
    initCardDelegation();
    renderCurrentPage();
});



// Theme Management
function initTheme() {
    applyTheme(currentTheme);
    localStorage.setItem('theme', currentTheme);

    const themeSelect = document.getElementById('themeSelect');
    if (themeSelect) {
        themeSelect.value = currentTheme;
        themeSelect.addEventListener('change', (event) => {
            setTheme(event.target.value);
        });
    }

    if (prefersDarkScheme) {
        const systemThemeListener = () => {
            if (currentTheme === 'system') {
                applyTheme(currentTheme);
            }
        };

        if (typeof prefersDarkScheme.addEventListener === 'function') {
            prefersDarkScheme.addEventListener('change', systemThemeListener);
        } else if (typeof prefersDarkScheme.addListener === 'function') {
            prefersDarkScheme.addListener(systemThemeListener);
        }
    }
}

function setTheme(theme) {
    if (!THEME_CHOICES.includes(theme)) {
        return;
    }

    currentTheme = theme;
    localStorage.setItem('theme', currentTheme);
    applyTheme(currentTheme);

    const themeSelect = document.getElementById('themeSelect');
    if (themeSelect && themeSelect.value !== currentTheme) {
        themeSelect.value = currentTheme;
    }
}

function applyTheme(theme) {
    const effectiveTheme = theme === 'system'
        ? ((prefersDarkScheme && prefersDarkScheme.matches) ? 'dark' : 'light')
        : theme;

    document.documentElement.setAttribute('data-theme', effectiveTheme);
}

function renderMediaModalContent(mediaItem) {
    if (!mediaItem) {
        return `
            <div class="empty-state">
                <h3>تعذر تحميل الوسائط</h3>
                <p>يرجى المحاولة مرة أخرى لاحقًا</p>
            </div>
        `;
    }

    const isVideo = mediaItem.type === 'video';
    const player = isVideo
        ? `<video controls preload="metadata" style="width: 100%; border-radius: 12px;" src="${mediaItem.url}"></video>`
        : `<audio controls preload="metadata" style="width: 100%; margin-top: 15px;" src="${mediaItem.url}"></audio>`;

    const metaParts = [];
    if (mediaItem.reciter) {
        metaParts.push(`<span>${mediaItem.reciter}</span>`);
    }
    if (mediaItem.surah) {
        metaParts.push(`<span class="badge">${mediaItem.surah}</span>`);
    }

    const isFavorite = favorites.includes(`media-${mediaItem.id}`);

    return `
        <div class="card modal-card expanded" data-type="media" data-id="${mediaItem.id}">
            <div class="card-header">
                <div>
                    <h3 class="card-title">${mediaItem.title}</h3>
                    ${metaParts.length ? `<div class="card-meta">${metaParts.join('')}</div>` : ''}
                </div>
                <div class="card-actions">
                    <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite('media-${mediaItem.id}')" aria-label="إضافة إلى المفضلة">
                        <svg viewBox="0 0 24 24" fill="${isFavorite ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        </svg>
                    </button>
                    <button class="action-btn" onclick="event.stopPropagation(); shareMedia('${mediaItem.id}')" aria-label="مشاركة الوسائط">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                            <polyline points="16 6 12 2 8 6"></polyline>
                            <line x1="12" y1="2" x2="12" y2="15"></line>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="card-content">
                ${mediaItem.description ? `<p style="margin-bottom: 20px; color: var(--text-secondary);">${mediaItem.description}</p>` : ''}
                ${player}
            </div>
        </div>
    `;
}

function initFavoritesMediaInteractions() {
    const mediaItems = document.querySelectorAll('.favorite-media-item');
    if (!mediaItems.length) {
        return;
    }

    const mediaLibrary = typeof getMediaLibraryData === 'function'
        ? getMediaLibraryData()
        : (Array.isArray(window.mediaData) ? window.mediaData : []);

    const mediaMap = new Map();
    mediaLibrary.forEach(item => {
        mediaMap.set(item.id, item);
    });

    mediaItems.forEach(itemElement => {
        const { id } = itemElement.dataset;
        if (!id) {
            return;
        }

        const openItemModal = () => {
            const mediaItem = mediaMap.get(id);
            if (mediaItem) {
                openModal(renderMediaModalContent(mediaItem));
            }
        };

        itemElement.addEventListener('click', (event) => {
            if (event.target.closest('.favorite-btn')) {
                return;
            }
            openItemModal();
        });

        itemElement.addEventListener('keydown', (event) => {
            if (!['Enter', ' '].includes(event.key)) {
                return;
            }
            event.preventDefault();
            if (event.target.closest('.favorite-btn')) {
                return;
            }
            openItemModal();
        });
    });
}

// Navigation
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const page = link.getAttribute('data-page');
        if (
            page === currentPage
            || (currentPage === 'topic' && page === 'topics')
            || (currentPage === 'surah' && page === 'suwar')
            || (currentPage === 'hadith-book' && page === 'hadith')
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    const footerLinks = document.querySelectorAll('.footer-section a[data-page]');
    footerLinks.forEach(link => {
        const page = link.getAttribute('data-page');
        if (
            page === currentPage
            || (currentPage === 'topic' && page === 'topics')
            || (currentPage === 'surah' && page === 'suwar')
            || (currentPage === 'hadith-book' && page === 'hadith')
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    const navElement = document.querySelector('.header .nav');
    const navToggle = document.getElementById('navToggle');

    if (navElement && navToggle) {
        const navList = navElement.querySelector('.nav-list');
        const closeNav = () => {
            navElement.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
        };

        navToggle.addEventListener('click', (event) => {
            event.preventDefault();
            const isOpen = navElement.classList.toggle('is-open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        if (navList) {
            navList.addEventListener('click', (event) => {
                const link = event.target.closest('.nav-link');
                if (link && window.innerWidth <= 768) {
                    closeNav();
                }
            });
        }

        document.addEventListener('click', (event) => {
            if (!navElement.classList.contains('is-open')) {
                return;
            }
            if (event.target.closest('.header .nav') || event.target.closest('#navToggle')) {
                return;
            }
            closeNav();
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && navElement.classList.contains('is-open')) {
                closeNav();
            }
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                closeNav();
            }
        });

        closeNav();
    }
}

// Page Loading
function loadPage(page, params = {}) {
    currentPage = page;
    const contentArea = document.getElementById('contentArea');

    if (!contentArea) {
        return;
    }

    switch(page) {
        case 'home':
            contentArea.innerHTML = renderHomePage();
            break;
        case 'waqafat':
            contentArea.innerHTML = renderWaqafatPage();
            break;
        case 'suwar':
            contentArea.innerHTML = renderSuwarPage();
            break;
        case 'surah':
            contentArea.innerHTML = renderSurahPage(params.surahName);
            break;
        case 'topics':
            contentArea.innerHTML = renderTopicsPage();
            break;
        case 'topic':
            contentArea.innerHTML = renderTopicPage(params.topicName);
            break;
        case 'favorites':
            contentArea.innerHTML = renderFavoritesPage();
            break;
        case 'hadith':
            contentArea.innerHTML = renderHadithPage();
            break;
        case 'hadith-book': {
            let { source = '', book = '', chapter = '' } = params;
            if (!source || !book) {
                try {
                    const urlParams = new URLSearchParams(window.location.search);
                    source = source || urlParams.get('source') || '';
                    book = book || urlParams.get('book') || '';
                    chapter = chapter || urlParams.get('chapter') || '';
                } catch (error) {
                    // ignore URL parsing errors
                }
            }

            contentArea.innerHTML = renderHadithBookPage(source, book, chapter);
            break;
        }
        case 'about':
            contentArea.innerHTML = renderAboutPage();
            break;
        case 'references':
            contentArea.innerHTML = renderReferencesPage();
            break;
        default:
            contentArea.innerHTML = renderHomePage();
    }
    attachPageInteractions(page);
}

function renderCurrentPage() {
    loadPage(currentPage);
}

function attachPageInteractions(page) {
    if (page === 'home') {
        const newWaqfahBtn = document.getElementById('newWaqfahBtn');
        if (newWaqfahBtn) {
            newWaqfahBtn.onclick = (event) => {
                event.preventDefault();
                const waqfah = getRandomWaqfah();
                if (waqfah) {
                    openModal(renderWaqfahModalContent(waqfah.id));
                }
            };
        }

        const newHadithBtn = document.getElementById('newHadithBtn');
        if (newHadithBtn) {
            newHadithBtn.onclick = (event) => {
                event.preventDefault();
                const hadith = getRandomHadith();
                if (hadith) {
                    openModal(renderHadithModalContent(hadith.id));
                }
            };
        }

        const newVideoBtn = document.getElementById('newVideoBtn');
        if (newVideoBtn) {
            newVideoBtn.onclick = (event) => {
                event.preventDefault();
                const video = getRandomMediaItem('video');
                if (video) {
                    openModal(renderMediaModalContent(video));
                }
            };
        }

        const newRecitationBtn = document.getElementById('newRecitationBtn');
        if (newRecitationBtn) {
            newRecitationBtn.onclick = (event) => {
                event.preventDefault();
                const recitation = getRandomMediaItem('audio');
                if (recitation) {
                    openModal(renderMediaModalContent(recitation));
                }
            };
        }
    }

    if (page === 'favorites') {
        initFavoritesMediaInteractions();
    }
}

function initModal() {
    modalElement = document.getElementById('modal');
    modalBodyElement = document.getElementById('modalBody');
    modalCloseButton = modalElement ? modalElement.querySelector('.close-button') : null;

    if (!modalElement || !modalBodyElement || !modalCloseButton) {
        return;
    }

    modalCloseButton.addEventListener('click', closeModal);
    modalElement.addEventListener('click', (event) => {
        if (event.target === modalElement) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modalElement.classList.contains('active')) {
            closeModal();
        }
    });
}

function openModal(contentHtml) {
    if (!modalElement || !modalBodyElement) {
        return;
    }
    modalBodyElement.innerHTML = contentHtml;
    modalElement.classList.add('active');
    modalElement.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    modalElement.scrollTop = 0;
    if (modalCloseButton) {
        modalCloseButton.setAttribute('tabindex', '0');
        modalCloseButton.focus();
    }
}

function closeModal() {
    if (!modalElement || !modalBodyElement) {
        return;
    }
    modalElement.classList.remove('active');
    modalElement.setAttribute('aria-hidden', 'true');
    modalBodyElement.innerHTML = '';
    document.body.classList.remove('modal-open');
}

function initCardDelegation() {
    const activateCard = (card) => {
        if (!card || card.closest('.modal-content')) {
            return;
        }

        const { type, id } = card.dataset;
        if (!type || !id) {
            return;
        }

        const numericId = Number(id);
        if (Number.isNaN(numericId)) {
            return;
        }

        if (type === 'waqfah') {
            openModal(renderWaqfahModalContent(numericId));
        } else if (type === 'hadith') {
            openModal(renderHadithModalContent(numericId));
        }
    };

    document.body.addEventListener('click', (event) => {
        const toggleBtn = event.target.closest('.expand-toggle');
        if (toggleBtn) {
            event.preventDefault();
            event.stopPropagation();
            const card = toggleBtn.closest('.card, .hadith-card');
            toggleCardInline(card, toggleBtn);
            return;
        }

        if (event.target.closest('.favorite-btn, .action-btn')) {
            return;
        }

        const card = event.target.closest('.card, .hadith-card');
        activateCard(card);
    });

    document.body.addEventListener('keydown', (event) => {
        if (!['Enter', ' '].includes(event.key)) {
            return;
        }

        if (event.target.closest('.expand-toggle')) {
            event.preventDefault();
            const card = event.target.closest('.card, .hadith-card');
            const toggleBtn = card ? card.querySelector('.expand-toggle') : null;
            if (card && toggleBtn) {
                toggleCardInline(card, toggleBtn);
            }
            return;
        }

        if (event.target.closest('.favorite-btn, .action-btn')) {
            return;
        }

        const card = event.target.closest('.card, .hadith-card');
        if (!card) {
            return;
        }

        event.preventDefault();
        activateCard(card);
    });
}

function toggleCardInline(card, toggleBtn) {
    if (!card) {
        return;
    }
    const isExpanded = card.classList.toggle('expanded');
    card.classList.toggle('collapsed', !isExpanded);
    if (card.hasAttribute('aria-expanded')) {
        card.setAttribute('aria-expanded', String(isExpanded));
    }
    toggleBtn.setAttribute('aria-expanded', String(isExpanded));
    const label = toggleBtn.querySelector('span');
    if (label) {
        label.textContent = isExpanded ? 'عرض أقل' : 'عرض المزيد';
    }
}

function getRandomWaqfah() {
    if (!waqafatData.length) {
        return null;
    }
    const randomIndex = Math.floor(Math.random() * waqafatData.length);
    return waqafatData[randomIndex];
}

function getRandomMediaItem(type = 'all') {
    const library = typeof getMediaLibraryData === 'function'
        ? getMediaLibraryData()
        : (Array.isArray(window.mediaData) ? window.mediaData : []);

    if (!library.length) {
        return null;
    }

    const filtered = type === 'all' ? library : library.filter(item => item.type === type);
    if (filtered.length === 0) {
        return type === 'all' ? null : getRandomMediaItem('all');
    }

    const randomIndex = Math.floor(Math.random() * filtered.length);
    return filtered[randomIndex];
}

function getRandomHadith() {
    if (!Array.isArray(hadithData) || hadithData.length === 0) {
        return null;
    }

    const randomIndex = Math.floor(Math.random() * hadithData.length);
    return hadithData[randomIndex];
}

// Search Functionality
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    if (!searchInput || !searchResults) {
        return;
    }

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();

        if (query.length < 2) {
            searchResults.classList.remove('active');
            searchResults.innerHTML = '';
            return;
        }

        const results = performSearch(query);
        displaySearchResults(results);
    });
}

function performSearch(query) {
    const results = {
        waqafat: [],
        hadith: []
    };

    const normalizedQuery = query.toLowerCase();

    const includesQuery = (value) => {
        if (!value) {
            return false;
        }
        return value.toLowerCase().includes(normalizedQuery);
    };

    waqafatData.forEach(waqfah => {
        if (
            includesQuery(waqfah.ayahText) ||
            includesQuery(waqfah.waqfah) ||
            includesQuery(waqfah.surah) ||
            includesQuery(waqfah.topic)
        ) {
            results.waqafat.push(waqfah);
        }
    });

    hadithData.forEach(hadith => {
        if (
            includesQuery(hadith.hadithText) ||
            includesQuery(hadith.tadabbur) ||
            includesQuery(hadith.topic) ||
            includesQuery(hadith.narrator)
        ) {
            results.hadith.push(hadith);
        }
    });

    return results;
}

function displaySearchResults(results) {
    const searchResults = document.getElementById('searchResults');
    const totalResults = results.waqafat.length + results.hadith.length;

    if (totalResults === 0) {
        searchResults.innerHTML = `
            <div class="empty-state">
                <h3>لم يتم العثور على نتائج</h3>
                <p>جرب البحث بكلمات مختلفة</p>
            </div>
        `;
    } else {
        let html = `<h3>نتائج البحث (${totalResults})</h3>`;

        if (results.waqafat.length > 0) {
            html += `<h4>الوقفات التدبرية (${results.waqafat.length})</h4>`;
            html += '<div class="cards-grid">';
            results.waqafat.slice(0, 3).forEach(waqfah => {
                html += renderWaqfahCard(waqfah);
            });
            html += '</div>';
        }

        if (results.hadith.length > 0) {
            html += `<h4>الأحاديث (${results.hadith.length})</h4>`;
            results.hadith.slice(0, 3).forEach(hadith => {
                html += renderHadithCard(hadith);
            });
        }

        searchResults.innerHTML = html;
    }

    searchResults.classList.add('active');
}

function renderHomePage() {
    return `
        <div class="hero">
            <h2>وقفات تدبرية في القرآن الكريم والسنة النبوية</h2>
            <p>موقع متخصص في عرض وقفات تدبرية من كتاب "القرآن الكريم تدبر وعمل" وتدبر الأحاديث من صحيح البخاري وصحيح مسلم</p>
            <div class="hero-actions">
                <div class="btn-column">
                    <button class="btn btn-primary" id="newWaqfahBtn">وقفة جديدة</button>
                    <button class="btn btn-secondary" id="newHadithBtn">حديث جديد</button>
                </div>
                <div class="btn-column">
                    <button class="btn btn-secondary" id="newVideoBtn">فيديو جديد</button>
                    <button class="btn btn-secondary" id="newRecitationBtn">تلاوة جديدة</button>
                </div>
            </div>
        </div>
        
        <section>
            <h3 style="color: var(--primary-color); margin-bottom: 20px;">أحدث الوقفات التدبرية</h3>
            <div class="cards-grid">
                ${waqafatData.slice(0, 6).map(waqfah => renderWaqfahCard(waqfah)).join('')}
            </div>
        </section>
        
        <section style="margin-top: 50px;">
            <h3 style="color: var(--primary-color); margin-bottom: 20px;">أحدث الأحاديث</h3>
            ${hadithData.slice(0, 3).map(hadith => renderHadithCard(hadith)).join('')}
        </section>
    `;
}

function renderSurahPage(surahName) {
    const filtered = waqafatData.filter(w => w.surah === surahName);
    let html = `
        <h2 style="color: var(--primary-color); margin-bottom: 30px;">وقفات تدبرية في سورة ${surahName}</h2>
    `;
    if (filtered.length > 0) {
        html += `
            <div class="cards-grid">
                ${filtered.map(waqfah => renderWaqfahCard(waqfah)).join('')}
            </div>
        `;
    } else {
        html += `
            <div class="empty-state">
                <h3>لا توجد وقفات تدبرية لهذه السورة بعد</h3>
                <p>جاري العمل على إضافة المزيد من الوقفات</p>
            </div>
        `;
    }
    return html;
}

function renderFavoriteMediaCard(mediaItem) {
    const isFavorite = favorites.includes(`media-${mediaItem.id}`);
    const metaParts = [];
    if (mediaItem.reciter) {
        metaParts.push(mediaItem.reciter);
    }
    if (mediaItem.surah) {
        metaParts.push(mediaItem.surah);
    }

    const descriptionHtml = mediaItem.description
        ? `<p>${mediaItem.description}</p>`
        : '';

    const { ayahText, waqfahText } = typeof getSupplementalTextsForMedia === 'function'
        ? getSupplementalTextsForMedia(mediaItem)
        : { ayahText: '', waqfahText: '' };

    return `
        <div class="media-item favorite-media-item" data-type="media" data-id="${mediaItem.id}" tabindex="0" role="button" aria-label="عرض الوسائط" aria-expanded="false">
            <${mediaItem.type === 'video' ? 'video' : 'audio'} controls preload="metadata" src="${mediaItem.url}"></${mediaItem.type === 'video' ? 'video' : 'audio'}>
            <div class="media-info">
                <div class="media-info-header">
                    <h3>${mediaItem.title || 'وسائط بدون عنوان'}</h3>
                    <div class="media-info-actions">
                        <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite('media-${mediaItem.id}')" aria-label="إضافة إلى المفضلة">
                            <svg viewBox="0 0 24 24" fill="${isFavorite ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                            </svg>
                        </button>
                        <button class="action-btn" onclick="event.stopPropagation(); shareMedia('${mediaItem.id}')" aria-label="مشاركة الوسائط">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                                <polyline points="16 6 12 2 8 6"></polyline>
                                <line x1="12" y1="2" x2="12" y2="15"></line>
                            </svg>
                        </button>
                    </div>
                </div>
                ${metaParts.length ? `<p class="media-meta">${metaParts.join(' • ')}</p>` : ''}
                ${descriptionHtml}
                ${ayahText ? `<p class="media-ayah"><strong>الآية:</strong> ${ayahText}</p>` : ''}
                ${waqfahText ? `<p class="media-waqfah"><strong>وقفة تدبرية:</strong> ${waqfahText}</p>` : ''}
            </div>
        </div>
    `;
}

function renderWaqafatPage() {
    return `
        <h2 style="color: var(--primary-color); margin-bottom: 30px;">جميع الوقفات التدبرية</h2>
        <p style="color: var(--text-secondary); margin-bottom: 30px;">وقفات مختارة من كتاب "القرآن الكريم تدبر وعمل"</p>
        <div class="cards-grid">
            ${waqafatData.map(waqfah => renderWaqfahCard(waqfah)).join('')}
        </div>
    `;
}

function renderSuwarPage() {
    return `
        <h2 style="color: var(--primary-color); margin-bottom: 30px;">السور القرآنية</h2>
        <p style="color: var(--text-secondary); margin-bottom: 30px;">اختر سورة للاطلاع على الوقفات التدبرية فيها</p>
        <div class="suwar-grid">
            ${suwarData.map(surah => `
                <div class="surah-card" onclick="loadPage('surah', { surahName: '${surah.name}' })">
                    <div class="surah-number">${surah.number}</div>
                    <div class="surah-name">${surah.name}</div>
                    <div class="surah-info">${surah.type} - ${surah.verses} آية</div>
                </div>
            `).join('')}
        </div>
        <div id="surahContent"></div>
    `;
}

function renderTopicPage(topicName) {
    const filteredWaqafat = waqafatData.filter(w => w.topic === topicName);
    const filteredHadith = hadithData.filter(h => h.topic === topicName);
    let html = `<h2 style="color: var(--primary-color); margin-bottom: 30px;">${topicName}</h2>`;

    if (filteredWaqafat.length > 0) {
        html += '<h3>الوقفات التدبرية</h3>';
        html += '<div class="cards-grid">';
        html += filteredWaqafat.map(waqfah => renderWaqfahCard(waqfah)).join('');
        html += '</div>';
    }

    if (filteredHadith.length > 0) {
        html += '<h3 style="margin-top: 30px;">الأحاديث</h3>';
        html += filteredHadith.map(hadith => renderHadithCard(hadith)).join('');
    }

    if (filteredWaqafat.length === 0 && filteredHadith.length === 0) {
        html += `
            <div class="empty-state">
                <h3>لا توجد وقفات أو أحاديث لهذا الموضوع بعد</h3>
                <p>جاري العمل على إضافة المزيد</p>
            </div>
        `;
    }

    return html;
}

function renderTopicsPage() {
    return `
        <h2 style="color: var(--primary-color); margin-bottom: 30px;">المواضيع</h2>
        <p style="color: var(--text-secondary); margin-bottom: 30px;">تصفح الوقفات والأحاديث حسب المواضيع</p>
        <div class="topics-grid">
            ${topicsData.map(topic => `
                <div class="topic-card" onclick="loadPage('topic', { topicName: '${topic.name}' })">
                    <div class="topic-icon">${topic.icon}</div>
                    <div class="topic-name">${topic.name}</div>
                    <div class="topic-count">${topic.count} ${topic.count === 1 ? 'وقفة' : 'وقفات'}</div>
                </div>
            `).join('')}
        </div>
        <div id="topicContent"></div>
    `;
}

function renderFavoritesPage() {
    if (favorites.length === 0) {
        return `
            <div class="empty-state">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                <h3>لا توجد مفضلات بعد</h3>
                <p>ابدأ بإضافة وقفات تدبرية وأحاديث ووسائط إلى المفضلة</p>
            </div>
        `;
    }

    const mediaLibrary = typeof getMediaLibraryData === 'function'
        ? getMediaLibraryData()
        : (Array.isArray(window.mediaData) ? window.mediaData : []);

    const favoriteWaqafat = waqafatData.filter(w => favorites.includes(`waqfah-${w.id}`));
    const favoriteHadith = hadithData.filter(h => favorites.includes(`hadith-${h.id}`));
    const favoriteMediaItems = mediaLibrary.filter(item => favorites.includes(`media-${item.id}`));

    if (
        favoriteWaqafat.length === 0
        && favoriteHadith.length === 0
        && favoriteMediaItems.length === 0
    ) {
        return `
            <div class="empty-state">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                <h3>لا توجد مفضلات بعد</h3>
                <p>ابدأ بإضافة وقفات تدبرية وأحاديث ووسائط إلى المفضلة</p>
            </div>
        `;
    }

    let html = '<h2 style="color: var(--primary-color); margin-bottom: 30px;">المفضلة</h2>';

    if (favoriteWaqafat.length > 0) {
        html += '<h3 style="color: var(--secondary-color); margin-bottom: 20px;">الوقفات التدبرية</h3>';
        html += '<div class="cards-grid">';
        html += favoriteWaqafat.map(waqfah => renderWaqfahCard(waqfah)).join('');
        html += '</div>';
    }

    if (favoriteHadith.length > 0) {
        html += '<h3 style="color: var(--secondary-color); margin-top: 40px; margin-bottom: 20px;">الأحاديث</h3>';
        html += favoriteHadith.map(hadith => renderHadithCard(hadith)).join('');
    }

    if (favoriteMediaItems.length > 0) {
        html += '<h3 style="color: var(--secondary-color); margin-top: 40px; margin-bottom: 20px;">الوسائط</h3>';
        html += '<div class="favorites-media-grid">';
        html += favoriteMediaItems.map(item => renderFavoriteMediaCard(item)).join('');
        html += '</div>';
    }

    return html;
}

function groupHadithBySourceAndBook() {
    return hadithData.reduce((acc, hadith) => {
        const source = hadith.source || 'مصادر أخرى';
        if (!acc[source]) {
            acc[source] = {};
        }

        const book = hadith.book || 'أقسام أخرى';
        if (!acc[source][book]) {
            acc[source][book] = [];
        }

        acc[source][book].push(hadith);
        return acc;
    }, {});
}

function renderHadithPage() {
    const groupedHadith = groupHadithBySourceAndBook();
    const latestHadith = hadithData.slice(-3).reverse();

    const indexHtml = Object.entries(groupedHadith).map(([source, books]) => {
        const bookList = Object.entries(books).map(([bookName, items]) => {
            const chapterEntry = items.find(h => h.chapter);
            const chapterText = chapterEntry?.chapter ? ` – ${chapterEntry.chapter}` : '';
            const searchParams = new URLSearchParams({
                source,
                book: bookName
            });
            if (chapterEntry?.chapter) {
                searchParams.set('chapter', chapterEntry.chapter);
            }

            return `
                <li>
                    <a href="hadith-book.html?${searchParams.toString()}" class="hadith-index-link">${bookName}${chapterText}</a>
                </li>
            `;
        }).join('');

        return `
            <div class="hadith-index-group">
                <h3>${source}</h3>
                <ul>
                    ${bookList}
                </ul>
            </div>
        `;
    }).join('');

    const latestHadithHtml = latestHadith.length
        ? latestHadith.map(renderHadithCard).join('')
        : `
            <div class="empty-state">
                <h3>لا توجد أحاديث متاحة بعد</h3>
                <p>سيتم إضافة أحدث الأحاديث هنا فور توافرها.</p>
            </div>
        `;

    return `
        <h2 style="color: var(--primary-color); margin-bottom: 30px;">تدبر الأحاديث النبوية</h2>
        <p style="color: var(--text-secondary); margin-bottom: 30px;">أحدث الأحاديث مع فهرس يسهل الوصول إلى بقية الكتب والأبواب.</p>
        <div class="hadith-index">
            <h3>الفهرس حسب الكتاب والباب</h3>
            <div class="hadith-index-grid">
                ${indexHtml}
            </div>
        </div>
        <section class="hadith-latest-section">
            <h3 class="hadith-latest-title">أحدث الأحاديث</h3>
            ${latestHadithHtml}
        </section>
    `;
}

function renderHadithBookPage(rawSource, rawBook, rawChapter) {
    const source = (rawSource || '').trim();
    const book = (rawBook || '').trim();
    const chapter = (rawChapter || '').trim();

    if (!source || !book) {
        return `
            <div class="hadith-back">
                <a class="hadith-back-link" href="hadith.html">&larr; الرجوع إلى صفحة الأحاديث</a>
            </div>
            <div class="empty-state">
                <h3>لم يتم تحديد كتاب أو مصدر بشكل صحيح</h3>
                <p>الرجاء العودة إلى <a href="hadith.html">صفحة الأحاديث</a> واختيار الكتاب مرة أخرى.</p>
            </div>
        `;
    }

    const groupedHadith = groupHadithBySourceAndBook();
    const sourceGroup = groupedHadith[source];

    if (!sourceGroup || !sourceGroup[book]) {
        return `
            <div class="hadith-back">
                <a class="hadith-back-link" href="hadith.html">&larr; الرجوع إلى صفحة الأحاديث</a>
            </div>
            <div class="empty-state">
                <h3>لا توجد أحاديث لهذا الكتاب حتى الآن</h3>
                <p>يمكنك العودة إلى <a href="hadith.html">صفحة الأحاديث</a> لاستكشاف كتب أخرى.</p>
            </div>
        `;
    }

    let items = sourceGroup[book].slice();

    if (chapter) {
        items = items.filter(hadith => (hadith.chapter || '').trim() === chapter);
    }

    if (!items.length) {
        return `
            <div class="hadith-back">
                <a class="hadith-back-link" href="hadith.html">&larr; الرجوع إلى صفحة الأحاديث</a>
            </div>
            <div class="empty-state">
                <h3>لا توجد أحاديث مطابقة للباب المحدد</h3>
                <p>جرّب العودة إلى <a href="hadith.html">صفحة الأحاديث</a> لاختيار باب آخر.</p>
            </div>
        `;
    }

    const heading = chapter ? `أحاديث ${book} – ${chapter}` : `أحاديث ${book}`;

    const cardsHtml = items.map(renderHadithCard).join('');

    return `
        <div class="hadith-back">
            <a class="hadith-back-link" href="hadith.html">&larr; الرجوع إلى صفحة الأحاديث</a>
        </div>
        <h2 style="color: var(--primary-color); margin-bottom: 20px;">${heading}</h2>
        <p style="color: var(--text-secondary); margin-bottom: 10px;">المصدر: ${source}</p>
        ${chapter ? `<p style="color: var(--text-secondary); margin-bottom: 20px;">الباب: ${chapter}</p>` : ''}
        <div class="hadith-book-list">
            ${cardsHtml}
        </div>
    `;
}

function renderAboutPage() {
    return `
        <div style="max-width: 800px; margin: 0 auto;">
            <h2 style="color: var(--primary-color); margin-bottom: 30px;">عن الموقع</h2>
            
            <div class="card" style="margin-bottom: 25px;">
                <h3 style="color: var(--secondary-color); margin-bottom: 15px;">الهدف من الموقع</h3>
                <p style="line-height: 1.8;">
                    موقع "وقفات تدبرية" هو منصة إسلامية متخصصة في عرض وقفات تدبرية مختارة من القرآن الكريم والسنة النبوية،
                    بهدف تعميق الفهم والتأمل في معاني الآيات والأحاديث، وتطبيقها في حياتنا اليومية.
                </p>
            </div>
            
            <div class="card" style="margin-bottom: 25px;">
                <h3 style="color: var(--secondary-color); margin-bottom: 15px;">المنهجية</h3>
                <p style="line-height: 1.8;">
                    يعتمد الموقع على مصادر موثوقة في استخراج الوقفات التدبرية والأحاديث النبوية:
                </p>
                <ul style="margin-top: 15px; padding-right: 20px; line-height: 2;">
                    <li>كتاب "القرآن الكريم تدبر وعمل" للوقفات التدبرية القرآنية</li>
                    <li>صحيح البخاري وصحيح مسلم للأحاديث النبوية الشريفة</li>
                </ul>
            </div>
            
            <div class="card">
                <h3 style="color: var(--secondary-color); margin-bottom: 15px;">المميزات</h3>
                <ul style="padding-right: 20px; line-height: 2;">
                    <li>وقفات تدبرية شاملة لسور القرآن الكريم</li>
                    <li>أحاديث نبوية صحيحة مع التدبر والفوائد</li>
                    <li>تصنيف حسب المواضيع والسور</li>
                    <li>إمكانية البحث في جميع المحتوى</li>
                    <li>نظام المفضلة لحفظ الوقفات المهمة</li>
                    <li>وضع ليلي ونهاري للقراءة المريحة</li>
                </ul>
            </div>

            <div class="card" style="margin-bottom: 25px; margin-top: 25px;">
                <h3 style="color: var(--secondary-color); margin-bottom: 15px;">إعداد و تصميم </h3>
                <p style="line-height: 1.8;">
                    أحمد عصام عبدالمنعم محمد حسانين
                </p>
                <ul style="margin-top: 15px; padding-right: 20px; line-height: 2;">
                    <li>الصف : 10 / 3</li>
                    <li>إشراف : أ. أسعد الوائلي</li>
                    <li>مدرسة : الإمام محمد بن عبدالله الخليلي </li>
                </ul>
            </div>
        </div>
    `;
}

function renderReferencesPage() {
    return `
        <div style="max-width: 800px; margin: 0 auto;">
            <h2 style="color: var(--primary-color); margin-bottom: 30px;">المراجع</h2>
            
            <div class="card" style="margin-bottom: 25px;">
                <h3 style="color: var(--secondary-color); margin-bottom: 15px;">المراجع القرآنية</h3>
                <div style="padding: 15px; background-color: var(--bg-secondary); border-radius: 8px;">
                    <h4 style="margin-bottom: 10px;">القرآن الكريم تدبر وعمل</h4>
                    <p style="color: var(--text-secondary); line-height: 1.8;">
                        سلسلة علمية تربوية تعنى بتفسير القرآن الكريم وتدبره، وربط الآيات بالواقع العملي.
                        تحتوي على وقفات تدبرية وفوائد مستنبطة من الآيات، مع العناية بالجانب التربوي والعملي.
                    </p>
                </div>
            </div>
            
            <div class="card" style="margin-bottom: 25px;">
                <h3 style="color: var(--secondary-color); margin-bottom: 15px;">المراجع الحديثية</h3>
                
                <div style="padding: 15px; background-color: var(--bg-secondary); border-radius: 8px; margin-bottom: 15px;">
                    <h4 style="margin-bottom: 10px;">صحيح البخاري</h4>
                    <p style="color: var(--text-secondary); line-height: 1.8;">
                        الجامع المسند الصحيح المختصر من أمور رسول الله ﷺ وسننه وأيامه، للإمام محمد بن إسماعيل البخاري.
                        يعد أصح كتاب بعد كتاب الله تعالى، وقد اتفقت الأمة على صحة ما فيه.
                    </p>
                </div>
                
                <div style="padding: 15px; background-color: var(--bg-secondary); border-radius: 8px;">
                    <h4 style="margin-bottom: 10px;">صحيح مسلم</h4>
                    <p style="color: var(--text-secondary); line-height: 1.8;">
                        المسند الصحيح المختصر بنقل العدل عن العدل إلى رسول الله ﷺ، للإمام مسلم بن الحجاج.
                        يعد ثاني أصح كتب الحديث بعد صحيح البخاري، وهو من أمهات كتب الحديث الستة.
                    </p>
                </div>
            </div>
            
            <div class="card">
                <h3 style="color: var(--secondary-color); margin-bottom: 15px;">ملاحظة مهمة</h3>
                <p style="line-height: 1.8; color: var(--text-secondary);">
                    جميع الوقفات التدبرية والأحاديث المعروضة في هذا الموقع مأخوذة من المصادر المذكورة أعلاه،
                    مع الحفاظ على الأمانة العلمية في النقل والعرض.
                </p>
            </div>
        </div>
    `;
}

function renderWaqfahCard(waqfah) {
    const isFavorite = favorites.includes(`waqfah-${waqfah.id}`);
    return `
        <div class="card collapsed" data-type="waqfah" data-id="${waqfah.id}" tabindex="0" role="button" aria-label="عرض الوقفة التدبرية كاملة" aria-expanded="false" aria-controls="waqfah-modal-${waqfah.id}">
            <div class="card-header">
                <div>
                    <h3 class="card-title">سورة ${waqfah.surah}</h3>
                    <div class="card-meta">
                        <span>الآية ${waqfah.ayahNumber}</span>
                        <span class="badge">${waqfah.topic}</span>
                    </div>
                </div>
                <div class="card-actions">
                    <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite('waqfah-${waqfah.id}')" aria-label="إضافة إلى المفضلة">
                        <svg viewBox="0 0 24 24" fill="${isFavorite ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        </svg>
                    </button>
                    <button class="action-btn" onclick="event.stopPropagation(); shareWaqfah(${waqfah.id})" aria-label="مشاركة">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                            <polyline points="16 6 12 2 8 6"></polyline>
                            <line x1="12" y1="2" x2="12" y2="15"></line>
                        </svg>
                    </button>
                    <button class="action-btn" onclick="event.stopPropagation(); printWaqfah(${waqfah.id})" aria-label="طباعة">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="6 9 6 2 18 2 18 9"></polyline>
                            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                            <rect x="6" y="14" width="12" height="8"></rect>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="card-content">
                <div class="ayah-text">${waqfah.ayahText}</div>
                <div class="tafseer">
                    <strong>الوقفة التدبرية:</strong><br>
                    ${waqfah.waqfah}
                </div>
                <div style="margin-top: 15px; color: var(--text-secondary); font-size: 0.9rem;">
                    <strong>المرجع:</strong> ${waqfah.reference}
                </div>
            </div>
            <button class="expand-toggle" type="button" aria-expanded="false">
                <span>عرض المزيد</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>
        </div>
    `;
}

function renderHadithCard(hadith) {
    const isFavorite = favorites.includes(`hadith-${hadith.id}`);
    return `
        <div class="hadith-card collapsed" data-type="hadith" data-id="${hadith.id}" tabindex="0" role="button" aria-label="عرض الحديث كاملًا" aria-expanded="false" aria-controls="hadith-modal-${hadith.id}">
            <div class="card-actions">
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite('hadith-${hadith.id}')" aria-label="إضافة إلى المفضلة">
                    <svg viewBox="0 0 24 24" fill="${isFavorite ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                </button>
                <button class="action-btn" onclick="event.stopPropagation(); shareHadith(${hadith.id})" aria-label="مشاركة">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                        <polyline points="16 6 12 2 8 6"></polyline>
                        <line x1="12" y1="2" x2="12" y2="15"></line>
                    </svg>
                </button>
                <button class="action-btn" onclick="event.stopPropagation(); printHadith(${hadith.id})" aria-label="طباعة">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 6 2 18 2 18 9"></polyline>
                        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                        <rect x="6" y="14" width="12" height="8"></rect>
                    </svg>
                </button>
            </div>
            <div class="card-header">
                <div>
                    <div class="card-meta">
                        <span class="badge">${hadith.topic}</span>
                        <span>${hadith.source}</span>
                    </div>
                </div>
            </div>
            <div class="hadith-text">${hadith.hadithText}</div>
            <div class="hadith-source">
                <strong>الراوي:</strong> ${hadith.narrator} | 
                <strong>المصدر:</strong> ${hadith.source} - ${hadith.book} (${hadith.number})
            </div>
            <div class="tafseer">
                <strong>التدبر:</strong><br>
                ${hadith.tadabbur}
            </div>
            ${Array.isArray(hadith.benefits) && hadith.benefits.length ? `
                <div class="hadith-benefits">
                    <strong>الفوائد:</strong>
                    <ul>
                        ${hadith.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            <button class="expand-toggle" type="button" aria-expanded="false">
                <span>عرض المزيد</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>
        </div>
    `;
}

function renderWaqfahModalContent(id) {
    const waqfah = waqafatData.find(w => w.id === id);
    if (!waqfah) {
        return `
            <div class="empty-state">
                <h3>تعذر تحميل الوقفة</h3>
                <p>يرجى المحاولة مرة أخرى لاحقًا</p>
            </div>
        `;
    }

    const isFavorite = favorites.includes(`waqfah-${waqfah.id}`);
    return `
        <div class="card modal-card expanded" data-type="waqfah" data-id="${waqfah.id}">
            <div class="card-header">
                <div>
                    <h3 class="card-title">سورة ${waqfah.surah}</h3>
                    <div class="card-meta">
                        <span>الآية ${waqfah.ayahNumber}</span>
                        <span class="badge">${waqfah.topic}</span>
                    </div>
                </div>
                <div class="card-actions">
                    <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite('waqfah-${waqfah.id}')" aria-label="إضافة إلى المفضلة">
                        <svg viewBox="0 0 24 24" fill="${isFavorite ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        </svg>
                    </button>
                    <button class="action-btn" onclick="event.stopPropagation(); shareWaqfah(${waqfah.id})" aria-label="مشاركة">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                            <polyline points="16 6 12 2 8 6"></polyline>
                            <line x1="12" y1="2" x2="12" y2="15"></line>
                        </svg>
                    </button>
                    <button class="action-btn" onclick="event.stopPropagation(); printWaqfah(${waqfah.id})" aria-label="طباعة">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="6 9 6 2 18 2 18 9"></polyline>
                            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                            <rect x="6" y="14" width="12" height="8"></rect>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="card-content">
                <div class="ayah-text">${waqfah.ayahText}</div>
                <div class="tafseer">
                    <strong>الوقفة التدبرية:</strong><br>
                    ${waqfah.waqfah}
                </div>
                <div style="margin-top: 15px; color: var(--text-secondary); font-size: 0.9rem;">
                    <strong>المرجع:</strong> ${waqfah.reference}
                </div>
            </div>
        </div>
    `;
}

function renderHadithModalContent(id) {
    const hadith = hadithData.find(h => h.id === id);
    if (!hadith) {
        return `
            <div class="empty-state">
                <h3>تعذر تحميل الحديث</h3>
                <p>يرجى المحاولة مرة أخرى لاحقًا</p>
            </div>
        `;
    }

    const isFavorite = favorites.includes(`hadith-${hadith.id}`);
    return `
        <div class="hadith-card modal-card expanded" data-type="hadith" data-id="${hadith.id}">
            <div class="card-actions">
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite('hadith-${hadith.id}')" aria-label="إضافة إلى المفضلة">
                    <svg viewBox="0 0 24 24" fill="${isFavorite ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                </button>
                <button class="action-btn" onclick="event.stopPropagation(); shareHadith(${hadith.id})" aria-label="مشاركة">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                        <polyline points="16 6 12 2 8 6"></polyline>
                        <line x1="12" y1="2" x2="12" y2="15"></line>
                    </svg>
                </button>
                <button class="action-btn" onclick="event.stopPropagation(); printHadith(${hadith.id})" aria-label="طباعة">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 6 2 18 2 18 9"></polyline>
                        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                        <rect x="6" y="14" width="12" height="8"></rect>
                    </svg>
                </button>
            </div>
            <div class="card-header">
                <div>
                    <div class="card-meta">
                        <span class="badge">${hadith.topic}</span>
                        <span>${hadith.source}</span>
                    </div>
                </div>
            </div>
            <div class="hadith-text">${hadith.hadithText}</div>
            <div class="hadith-source">
                <strong>الراوي:</strong> ${hadith.narrator} | 
                <strong>المصدر:</strong> ${hadith.source} - ${hadith.book} (${hadith.number})
            </div>
            <div class="tafseer">
                <strong>التدبر:</strong><br>
                ${hadith.tadabbur}
            </div>
            ${Array.isArray(hadith.benefits) && hadith.benefits.length ? `
                <div class="hadith-benefits">
                    <strong>الفوائد:</strong>
                    <ul>
                        ${hadith.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
        </div>
    `;
}

function shareWaqfah(id) {
    const waqfah = waqafatData.find(w => w.id === id);
    if (waqfah) {
        const shareData = {
            title: `وقفة تدبرية: سورة ${waqfah.surah}`,
            text: `${waqfah.ayahText}\n\nالوقفة التدبرية:\n${waqfah.waqfah}`,
            url: window.location.href,
        };
        if (navigator.share) {
            navigator.share(shareData);
        } else {
            navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}`);
            alert('تم نسخ المحتوى إلى الحافظة');
        }
    }
}

function shareHadith(id) {
    const hadith = hadithData.find(h => h.id === id);
    if (hadith) {
        const shareData = {
            title: `حديث شريف: ${hadith.topic}`,
            text: `${hadith.hadithText}\n\nالتدبر:\n${hadith.tadabbur}${Array.isArray(hadith.benefits) && hadith.benefits.length ? `\n\nالفوائد:\n- ${hadith.benefits.join('\n- ')}` : ''}`,
            url: window.location.href,
        };
        if (navigator.share) {
            navigator.share(shareData);
        } else {
            navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}`);
            alert('تم نسخ المحتوى إلى الحافظة');
        }
    }
}

function shareMedia(id) {
    const mediaLibrary = typeof getMediaLibraryData === 'function'
        ? getMediaLibraryData()
        : (Array.isArray(window.mediaData) ? window.mediaData : []);

    const mediaItem = mediaLibrary.find(item => item.id === id);
    if (!mediaItem) {
        return;
    }

    const mediaUrl = (() => {
        try {
            return new URL(mediaItem.url, window.location.href).href;
        } catch (error) {
            return window.location.href;
        }
    })();

    const details = [];
    if (mediaItem.reciter) {
        details.push(`القارئ: ${mediaItem.reciter}`);
    }
    if (mediaItem.surah) {
        details.push(`السورة: ${mediaItem.surah}`);
    }

    if (mediaItem.description) {
        details.push(mediaItem.description);
    }

    details.push(`رابط الوسائط: ${mediaUrl}`);

    const shareData = {
        title: `وسائط قرآنية: ${mediaItem.title || 'تلاوة'}`,
        text: details.join('\n'),
        url: mediaUrl,
    };

    if (navigator.share) {
        navigator.share(shareData);
    } else {
        navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}`);
        alert('تم نسخ رابط الوسائط إلى الحافظة');
    }
}

function printWaqfah(id) {
    const waqfah = waqafatData.find(w => w.id === id);
    if (waqfah) {
        const printContent = `
            <h1>وقفة تدبرية: سورة ${waqfah.surah}</h1>
            <h2>الآية ${waqfah.ayahNumber}</h2>
            <p>${waqfah.ayahText}</p>
            <h3>الوقفة التدبرية:</h3>
            <p>${waqfah.waqfah}</p>
            <hr>
            <p>المرجع: ${waqfah.reference}</p>
        `;
        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write('<html><head><title>طباعة</title>');
        printWindow.document.write('<link rel="stylesheet" href="style.css">');
        printWindow.document.write('</head><body>');
        printWindow.document.write(printContent);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    }
}

function printHadith(id) {
    const hadith = hadithData.find(h => h.id === id);
    if (hadith) {
        const printContent = `
            <h1>حديث شريف: ${hadith.topic}</h1>
            <p>${hadith.hadithText}</p>
            <h3>التدبر:</h3>
            <p>${hadith.tadabbur}</p>
            ${Array.isArray(hadith.benefits) && hadith.benefits.length ? `
                <h3>الفوائد:</h3>
                <ul>
                    ${hadith.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
            ` : ''}
            <hr>
            <p>الراوي: ${hadith.narrator} | المصدر: ${hadith.source} - ${hadith.book} (${hadith.number})</p>
        `;
        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write('<html><head><title>طباعة</title>');
        printWindow.document.write('<link rel="stylesheet" href="style.css">');
        printWindow.document.write('</head><body>');
        printWindow.document.write(printContent);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    }
}



// Favorites Management
function toggleFavorite(id) {
    const index = favorites.indexOf(id);
    let isFavorite;
    if (index > -1) {
        favorites.splice(index, 1);
        isFavorite = false;
    } else {
        favorites.push(id);
        isFavorite = true;
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));

    if (currentPage === 'favorites') {
        loadPage('favorites');
    } else {
        const separatorIndex = id.indexOf('-');
        if (separatorIndex === -1) {
            return;
        }

        const itemType = id.slice(0, separatorIndex);
        const itemId = id.slice(separatorIndex + 1);

        if (!itemType || !itemId) {
            return;
        }

        const selectors = [
            `.modal [data-type="${itemType}"][data-id="${itemId}"] .favorite-btn`,
            `[data-type="${itemType}"][data-id="${itemId}"] .favorite-btn`
        ];
        const buttons = document.querySelectorAll(selectors.join(', '));
        buttons.forEach(button => {
            if (isFavorite) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
            const svg = button.querySelector('svg');
            if (svg) {
                svg.setAttribute('fill', isFavorite ? 'currentColor' : 'none');
            }
        });
    }
}
