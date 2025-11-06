function getMediaLibraryData() {
    if (Array.isArray(window.mediaData)) {
        return window.mediaData;
    }

function renderSurahPreview(surahName, section, headerElement, listElement, emptyElement) {
    const normalizedSurah = (surahName || '').trim();
    const allItems = getMediaLibraryData();
    const surahItems = allItems.filter(item => (item.surah || '').trim() === normalizedSurah);

    if (!normalizedSurah) {
        section.hidden = true;
        return;
    }

    headerElement.textContent = `وسائط سورة ${normalizedSurah}`;
    listElement.innerHTML = '';

    if (!surahItems.length) {
        emptyElement.hidden = false;
        section.hidden = false;
        return;
    }

    emptyElement.hidden = true;
    section.hidden = false;

    surahItems.forEach(item => {
        listElement.appendChild(createMediaCard(item));
    });

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
    return [];
}

function getMediaSurahIndex() {
    const mediaLibrary = getMediaLibraryData();
    const seen = new Set();
    const surahs = [];
    const surahOrderMap = new Map();

    if (Array.isArray(typeof suwarData !== 'undefined' ? suwarData : null)) {
        suwarData.forEach(({ name, number }) => {
            if (name && typeof number === 'number') {
                surahOrderMap.set(name.trim(), number);
            }
        });
    }

    mediaLibrary.forEach(item => {
        const surahName = (item && item.surah) ? item.surah.trim() : '';
        if (surahName && !seen.has(surahName)) {
            seen.add(surahName);
            surahs.push({
                surah: surahName,
                type: item.type,
                id: item.id,
                number: surahOrderMap.get(surahName)
            });
        }
    });

    surahs.sort((a, b) => {
        const aNumber = typeof a.number === 'number' ? a.number : Infinity;
        const bNumber = typeof b.number === 'number' ? b.number : Infinity;

        if (aNumber !== bNumber) {
            return aNumber - bNumber;
        }

        return a.surah.localeCompare(b.surah, 'ar');
    });

    return surahs;
}
// البيانات الخاصة بالوسائط (تلاوات وفيديوهات)
const DEFAULT_RECITER = 'الشيخ محمد صديق المنشاوي';

const mediaData = [
    {
        id: 'video-at-tahrim-8',
        title: 'سورة التحريم - الآية 8',
        reciter: DEFAULT_RECITER,
        surah: 'التحريم',
        type: 'video',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة  التحريم 8.mp4'
    },
    {
        id: 'recitation-ibrahim-23',
        title: 'سورة إبراهيم - الآية 23',
        reciter: DEFAULT_RECITER,
        surah: 'إبراهيم',
        type: 'audio',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة إبراهيم 23.mp3'
    },
    {
        id: 'recitation-ibrahim-39',
        title: 'سورة إبراهيم - الآية 39',
        description: 'تلاوة خاشعة بصوت الشيخ محمد صديق المنشاوي لقول الخليل عليه السلام حمدًا لله على الذرية.',
        reciter: DEFAULT_RECITER,
        surah: 'إبراهيم',
        type: 'audio',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة إبراهيم 39.mp3'
    },
    {
        id: 'video-al-ahzab-21',
        title: 'سورة الأحزاب - الآية 21',
        reciter: DEFAULT_RECITER,
        surah: 'الأحزاب',
        type: 'video',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة الأحزاب 21.mp4'
    },
    {
        id: 'recitation-al-anfal-1',
        title: 'سورة الأنفال - الآية 1',
        reciter: DEFAULT_RECITER,
        surah: 'الأنفال',
        type: 'audio',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة الأنفال 1.mp3'
    },
    {
        id: 'video-al-anfal-9-10',
        title: 'سورة الأنفال - الآيتان 9-10',
        reciter: DEFAULT_RECITER,
        surah: 'الأنفال',
        type: 'video',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة الأنفال 9-10.mp4'
    },
    {
        id: 'recitation-al-isra-74-76',
        title: 'سورة الإسراء - الآيات 74-76',
        reciter: DEFAULT_RECITER,
        surah: 'الإسراء',
        type: 'audio',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة الإسراء 74-76.mp3'
    },
    {
        id: 'video-al-isra-78-81',
        title: 'سورة الإسراء - الآيات 78-81',
        reciter: DEFAULT_RECITER,
        surah: 'الإسراء',
        type: 'video',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة الإسراء 78-81.mp4'
    },
    {
        id: 'video-al-buruj-1-9',
        title: 'سورة البروج - الآيات 1-9',
        reciter: DEFAULT_RECITER,
        surah: 'البروج',
        type: 'video',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة البروج 1-9.mp4'
    },
    {
        id: 'recitation-al-baqarah-148-149',
        title: 'سورة البقرة - الآيتان 148-149',
        reciter: DEFAULT_RECITER,
        surah: 'البقرة',
        type: 'audio',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة البقرة 148-149.mp3'
    },
    {
        id: 'video-al-baqarah-212',
        title: 'سورة البقرة - الآية 212',
        reciter: DEFAULT_RECITER,
        surah: 'البقرة',
        type: 'video',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة البقرة 212.mp4'
    },
    {
        id: 'recitation-al-balad-1-4',
        title: 'سورة البلد - الآيات 1-4',
        reciter: DEFAULT_RECITER,
        surah: 'البلد',
        type: 'audio',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة البلد 1-4.mp3'
    },
    {
        id: 'recitation-at-taghabun-16',
        title: 'سورة التغابن - الآية 16',
        reciter: DEFAULT_RECITER,
        surah: 'التغابن',
        type: 'audio',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة التغابن 16.mp3'
    },
    {
        id: 'recitation-yunus-9-10',
        title: 'سورة يونس - الآيتان 9-10',
        reciter: DEFAULT_RECITER,
        surah: 'يونس',
        type: 'audio',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة يونس 9-10.mp3'
    },
    {
        id: 'recitation-at-tawbah-118',
        title: 'سورة التوبة - الآية 118',
        reciter: DEFAULT_RECITER,
        surah: 'التوبة',
        type: 'audio',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة التوبة 118.mp3'
    },
    {
        id: 'recitation-al-jinn-22-25',
        title: 'سورة الجن - الآيات 22-25',
        reciter: DEFAULT_RECITER,
        surah: 'الجن',
        type: 'audio',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة الجن 22-25.mp3'
    },
    {
        id: 'video-al-hujurat-10-11',
        title: 'سورة الحجرات - الآيتان 10-11',
        reciter: DEFAULT_RECITER,
        surah: 'الحجرات',
        type: 'video',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة الحجرات 10-11.mp4'
    },
    {
        id: 'video-al-imran-173',
        title: 'سورة آل عمران - الآية 173',
        reciter: DEFAULT_RECITER,
        surah: 'آل عمران',
        type: 'video',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة آل عمران 173.mp4'
    },
    {
        id: 'video-al-araf-104-119',
        title: 'سورة الأعراف - الآيات 104-119',
        reciter: DEFAULT_RECITER,
        surah: 'الأعراف',
        type: 'video',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة الأعراف 104-119.mp4'
    },
    {
        id: 'recitation-al-hadid-13',
        title: 'سورة الحديد - الآية 13',
        reciter: DEFAULT_RECITER,
        surah: 'الحديد',
        type: 'audio',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة الحديد 13.mp3'
    },
    {
        id: 'recitation-al-anam-160-161',
        title: 'سورة الأنعام - الآيتان 160-161',
        reciter: DEFAULT_RECITER,
        surah: 'الأنعام',
        type: 'audio',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة الأنعام 160-161.mp3'
    },
    {
        id: 'recitation-al-hashr-19',
        title: 'سورة الحشر - الآية 19',
        reciter: DEFAULT_RECITER,
        surah: 'الحشر',
        type: 'audio',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة الحشر 19.mp3'
    },
    {
        id: 'video-al-hashr-24',
        title: 'سورة الحشر - الآية 24',
        reciter: DEFAULT_RECITER,
        surah: 'الحشر',
        type: 'video',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة الحشر 24.mp4'
    },
    {
        id: 'video-ar-rahman-41-44',
        title: 'سورة الرحمن - الآيات 41-44',
        reciter: DEFAULT_RECITER,
        surah: 'الرحمن',
        type: 'video',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة الرحمن 41-44.mp4'
    },
    {
        id: 'recitation-ar-rum-27',
        title: 'سورة الروم - الآية 27',
        reciter: DEFAULT_RECITER,
        surah: 'الروم',
        type: 'audio',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة الروم 27.mp3'
    },
    {
        id: 'video-ar-rum-40',
        title: 'سورة الروم - الآية 40',
        reciter: DEFAULT_RECITER,
        surah: 'الروم',
        type: 'video',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة الروم 40.mp4'
    },
    {
        id: 'video-ar-rum-42',
        title: 'سورة الروم - الآية 42',
        reciter: DEFAULT_RECITER,
        surah: 'الروم',
        type: 'video',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة الروم 42.mp4'
    },
    {
        id: 'recitation-az-zukhruf-40-42',
        title: 'سورة الزخرف - الآيات 40-42',
        reciter: DEFAULT_RECITER,
        surah: 'الزخرف',
        type: 'audio',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة الزخرف 40-42.mp3'
    },
    {
        id: 'recitation-az-zukhruf-81-85',
        title: 'سورة الزخرف - الآيات 81-85',
        reciter: DEFAULT_RECITER,
        surah: 'الزخرف',
        type: 'audio',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة الزخرف 81-85.mp3'
    },
    {
        id: 'video-as-sajdah-10-11',
        title: 'سورة السجدة - الآيتان 10-11',
        reciter: DEFAULT_RECITER,
        surah: 'السجدة',
        type: 'video',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة السجدة 10-11.mp4'
    },
    {
        id: 'recitation-ash-shuara-29-35',
        title: 'سورة الشعراء - الآيات 29-35',
        reciter: DEFAULT_RECITER,
        surah: 'الشعراء',
        type: 'audio',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة الشعراء 29-35.mp3'
    },
    {
        id: 'recitation-al-qasas-82-83',
        title: 'سورة القصص - الآيتان 82-83',
        reciter: DEFAULT_RECITER,
        surah: 'القصص',
        type: 'audio',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة القصص 82-83.mp3'
    },
    {
        id: 'video-al-qasas-76-81',
        title: 'سورة القصص - الآيات 76-81',
        reciter: DEFAULT_RECITER,
        surah: 'القصص',
        type: 'video',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة القصص من 76 الى 81.mp4'
    },
    {
        id: 'recitation-al-qasas-7-13',
        title: 'سورة القصص - الآيات 7-13',
        reciter: DEFAULT_RECITER,
        surah: 'القصص',
        type: 'audio',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة القصص 7-13.mp3'
    },
    {
        id: 'video-al-qamar-54-55-ar-rahman-1-4',
        title: 'سورة القمر 54-55 وسورة الرحمن 1-4',
        description: 'مقطع يجمع بين ختام سورة القمر وبداية سورة الرحمن بتلاوة متتابعة.',
        reciter: DEFAULT_RECITER,
        surah: 'القمر',
        type: 'video',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة القمر (54-55) سورة الرحمن (1-4).mp4'
    },
    {
        id: 'recitation-al-qamar-41-46',
        title: 'سورة القمر - الآيات 41-46',
        reciter: DEFAULT_RECITER,
        surah: 'القمر',
        type: 'audio',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة القمر 41 الى 46.mp3'
    },
    {
        id: 'video-al-qiyamah-1-6',
        title: 'سورة القيامة - الآيات 1-6',
        reciter: DEFAULT_RECITER,
        surah: 'القيامة',
        type: 'video',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة القيامة 1-6.mp4'
    },
    {
        id: 'recitation-al-muminun-97-100',
        title: 'سورة المؤمنون - الآيات 97-100',
        reciter: DEFAULT_RECITER,
        surah: 'المؤمنون',
        type: 'audio',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة المؤمنون 97-100.mp3'
    },
    {
        id: 'video-al-maidah-27-31',
        title: 'سورة المائدة - الآيات 27-31',
        reciter: DEFAULT_RECITER,
        surah: 'المائدة',
        type: 'video',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة المائدة 27-31.mp4'
    },
    {
        id: 'recitation-al-mujadila-11',
        title: 'سورة المجادلة - الآية 11',
        reciter: DEFAULT_RECITER,
        surah: 'المجادلة',
        type: 'audio',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة المجادلة 11.mp3'
    },
    {
        id: 'video-al-mutaffifin-29-33',
        title: 'سورة المطففين - الآيات 29-33',
        reciter: DEFAULT_RECITER,
        surah: 'المطففين',
        type: 'video',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة المطففين 29-33.mp4'
    },
    {
        id: 'recitation-al-mumtahanah-13',
        title: 'سورة الممتحنة - الآية 13',
        reciter: DEFAULT_RECITER,
        surah: 'الممتحنة',
        type: 'audio',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة الممتحنة 13.mp3'
    },
    {
        id: 'video-an-najm-1-9',
        title: 'سورة النجم - الآيات 1-9',
        reciter: DEFAULT_RECITER,
        surah: 'النجم',
        type: 'video',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة النجم1-9.mp4'
    },
    {
        id: 'video-qaf-27-29',
        title: 'سورة ق - الآيات 27-29',
        reciter: DEFAULT_RECITER,
        surah: 'ق',
        type: 'video',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة ق 27-29.mp4'
    },
    {
        id: 'recitation-an-nisa-145-147',
        title: 'سورة النساء - الآيات 145-147',
        reciter: DEFAULT_RECITER,
        surah: 'النساء',
        type: 'audio',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة النساء 145-147.mp3'
    },
    {
        id: 'video-an-nur-30',
        title: 'سورة النور - الآية 30',
        reciter: DEFAULT_RECITER,
        surah: 'النور',
        type: 'video',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة النور 30.mp4'
    },
    {
        id: 'recitation-luqman-34-as-sajdah-1-2',
        title: 'سورة لقمان 34 وسورة السجدة 1-2',
        description: 'تلاوة تجمع خاتمة سورة لقمان وبداية سورة السجدة بمقطع واحد.',
        reciter: DEFAULT_RECITER,
        surah: 'لقمان',
        type: 'audio',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة لقمان (34) سورة السجدة (1-2).mp3'
    },
    {
        id: 'recitation-luqman-30',
        title: 'سورة لقمان - الآية 30',
        reciter: DEFAULT_RECITER,
        surah: 'لقمان',
        type: 'audio',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة لقمان 30.mp3'
    },
    {
        id: 'recitation-ya-sin-36-38',
        title: 'سورة يس - الآيات 36-38',
        reciter: DEFAULT_RECITER,
        surah: 'يس',
        type: 'audio',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة يس 36-38.mp3'
    },
    {
        id: 'video-yusuf-19-20',
        title: 'سورة يوسف - الآيتان 19-20',
        reciter: DEFAULT_RECITER,
        surah: 'يوسف',
        type: 'video',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة يوسف من 19-20.mp4'
    },
    {
        id: 'video-al-ilq-1-136',
        title: 'سورة العلق - كاملة',
        reciter: DEFAULT_RECITER,
        surah: 'العلق',
        type: 'video',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة العلق كاملة.mp4'
    },
    {
        id: 'recitation-alqasas-87',
        title: 'سورة القصص - الآية 87',
        description: 'تلاوة بصوت الشيخ محمد صديق المنشاوي لختام السورة بالتوكيد على الثبات على الوحي.',
        reciter: DEFAULT_RECITER,
        surah: 'القصص',
        type: 'audio',
        url: '../video and audio/الشيخ محمد صديق المنشاوي --سورة القصص 87.mp3'
    },
    {
        id: 'recitation-luqman-17',
        title: 'سورة لقمان - الآية 17',
        description: 'تلاوة تعليمية بصوت الشيخ محمد صديق المنشاوي لوصايا لقمان في إقامة الصلاة والأمر بالمعروف.',
        reciter: DEFAULT_RECITER,
        surah: 'لقمان',
        type: 'audio',
        url: '../video and audio/الشيخ محمد صديق المنشاوي --سورة لقمان 17.mp3'
    },
    { 
        id: 'recitation-al-farqan-27-29',
        title: 'سورة الفرقان - الآيات 27-29',
        reciter: DEFAULT_RECITER,
        surah: 'الفرقان',
        type: 'audio',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة الفرقان 27-29.mp3'
    },
    {
        id: 'recitation-gafir-44-48',
        title: 'سورة غافر - الآيات 44-48',
        reciter: DEFAULT_RECITER,
        surah: 'غافر',
        type: 'audio',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة غافر 44-48.mp3'
    },
    {
        id: 'video-al-ilq-1-5',
        title: 'سورة العلق - الآيات 1-5',
        reciter: DEFAULT_RECITER,
        surah: 'العلق',
        type: 'video',
        url: '../video and audio/الشيخ محمد صديق المنشاوي -- سورة العلق 1-5.mp4'
    },    
];

window.mediaData = mediaData;
const waqfahIndex = (() => {
    const map = new Map();

    if (typeof waqafatData !== 'undefined' && Array.isArray(waqafatData)) {
        waqafatData.forEach(entry => {
            const surahName = (entry.surah || '').trim();
            if (!surahName) {
                return;
            }

            if (!map.has(surahName)) {
                map.set(surahName, []);
            }

            map.get(surahName).push(entry);
        });
    }

    return map;
})();

function getAyahNumbersFromMedia(item) {
    if (Array.isArray(item.ayahNumbers) && item.ayahNumbers.length) {
        return item.ayahNumbers.map(Number).filter(number => !Number.isNaN(number));
    }

    const title = (item.title || '').toString();
    const ayahMatch = title.match(/(?:الآيات?|الآيتان)?\s*(\d+)(?:\s*[-–]\s*(\d+))?/);

    if (!ayahMatch) {
        return [];
    }

    const start = Number(ayahMatch[1]);
    const end = ayahMatch[2] ? Number(ayahMatch[2]) : start;

    if (Number.isNaN(start) || Number.isNaN(end)) {
        return [];
    }

    const numbers = [];
    for (let current = Math.min(start, end); current <= Math.max(start, end); current += 1) {
        numbers.push(current);
    }

    return numbers;
}

function getSupplementalTextsForMedia(item) {
    const surahName = (item.surah || '').trim();

    if (!surahName || !(waqfahIndex instanceof Map) || !waqfahIndex.size) {
        return { ayahText: '', waqfahText: '' };
    }

    const ayahNumbers = getAyahNumbersFromMedia(item);
    const waqfahEntries = (waqfahIndex.get(surahName) || []).slice();

    if (!waqfahEntries.length) {
        return { ayahText: '', waqfahText: '' };
    }

    let matchedEntry = null;

    if (ayahNumbers.length) {
        matchedEntry = waqfahEntries.find(entry => ayahNumbers.includes(Number(entry.ayahNumber)));
    }

    if (!matchedEntry) {
        matchedEntry = waqfahEntries[0] || null;
    }

    if (!matchedEntry) {
        return { ayahText: '', waqfahText: '' };
    }

    return {
        ayahText: matchedEntry.ayahText || '',
        waqfahText: matchedEntry.waqfah || ''
    };
}

function createMediaCard(item) {
    const mediaItem = document.createElement('div');
    mediaItem.className = 'media-item';
    mediaItem.setAttribute('tabindex', '0');
    if (item.surah) {
        mediaItem.dataset.surah = item.surah;
    }
    if (item.id) {
        mediaItem.dataset.mediaId = item.id;
    }

    const mediaElement = document.createElement(item.type === 'video' ? 'video' : 'audio');
    mediaElement.controls = true;
    mediaElement.src = item.url;
    mediaElement.preload = 'metadata';

    const mediaInfo = document.createElement('div');
    mediaInfo.className = 'media-info';

    const metaParts = [];
    if (item.reciter) {
        metaParts.push(item.reciter);
    }
    if (item.surah) {
        metaParts.push(item.surah);
    }

    const { ayahText, waqfahText } = getSupplementalTextsForMedia(item);

    mediaInfo.innerHTML = `
        <h3>${item.title || 'وسائط بدون عنوان'}</h3>
        ${metaParts.length ? `<p class="media-meta">${metaParts.join(' • ')}</p>` : ''}
        ${item.description ? `<p>${item.description}</p>` : ''}
        ${ayahText && item.type === 'audio' ? `<p class="media-ayah"><strong>الآية:</strong> ${ayahText}</p>` : ''}
        ${waqfahText ? `<p class="media-waqfah"><strong>وقفة تدبرية:</strong> ${waqfahText}</p>` : ''}
    `;

    const openMediaModal = () => {
        if (typeof renderMediaModalContent === 'function' && typeof openModal === 'function') {
            openModal(renderMediaModalContent(item));
        }
    };

    mediaItem.addEventListener('click', openMediaModal);
    mediaItem.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openMediaModal();
        }
    });

    mediaItem.appendChild(mediaElement);
    mediaItem.appendChild(mediaInfo);

    return mediaItem;
}

