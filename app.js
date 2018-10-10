let rickyism = document.getElementById('rickyism')

function randomGen() {
  let rickyQuote = `"${rickyisms[Math.floor((Math.random() * rickyisms.length))].ricky}"`
  let content = document.createTextNode(rickyQuote)
  rickyism.innerHTML = '';
  rickyism.appendChild(content)
}
