const scrollBtn = document.getElementById('scroll-top');
scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const accessBtn = document.getElementById('access-btn');
console.log(accessBtn)
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');

accessBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});