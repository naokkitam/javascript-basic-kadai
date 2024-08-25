const textBtn = document.getElementById('btn');
const newText = document.getElementById('text');

textBtn.addEventListener('click', () => {
  newText.textContent = 'ボタンをクリックしました';
})