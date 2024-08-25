const textBtn = document.getElementById('btn');
const newText = document.getElementById('text');

textBtn.addEventListener('click', () => {
  setTimeout(() => {
    newText.textContent = 'ボタンをクリックしました';
  }, 2000);
});