function getMediaFilters() {
    const searchInput = document.getElementById('media-search');
    const typeSelect = document.getElementById('media-type');

    return {
        searchTerm: (searchInput?.value || '').trim().toLowerCase(),
        mediaType: typeSelect?.value || 'all'
    };
}

function filterMediaItems(items, filters) {
    return items.filter(item => {
        const title = (item.title || '').toLowerCase();
        const description = (item.description || '').toLowerCase();
        const matchesSearch = !filters.searchTerm
            || title.includes(filters.searchTerm)
            || description.includes(filters.searchTerm);
        const matchesType = filters.mediaType === 'all' || item.type === filters.mediaType;

        return matchesSearch && matchesType;
    });
}

function initMediaLibrary() {
    const surahIndexContainer = document.getElementById('media-surah-index');
    const surahIndexGrid = document.getElementById('media-surah-index-grid');
    const surahResultsSection = document.getElementById('surah-media-results');
    const surahResultsHeader = document.getElementById('surah-media-results-header');
    const surahResultsList = document.getElementById('surah-media-results-list');
    const surahResultsEmpty = document.getElementById('surah-media-results-empty');

    if (surahIndexContainer && surahIndexGrid) {
        const surahIndex = typeof getMediaSurahIndex === 'function' ? getMediaSurahIndex() : [];

        if (surahIndex.length) {
            surahIndexGrid.innerHTML = surahIndex.map(entry => `
                <button class="surah-index-item" type="button" data-surah="${entry.surah}">
                    ${entry.surah}
                </button>
            `).join('');

            surahIndexContainer.hidden = false;

            surahIndexGrid.addEventListener('click', (event) => {
                const button = event.target.closest('.surah-index-item');
                if (!button) {
                    return;
                }

                const surahName = button.dataset.surah;
                if (!surahName) {
                    return;
                }

                if (!surahResultsSection || !surahResultsList || !surahResultsHeader || !surahResultsEmpty) {
                    window.location.href = `media-surah.html?surah=${encodeURIComponent(surahName)}`;
                    return;
                }

                renderSurahPreview(surahName, surahResultsSection, surahResultsHeader, surahResultsList, surahResultsEmpty);
            });
        }
    }

    const handleFiltersChange = () => {
        renderLatestMediaItems();
    };

    const searchInput = document.getElementById('media-search');
    const typeSelect = document.getElementById('media-type');

    searchInput?.addEventListener('input', handleFiltersChange);
    typeSelect?.addEventListener('change', handleFiltersChange);

    renderLatestMediaItems();
}

