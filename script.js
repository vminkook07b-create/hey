// Current slide tracker
let currentSlide = 1;

// 18 Envelope Messages
const envelopeMessages = [
    "Happy Birthday to the most beautiful soul I know! 💙",
    "You light up my world every single day! ✨",
    "Today is all about celebrating YOU and how amazing you are! 🎉",
    "Your smile can brighten anyone's day 🌟",
    "I'm so grateful to have you in my life! 💕",
    "You make turning 18 look absolutely magical! 🦋",
    "Your kindness inspires everyone around you 🌸",
    "You're not just a year older, you're a year more beautiful! 💖",
    "Thank you for being you - it means everything! 🌷",
    "Your laughter is my favorite sound 🎵",
    "You deserve all the happiness in the world! 💫",
    "Every moment with you is a blessing 🙏",
    "You're stronger, braver, and more beautiful than you know! 💪",
    "Life is better with you in it! 🌈",
    "You have the biggest heart of anyone I know! ❤️",
    "Today we celebrate how incredible you are! 🎂",
    "You're going to have the most amazing year ahead! 🚀",
    "I love you more than words could ever express! 💕"
];

// 100 Love Messages
const loveMessages = [
    "1. You have the most beautiful smile 💙",
    "2. Your laugh is contagious and makes me smile every time",
    "3. You're incredibly kind-hearted",
    "4. Your creativity inspires me",
    "5. You light up every room you enter",
    "6. You're a great listener",
    "7. You make everyone feel special",
    "8. Your passion is inspiring",
    "9. You have impeccable taste",
    "10. You're thoughtful and considerate",
    "11. You're genuine and authentic",
    "12. Your eyes are mesmerizing",
    "13. You have a heart of gold",
    "14. You're incredibly intelligent",
    "15. You make life an adventure",
    "16. You're brave and bold",
    "17. Your presence calms me",
    "18. You're stunningly beautiful",
    "19. You believe in me",
    "20. You're my favorite person",
    "21. You have elegant taste",
    "22. You're hilarious and witty",
    "23. You bring out the best in people",
    "24. Your dreams are inspiring",
    "25. You're a beacon of light",
    "26. You're incredibly strong",
    "27. You have the softest heart",
    "28. You're always growing and improving",
    "29. Your voice is soothing",
    "30. You're selfless and giving",
    "31. You make me want to be better",
    "32. Your loyalty means everything",
    "33. You're absolutely magical",
    "34. You have exceptional taste in everything",
    "35. Your energy is contagious",
    "36. You're deeply compassionate",
    "37. Your style is impeccable",
    "38. You're a true friend",
    "39. You shine brighter than any star",
    "40. Your optimism is beautiful",
    "41. You're a work of art",
    "42. Your love is unconditional",
    "43. You're my safe place",
    "44. Your presence brings peace",
    "45. You're incredibly talented",
    "46. Your potential is limitless",
    "47. You're a warrior princess",
    "48. Your heart is pure",
    "49. You're my greatest blessing",
    "50. Your smile lights up my darkest days",
    "51. You're irreplaceable",
    "52. Your grace is timeless",
    "53. You're a true queen",
    "54. Your love changes me",
    "55. You're my happiness",
    "56. Your support means the world",
    "57. You're eternally beautiful",
    "58. Your dreams matter",
    "59. You're my forever",
    "60. Your touch heals my soul",
    "61. You're absolutely breathtaking",
    "62. Your intelligence amazes me",
    "63. You're my greatest adventure",
    "64. Your love is my sanctuary",
    "65. You're my soulmate",
    "66. Your spirit is free and wild",
    "67. You're my inspiration",
    "68. Your kindness echoes",
    "69. You're my treasure",
    "70. Your beauty is timeless",
    "71. You're my first thought every morning",
    "72. Your laughter is my favorite music",
    "73. You're my greatest adventure",
    "74. Your love makes me whole",
    "75. You're my forever love",
    "76. Your loyalty is unwavering",
    "77. You're my perfect",
    "78. Your heart is beautiful",
    "79. You're my everything",
    "80. Your smile is my weakness",
    "81. You're my safe haven",
    "82. Your love is my greatest gift",
    "83. You're my soulmate",
    "84. Your presence is my peace",
    "85. You're my dream come true",
    "86. Your love is eternal",
    "87. You're my happily ever after",
    "88. Your heart beats with mine",
    "89. You're my reason to smile",
    "90. Your love transcends everything",
    "91. You're my forever person",
    "92. Your beauty inside matches your outside",
    "93. You're my greatest treasure",
    "94. Your love heals me",
    "95. You're absolutely perfect",
    "96. Your soul is beautiful",
    "97. You're my forever",
    "98. Your love is my oxygen",
    "99. You're my everything I've ever wanted",
    "100. I love you beyond measure 💕"
];

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    showSlide(1);
    generateEnvelopes();
    generateMessages();
});

