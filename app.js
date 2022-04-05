const h1 = document.querySelector('div.hello:first-child h1');
h1.addEventListener('click', function() {
    h1.style.color = 'blue';
});
h1.addEventListener('mouseenter', function() {
    h1.innerText = 'Mouse is here!';
});
h1.addEventListener('mouseleave', function() {
    h1.innerText = 'Mouse is gone!';
});
window.addEventListener('resize', function() {
    this.document.body.style.backgroundColor = 'tomato';
});
window.addEventListener('copy', function() {
    alert('copier!');
});