function renderLatestMediaItems() {
    const latestContainer = document.getElementById('latest-media-items');

    if (!latestContainer) {
        return;
    }

    const allItems = getMediaLibraryData();
    const filters = getMediaFilters();
    const filteredItems = filterMediaItems(allItems, filters);
    const hasFilters = Boolean(filters.searchTerm) || filters.mediaType !== 'all';

    latestContainer.innerHTML = '';

    let itemsToDisplay;
    if (hasFilters) {
        itemsToDisplay = filteredItems.slice().reverse();
    } else {
        itemsToDisplay = allItems.slice(-3).reverse();
    }

    if (!itemsToDisplay.length) {
        latestContainer.innerHTML = hasFilters
            ? `
                <div class="empty-state">
                    <h3>لا توجد وسائط مطابقة</h3>
                    <p>حاول تعديل كلمات البحث أو نوع الوسائط.</p>
                </div>
            `
            : `
                <div class="empty-state">
                    <h3>لا توجد وسائط متاحة بعد</h3>
                    <p>سيتم إضافة أحدث الوسائط هنا فور توافرها.</p>
                </div>
            `;

        updateSurahFilterState(filteredItems, hasFilters);
        return;
    }

    itemsToDisplay.forEach(item => {
        latestContainer.appendChild(createMediaCard(item));
    });

    updateSurahFilterState(filteredItems, hasFilters);
}

