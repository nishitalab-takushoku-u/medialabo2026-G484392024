let a = document.querySelector('#calc');
a.addEventListener('click', tashizan);

function tashizan() {
    let m1 = document.querySelector('#left');
    let m2 = document.querySelector('#right');
    let b = Number(m1.value);
    let c = Number(m2.value);
    let result = b + c;
    let span = document.querySelector('#answer');
    span.textContent = result;
}