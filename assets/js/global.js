
// active function

document.querySelectorAll('.navbar-item a').forEach(isActive => {
    isActive.addEventListener('click', function(){
        document.querySelector('.navbar-menu').querySelector('.active').classList.remove('active')
        isActive.classList.add('active')
    })
});

// click navbar

document.querySelector('#mobile-menu').addEventListener('click',
    () => {
        document.querySelector('#mobile-menu').classList.toggle('is-active')
        document.querySelector('.navbar-menu').classList.toggle('active')
    }
);

// cards

const controls = document.querySelectorAll('.control');

const items = document.querySelectorAll('.item-cards');
const maxItems = items.length;

let curruentItem = 0;

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-left');

        if(isLeft){
            curruentItem -= 1;
        }else{
            curruentItem += 1;
        };

        if(curruentItem >= maxItems){
            curruentItem = 0;
        };

        if(curruentItem < 0){
            curruentItem = maxItems - 1;
        };

        items.forEach(item => item.classList.remove('focus'));
        controls.forEach(item => item.classList.remove('curruent-item'));

        items[curruentItem].classList.add('focus');
        controls[curruentItem].classList.add('curruent-item');
    });
});

// date

date = function(){
    return document.querySelector('#date').innerHTML = new Date().getFullYear();
};

date(); // callback