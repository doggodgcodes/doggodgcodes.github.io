function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

document.getElementById('orderPizza').addEventListener('click', function() {
  document.getElementById('orderMessage').textContent = "Just kidding! Pizza is only available in your dreams. 🍕💤";
});
document.getElementById('eatPizza').addEventListener('click', function() {
  document.getElementById('eatMessage').textContent = "You ate a virtual pizza";
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'p' || e.key === 'P') {
    const cat = document.getElementById('pizzaCat');
    cat.style.display = cat.style.display === 'none' ? 'block' : 'none';
  }
});
let counter = 0;
setInterval(() => {
  counter++;
  document.getElementById('pizzaCounter').textContent = counter;
}, 100);
