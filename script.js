let currentSlide = 1;

const loveReasons = [
    "1. Your smile makes my heart skip a beat 💕",
    "2. The way you laugh is my favorite sound",
    "3. You're the best boyfriend in the world",
    "4. You listen to me without judgment",
    "5. You make me feel safe and protected",
    "6. Your hugs are my favorite place to be",
    "7. You're incredibly thoughtful",
    "8. You make me laugh until I cry",
    "9. You're patient with me even when I'm moody",
    "10. You believe in me when I don't believe in myself",
    "11. Your eyes are absolutely mesmerizing",
    "12. You remember the little things I say",
    "13. You make ordinary moments special",
    "14. You're my perfect match",
    "15. Your touch gives me butterflies",
    "16. You're strong but also vulnerable with me",
    "17. You support my dreams",
    "18. You're ridiculously handsome",
    "19. You make me feel like I'm the only girl in the world",
    "20. You're honest and real with me",
    "21. Your voice is so soothing",
    "22. You're my rock and my foundation",
    "23. You make me want to be a better person",
    "24. You're so incredibly talented",
    "25. You're the most caring person I know",
    "26. You remember every important date",
    "27. You're my adventure partner",
    "28. You make me feel beautiful",
    "29. Your presence calms me down",
    "30. You're so genuinely kind",
    "31. You make me laugh even on my worst days",
    "32. You're my biggest cheerleader",
    "33. Your loyalty means everything",
    "34. You're so thoughtful with surprises",
    "35. You make my heart race",
    "36. You're my safe space",
    "37. You understand me without words",
    "38. You're absolutely perfect to me",
    "39. Your kisses are amazing",
    "40. You're my favorite person to talk to",
    "41. You make me feel loved unconditionally",
    "42. Your humor is unmatched",
    "43. You're brave and courageous",
    "44. You make everyday feel like a celebration",
    "45. You're so incredibly attractive",
    "46. You're my forever person",
    "47. You make me feel like I matter",
    "48. Your kindness inspires me",
    "49. You're my happy ending",
    "50. You're the love of my life",
    "51. You make me smile without even trying",
    "52. You're my soulmate",
    "53. You're the best cuddle buddy",
    "54. You make me feel secure",
    "55. Your ambition is sexy",
    "56. You're my dream come true",
    "57. You're so protective of me",
    "58. You make my life complete",
    "59. Your intelligence impresses me",
    "60. You're my greatest blessing",
    "61. You make me feel like a princess",
    "62. You're my ride or die",
    "63. You're the most romantic",
    "64. You make me crazy in love",
    "65. You're my everything",
    "66. Your dedication to us is beautiful",
    "67. You're my best friend",
    "68. You make me feel so alive",
    "69. You're incredibly sexy",
    "70. You're my forever love",
    "71. You make my heart complete",
    "72. You're the reason I smile",
    "73. Your hugs solve everything",
    "74. You're my perfect partner",
    "75. You make me believe in love",
    "76. You're so incredibly special",
    "77. You're my favorite distraction",
    "78. You make everyday an adventure",
    "79. Your love changes everything",
    "80. You're my one and only",
    "81. You make me feel so cherished",
    "82. You're the sweetest",
    "83. You're my greatest joy",
    "84. Your commitment means the world",
    "85. You're my safe harbor",
    "86. You make me feel invincible",
    "87. You're my perfect match",
    "88. You're the most handsome man alive",
    "89. You make my dreams come true",
    "90. You're my heart and soul",
    "91. You're so loyal and true",
    "92. You make me feel infinite",
    "93. You're my soulmate in every way",
    "94. You're incredibly fun",
    "95. You make me feel grateful daily",
    "96. You're my perfect balance",
    "97. You're my greatest adventure",
    "98. You make forever feel possible",
    "99. You're my everything and more",
    "100. I love you more than words could ever express 💕"
];

for (let i = 101; i <= 1000; i++) {
    const parts = [
        `${i}. The way you look at me makes my heart melt 💕`,
        `${i}. Your smile is my favorite thing in the world`,
        `${i}. You make my life brighter every day`,
        `${i}. You are the sweetest person I know`,
        `${i}. I love how safe I feel with you`,
        `${i}. You make my days feel magical`,
        `${i}. You deserve all the love in the world`,
        `${i}. You are my favorite person ever`,
        `${i}. Your hugs make everything better`,
        `${i}. I love how much you care about me`
    ];
    loveReasons.push(parts[(i - 101) % parts.length]);
}

