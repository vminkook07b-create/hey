let currentSlide = 1;

const loveReasons = [
  "1. Your smile makes my heart skip a beat 💕",
  "2. You make ordinary days feel special and magical",
  "3. Your hugs are my favorite place in the world",
  "4. You make me laugh even on my hardest days",
  "5. Your love gives me peace and courage",
  "6. You make me feel safe, seen, and deeply cared for",
  "7. You have the sweetest soul I have ever known",
  "8. You always know how to make me feel better",
  "9. Your voice calms me instantly",
  "10. You are the kindest person I know",
  "11. Your love makes everything feel lighter",
  "12. You make me want to be the best version of myself",
  "13. Your loyalty means everything to me",
  "14. You understand me without me having to explain",
  "15. You are my safe place and my favorite person",
  "16. Your smile is the prettiest thing I know",
  "17. You make my heart feel full in the simplest ways",
  "18. You make me feel beautiful just by being you",
  "19. Your humor is one of my favorite things",
  "20. You always make time for me",
  "21. You make even ordinary moments unforgettable",
  "22. You are my comfort and my sunshine",
  "23. You look at me like I am your whole world",
  "24. You care in ways that feel deep and real",
  "25. You are my favorite adventure partner",
  "26. Your presence makes everything better",
  "27. You are the most thoughtful person I know",
  "28. You make me feel so genuinely loved",
  "29. You are my peace in the middle of chaos",
  "30. I love how gentle and sincere you are",
  "31. You make my days brighter without even trying",
  "32. Your love makes my life feel full",
  "33. You are my favorite person to be around",
  "34. You make me feel so lucky every single day",
  "35. Your heart is one of the best parts of you",
  "36. You make my heart feel home",
  "37. I love your sweet, caring nature",
  "38. You are incredibly handsome and so much more",
  "39. You know exactly how to make me feel loved",
  "40. You are my safe sound in the middle of everything",
  "41. You are the reason I believe in love",
  "42. You make me feel so special, even in the simplest ways",
  "43. I love every version of you",
  "44. You are my favorite laugh to hear",
  "45. You make my heart feel warm and full",
  "46. You are so loving and sincere",
  "47. You always bring calm to my chaos",
  "48. You are the sweetest part of my life",
  "49. I love how you always try to make me happy",
  "50. You are my greatest blessing"
];

for (let i = 51; i <= 1000; i++) {
  const pool = [
    `${i}. I love the way you care about me`,
    `${i}. You make my heart feel complete`,
    `${i}. You are my favorite person in the whole world`,
    `${i}. I love the way you look at me`,
    `${i}. I adore your beautiful soul`,
    `${i}. You make me feel so deeply loved`,
    `${i}. You are so cute when you try to impress me`,
    `${i}. I love how comforting you are`,
    `${i}. Your love makes life feel softer and brighter`,
    `${i}. You are my forever favorite person`
  ];
  loveReasons.push(pool[(i - 51) % pool.length]);
}

window.addEventListener("DOMContentLoaded", () => {
  showSlide(1);
  renderReasons();
  startMusic();
  ensureBodyState();
});

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  if (index > slides.length) currentSlide = 1;
  if (index < 1) currentSlide = slides.length;
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[currentSlide - 1].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
}

function startMusic() {
  const audio = document.getElementById("bgMusic");
  const toggle = document.getElementById("soundToggle");
  if (!audio) return;
  audio.volume = 0.32;
  audio.play().catch(() => {
    toggle.textContent = "🔇";
    toggle.classList.add("muted");
  });
}

function toggleMusic() {
  const audio = document.getElementById("bgMusic");
  const toggle = document.getElementById("soundToggle");
  if (!audio) return;

  if (audio.paused) {
    audio.play();
    toggle.textContent = "🔊";
    toggle.classList.remove("muted");
  } else {
    audio.pause();
    toggle.textContent = "🔇";
    toggle.classList.add("muted");
  }
}

function renderReasons() {
  const list = document.getElementById("reasonsList");
  if (!list) return;

  list.innerHTML = "";
  loveReasons.forEach((reason) => {
    const item = document.createElement("div");
    item.className = "reason-item";
    item.textContent = reason;
    list.appendChild(item);
  });
}

function addPhoto(input, number) {
  if (!input.files || !input.files[0]) return;

  const reader = new FileReader();
  reader.onload = function (event) {
    const photoBox = document.querySelector(`.polaroid-card:nth-child(${number}) .polaroid-photo`);
    const label = photoBox.querySelector(".upload-label");
    const img = photoBox.querySelector("img") || document.createElement("img");
    img.src = event.target.result;
    img.style.display = "block";
    photoBox.appendChild(img);
    if (label) label.style.display = "none";
  };
  reader.readAsDataURL(input.files[0]);
}

function addFinalPhoto(input) {
  if (!input.files || !input.files[0]) return;
  const reader = new FileReader();
  reader.onload = function (event) {
    const preview = document.getElementById("finalPhotoPreview");
    const label = document.querySelector(".final-upload");
    preview.src = event.target.result;
    preview.style.display = "block";
    if (label) label.style.display = "none";
  };
  reader.readAsDataURL(input.files[0]);
}

function openEnvelope() {
  const envelope = document.getElementById("envelopeBox");
  const modal = document.getElementById("finalModal");
  if (!envelope || !modal) return;

  envelope.classList.add("open");
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}

function closeEnvelope() {
  const envelope = document.getElementById("envelopeBox");
  const modal = document.getElementById("finalModal");
  if (!envelope || !modal) return;

  envelope.classList.remove("open");
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

function saveSite() {
  const note = document.getElementById("finalNote")?.value || "";
  const payload = {
    finalNote: note,
    savedAt: new Date().toISOString()
  };

  localStorage.setItem("boyfriends-day-site", JSON.stringify(payload));
  const fullLink = `${window.location.href.split("?")[0]}?note=${encodeURIComponent(note)}`;
  navigator.clipboard.writeText(fullLink).catch(() => {});
  alert(`Saved! Your link is ready to copy:\n\n${fullLink}`);
}

function ensureBodyState() {
  const note = new URLSearchParams(window.location.search).get("note");
  const finalNote = document.getElementById("finalNote");
  if (note && finalNote) {
    finalNote.value = decodeURIComponent(note);
  }
}

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") goToSlide(currentSlide + 1);
  if (event.key === "ArrowLeft") goToSlide(currentSlide - 1);
  if (event.key === "Escape") closeEnvelope();
});

window.addEventListener("click", (event) => {
  const modal = document.getElementById("finalModal");
  if (event.target === modal) closeEnvelope();
});






























































































































































































































































































































































































































































































































































































































