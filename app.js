document.addEventListener('DOMContentLoaded', () => {

  /* ---------- tanggal hari ini ---------- */
  const dateEl = document.getElementById('todayDate');
  if (dateEl) {
    const today = new Date();
    const formatted = today.toLocaleDateString('id-ID', {
      day: 'numeric', month: 'long', year: 'numeric'
    });
    dateEl.textContent = formatted;
  }

  /* ---------- buka amplop ---------- */
  const envelope = document.getElementById('envelope');
  const envelopeStage = document.getElementById('envelopeStage');
  const letterStage = document.getElementById('letterStage');

  let opened = false;
  function openEnvelope() {
    if (opened) return;
    opened = true;
    envelope.classList.add('is-open');

    setTimeout(() => {
      envelopeStage.classList.add('is-hidden');
      letterStage.classList.add('is-visible');
      letterStage.setAttribute('aria-hidden', 'false');
      letterStage.querySelector('.letter').focus?.();
    }, 650);
  }

  envelope.addEventListener('click', openEnvelope);
  envelope.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openEnvelope();
    }
  });

  /* ---------- kartu alasan sayang ---------- */
  const reasons = [
    "Karena aa selalu bikin hari yang biasa saja jadi terasa lebih hangat.",
    "Karena cara aa mendengarkan bikin ade merasa benar-benar didengar.",
    "Karena aa sabar menghadapi ade, bahkan di hari-hari yang sulit.",
    "Karena senyum aa itu satu dari sedikit hal yang selalu berhasil bikin ade tenang.",
    "Karena aa selalu ada, meski cuma lewat pesan singkat di tengah hari sibuk.",
    "Karena aa bikin ade percaya bahwa disayang itu tidak harus rumit.",
    "Karena aa mengingat hal-hal kecil tentang ade yang bahkan ade sendiri lupa.",
    "Karena aa adalah rumah yang paling nyaman ade tempati sejauh ini.",
    "Karena aa selalu berusaha, bahkan saat semuanya terasa berat.",
    "Karena sama aa, versi diri ade yang paling tenang bisa muncul."
  ];

  const reasonText = document.getElementById('reasonText');
  const nextReasonBtn = document.getElementById('nextReason');
  let usedIndexes = [0];

  function pickNextReason() {
    if (usedIndexes.length >= reasons.length) usedIndexes = [];
    let idx;
    do {
      idx = Math.floor(Math.random() * reasons.length);
    } while (usedIndexes.includes(idx));
    usedIndexes.push(idx);
    return reasons[idx];
  }

  if (nextReasonBtn && reasonText) {
    nextReasonBtn.addEventListener('click', () => {
      reasonText.classList.add('is-fading');
      setTimeout(() => {
        reasonText.textContent = pickNextReason();
        reasonText.classList.remove('is-fading');
      }, 220);
    });
  }

  /* ---------- hujan hati kecil ---------- */
  const heartsLayer = document.getElementById('heartsLayer');
  const heartChars = ['❤', '♥', '💗'];

  function spawnHeart() {
    if (!heartsLayer) return;
    const heart = document.createElement('span');
    heart.className = 'heart';
    heart.textContent = heartChars[Math.floor(Math.random() * heartChars.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.setProperty('--drift', (Math.random() * 80 - 40) + 'px');
    heart.style.animationDuration = (6 + Math.random() * 5) + 's';
    heart.style.fontSize = (14 + Math.random() * 14) + 'px';
    heartsLayer.appendChild(heart);
    setTimeout(() => heart.remove(), 12000);
  }

  setInterval(spawnHeart, 900);
  spawnHeart();

});