// Show specific slide
function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    
    if (n > slides.length) {
        currentSlide = 1;
    }
    if (n < 1) {
        currentSlide = slides.length;
    }
    
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide - 1].classList.add('active');
}

// Navigate to slide
function goToSlide(n) {
    currentSlide = n;
    showSlide(currentSlide);
    window.scrollTo(0, 0);
}

// Generate envelope elements
function generateEnvelopes() {
    const grid = document.getElementById('envelopesGrid');
    grid.innerHTML = '';
    
    for (let i = 0; i < 18; i++) {
        const envelope = document.createElement('div');
        envelope.className = 'envelope';
        envelope.innerHTML = `<div class="envelope-label">${i + 1}</div>`;
        envelope.onclick = () => openEnvelope(i);
        grid.appendChild(envelope);
    }
}

// Open envelope and show message
function openEnvelope(index) {
    const modal = document.getElementById('messageModal');
    const message = document.getElementById('modalMessage');
    
    message.textContent = envelopeMessages[index];
    modal.classList.add('show');
}

// Close modal
function closeModal() {
    const modal = document.getElementById('messageModal');
    modal.classList.remove('show');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('messageModal');
    if (event.target === modal) {
        modal.classList.remove('show');
    }
}

// Generate love messages
function generateMessages() {
    const scroll = document.getElementById('messagesScroll');
    scroll.innerHTML = '';
    
    loveMessages.forEach((msg, index) => {
        const msgDiv = document.createElement('div');
        msgDiv.className = 'message-item';
        msgDiv.style.animationDelay = `${index * 0.05}s`;
        msgDiv.textContent = msg;
        scroll.appendChild(msgDiv);
    });
}

// Music playlist
const songs = [
    { name: 'Enchanted', artist: 'Taylor Swift' },
    { name: 'Lover', artist: 'Taylor Swift' },
    { name: 'Now That I Found You', artist: 'Ella Bright' },
    { name: 'West Coast', artist: 'Lana Del Rey' },
    { name: 'Art Deco', artist: 'Lana Del Rey' }
];

function playSong(index) {
    const player = document.getElementById('musicPlayer');
    const song = songs[index];
    
    player.innerHTML = `
        <div style="animation: slideUp 0.4s ease;">
            <p style="font-size: 1.2em; margin-bottom: 10px;">🎵 Now Playing 🎵</p>
            <p style="font-size: 1.3em; font-weight: bold;">${song.name}</p>
            <p style="font-size: 1em; opacity: 0.9;">by ${song.artist}</p>
            <p style="margin-top: 15px; font-size: 0.9em; opacity: 0.8;">
                💙 A perfect song for you on your special day 💙
            </p>
        </div>
    `;
}

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        goToSlide(currentSlide + 1);
    }
    if (e.key === 'ArrowLeft') {
        goToSlide(currentSlide - 1);
    }
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Smooth scroll for messages
const style = document.createElement('style');
style.textContent = `
    .messages-scroll::-webkit-scrollbar {
        width: 8px;
    }
    .messages-scroll::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
    }
    .messages-scroll::-webkit-scrollbar-thumb {
        background: rgba(255, 105, 180, 0.6);
        border-radius: 10px;
    }
`;
document.head.appendChild(style);

// Add confetti effect on final slide
function triggerConfetti() {
    const canvas = document.createElement('canvas');
    canvas.id = 'confetti-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confetti = [];
    const confettiCount = 50;
    
    class Confetti {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height - canvas.height;
            this.speedX = Math.random() * 4 - 2;
            this.speedY = Math.random() * 5 + 5;
            this.size = Math.random() * 8 + 4;
            this.rotation = Math.random() * 360;
            this.colors = ['#FF69B4', '#667eea', '#FFD700', '#00CED1', '#FF1493'];
            this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.rotation += 5;
            
            if (this.y > canvas.height) {
                this.y = -this.size;
            }
        }
        
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation * Math.PI / 180);
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            ctx.restore();
        }
    }
    
    for (let i = 0; i < confettiCount; i++) {
        confetti.push(new Confetti());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach(c => {
            c.update();
            c.draw();
        });
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Trigger confetti when reaching final slide
const originalGoToSlide = goToSlide;
function goToSlide(n) {
    originalGoToSlide(n);
    if (n === 7) {
        setTimeout(triggerConfetti, 300);
    }
}