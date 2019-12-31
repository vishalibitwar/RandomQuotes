const h1 = document.getElementById('h1');
document.querySelector('#changeBtn').addEventListener('click', function () {
  // randomQuote();
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      animate(h1, 'flipInY');
      h1.innerText = data.content;
    })
});

// async function randomQuote() {
//   const response = await fetch('https://api.quotable.io/random');
//   const data = await response.json();
//   animate(h1, 'flipInY');
//   h1.innerText = data.content;
// }


function animate(element, animation) {
  element.classList.add(animation);
  const wait = setTimeout(() => {
    element.classList.remove('animated', animation);
  }, 1000);
}