window.addEventListener('DOMContentLoaded', () => {
    showSlide(1);
    generateReasons();
    startBackgroundMusic();
});

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    if (n > slides.length) currentSlide = 1;
    if (n < 1) currentSlide = slides.length;
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide - 1].classList.add('active');
    window.scrollTo(0, 0);
}

function goToSlide(n) {
    currentSlide = n;
    showSlide(currentSlide);
}

function startBackgroundMusic() {
    const audio = document.getElementById('bgMusic');
    audio.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
    audio.volume = 0.3;
    audio.play().catch(() => console.log('Autoplay prevented until interaction'));
}

function toggleMusic() {
    const audio = document.getElementById('bgMusic');
    const toggle = document.getElementById('musicToggle');
    if (audio.paused) {
        audio.play();
        toggle.classList.remove('muted');
        toggle.textContent = '🔊';
    } else {
        audio.pause();
        toggle.classList.add('muted');
        toggle.textContent = '🔇';
    }
}

function generateReasons() {
    const scroll = document.getElementById('reasonsScroll');
    scroll.innerHTML = '';
    loveReasons.forEach((reason, index) => {
        const reasonDiv = document.createElement('div');
        reasonDiv.className = 'reason-item';
        reasonDiv.textContent = reason;
        reasonDiv.style.animationDelay = `${index * 0.02}s`;
        scroll.appendChild(reasonDiv);
    });
}

function addPhoto(input, polaroidNum) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const photoImage = document.getElementById(`polaroid${polaroidNum}`).querySelector('.polaroid-image');
            const placeholder = photoImage.querySelector('.photo-placeholder');
            if (placeholder) placeholder.remove();
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            photoImage.appendChild(img);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function addFinalPhoto(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const placeholder = document.getElementById('finalPhotoPlaceholder');
            const img = document.getElementById('finalPhoto');
            placeholder.style.display = 'none';
            img.src = e.target.result;
            img.style.display = 'block';
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function openEnvelope() {
    const flap = document.getElementById('envelopeFlap');
    const content = document.getElementById('envelopeContent');
    flap.classList.add('open');
    setTimeout(() => {
        content.style.display = 'flex';
        createKisses();
    }, 600);
}

function createKisses() {
    const container = document.getElementById('kissesContainer');
    container.innerHTML = '';
    for (let i = 0; i < 30; i++) {
        const kiss = document.createElement('div');
        kiss.className = 'kiss';
        kiss.textContent = '😘';
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        const endX = (Math.random() - 0.5) * 200;
        const endY = Math.random() * 300 + 100;
        kiss.style.left = startX + 'px';
        kiss.style.top = startY + 'px';
        kiss.style.setProperty('--tx', endX + 'px');
        kiss.style.setProperty('--ty', endY + 'px');
        kiss.style.animationDelay = `${i * 0.1}s`;
        container.appendChild(kiss);
    }
}

function saveSite() {
    const captions = Array.from(document.querySelectorAll('.photo-caption')).map(c => c.value);
    const songs = Array.from(document.querySelectorAll('.song-title')).map((t, i) => ({
        title: t.value,
        artist: document.querySelectorAll('.song-artist')[i].value
    }));
    const finalMessage = document.querySelector('.final-message-input').value;
    const siteData = { captions, songs, finalMessage, timestamp: new Date().toISOString() };
    localStorage.setItem('boyfriendsDaySite', JSON.stringify(siteData));
    const baseURL = window.location.href.split('?')[0];
    const shareLink = baseURL + '?share=' + btoa(JSON.stringify(siteData));
    alert('Site saved! Share this link:\n\n' + shareLink);
    navigator.clipboard.writeText(shareLink).catch(() => {});
}

function loadSharedData() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('share')) {
        try {
            const data = JSON.parse(atob(params.get('share')));
            data.captions.forEach((caption, i) => {
                const input = document.querySelectorAll('.photo-caption')[i];
                if (input) input.value = caption;
            });
            data.songs.forEach((song, i) => {
                const titleInput = document.querySelectorAll('.song-title')[i];
                const artistInput = document.querySelectorAll('.song-artist')[i];
                if (titleInput) titleInput.value = song.title;
                if (artistInput) artistInput.value = song.artist;
            });
            const messageInput = document.querySelector('.final-message-input');
            if (messageInput) messageInput.value = data.finalMessage;
        } catch (e) {
            console.log('Could not load shared data');
        }
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') goToSlide(currentSlide + 1);
    if (e.key === 'ArrowLeft') goToSlide(currentSlide - 1);
});

window.addEventListener('load', loadSharedData);












































































































































































































n










































































































































































































={`${i}. The way you look at me makes my heart melt 💕`}





























































































n



















































































N





























n



















































































































"