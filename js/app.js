const h1 = document.getElementById('h1');
const changeBtn = document.getElementById('changeBtn');

changeBtn.addEventListener('click', function (e) {
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      animate(h1, 'flipInY');
      h1.innerText = data.content;
    });
  e.preventDefault();
});

function animate(element, animation) {
  element.classList.add(animation);
  const wait = setTimeout(() => {
    element.classList.remove(animation);
  }, 1000);
}
