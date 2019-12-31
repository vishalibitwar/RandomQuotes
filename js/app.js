
document.querySelector('#changeBtn').addEventListener('click', function(e)
{ randomQuote();
});

async function randomQuote() {
  const response = await fetch('https://api.quotable.io/random');
  const data = await response.json();
  document.getElementById('h1').innerText = data.content;
}