function renderSurahMediaContent(surahName) {
    const normalizedSurahName = (surahName || '').trim();
    const titleElement = document.getElementById('surah-title');
    const detailsElement = document.getElementById('surah-details');
    const listElement = document.getElementById('surah-media-list');
    const emptyStateElement = document.getElementById('surah-empty-state');

    if (!listElement) {
        return;
    }

    if (titleElement) {
        titleElement.textContent = normalizedSurahName
            ? `وسائط سورة ${normalizedSurahName}`
            : 'وسائط السورة';
    }

    if (Array.isArray(suwarData) && detailsElement) {
        const matchedSurah = suwarData.find(surah => surah.name === normalizedSurahName);
        if (matchedSurah) {
            detailsElement.textContent = `${matchedSurah.type} • ${matchedSurah.verses} آية`;
        } else {
            detailsElement.textContent = '';
        }
    }

    const items = getMediaLibraryData().filter(item => {
        return item.surah && item.surah.trim() === normalizedSurahName;
    });

    listElement.innerHTML = '';

    if (!items.length) {
        if (emptyStateElement) {
            emptyStateElement.hidden = false;
            emptyStateElement.innerHTML = `
                <div class="empty-state">
                    <h3>لا توجد وسائط لهذه السورة حاليًا</h3>
                    <p>عد لاحقًا للاطلاع على أي تحديثات جديدة.</p>
                </div>
            `;
        }
        return;
    }

    if (emptyStateElement) {
        emptyStateElement.hidden = true;
        emptyStateElement.innerHTML = '';
    }

    items.forEach(item => {
        listElement.appendChild(createMediaCard(item));
    });
}

function initSurahMediaPage() {
    const params = new URLSearchParams(window.location.search);
    const surahFromQuery = params.get('surah');
    const emptyStateElement = document.getElementById('surah-empty-state');

    if (!surahFromQuery) {
        if (emptyStateElement) {
            emptyStateElement.hidden = false;
            emptyStateElement.innerHTML = `
                <div class="empty-state">
                    <h3>لم يتم تحديد سورة</h3>
                    <p>الرجاء العودة إلى <a href="media.html">مكتبة الوسائط</a> واختيار سورة.</p>
                </div>
            `;
        }
        return;
    }

    renderSurahMediaContent(surahFromQuery);

    if (surahFromQuery) {
        document.title = `وسائط سورة ${surahFromQuery} - وقفات تدبرية`;
    }
}

function initializeMediaScripts() {
    const pageType = document.body?.dataset?.page;

    if (pageType === 'media') {
        initMediaLibrary();
    } else if (pageType === 'media-surah') {
        initSurahMediaPage();
    }
}

if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initializeMediaScripts);
} else {
    initializeMediaScripts();
}
