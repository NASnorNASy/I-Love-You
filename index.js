const moving = document.querySelector('.card');
const clicks = document.querySelector('.container');
const willY = document.querySelector('.will-you');
const yeses = document.querySelector('.yeses');
const yes1 = document.querySelector('.yes');
const yes2 = document.getElementById('yes2');
const love = document.querySelector('.lovee');
let count = 0;
let yess = false;
clicks.addEventListener('click', () => {
    count += 1;
    if (count % 2 !== 0) {
        moving.style.top = '-90px';
    }
    else {
        moving.style.top = '0px';
    }

    if (count === 1) {
        willY.style.display = 'block';
        yeses.style.display = 'block';
    }
});
yes1.addEventListener('click', () => {
    yess = true;
    if (yess) {
        willY.style.display = 'none';
        yeses.style.display = 'none';
        love.style.display = 'block';
    }
});
yes2.addEventListener('click', () => {
    yess = true;
    if (yess) {
        willY.style.display = 'none';
        yeses.style.display = 'none';
        love.style.display = 'block';
    }
});