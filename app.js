const title = document.querySelector('div.hello:first-child h1');
title.addEventListener('click', function() {
    title.style.color = 'blue';
});
title.addEventListener('mouseenter', function() {
    title.innerText = 'Mouse is here!';
});
title.addEventListener('mouseleave', function() {
    title.innerText = 'Mouse is gone!';
});