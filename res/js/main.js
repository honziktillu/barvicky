const ourDiv = document.getElementsByClassName('our-div');
const colors = document.getElementsByClassName('color');
let currentColor;

[...ourDiv].forEach((e) => {
    e.onclick = () => {
        e.style.backgroundColor = currentColor;
    };
});

[...colors].forEach((e) => {
    e.onclick = () => {
        [...colors].forEach((ev) => {
            ev.classList.remove('active');
        });
        e.classList.add('active');
        currentColor = e.dataset.color;
    }
});

[...colors].forEach((e) => {
    if (e.classList.contains('active')) {
        currentColor = e.dataset.color;
    }
});