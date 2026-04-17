const phrases = [
  'Full Stack Developer',
  'Software Engineer',
  'React & Angualar Developer',
  '.NET Dev',
  'Batch Processing Expert',
];
let pi = 0,
  ci = 0,
  del = false;
const el = document.getElementById('typed-text');
function tick() {
  const w = phrases[pi];
  if (!del) {
    el.textContent = w.slice(0, ++ci);
    if (ci === w.length) {
      del = true;
      setTimeout(tick, 1800);
      return;
    }
  } else {
    el.textContent = w.slice(0, --ci);
    if (ci === 0) {
      del = false;
      pi = (pi + 1) % phrases.length;
    }
  }
  setTimeout(tick, del ? 50 : 95);
}
tick();
