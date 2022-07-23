
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

let count = 0;

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-left');

        if(isLeft){
            count -= 1;
        }else{
            count += 1;
        };

        if(count >= maxItems){
            count = 0;
        };

        if(count < 0){
            count = maxItems - 1;
        };

        items.forEach(item => item.classList.remove('focus'));
        controls.forEach(item => item.classList.remove('curruent-item'));

        items[count].classList.add('focus');
        controls[count].classList.add('curruent-item');
    });
});

// date

date = function(){
    return document.querySelector('#date').innerHTML = new Date().getFullYear();
};

date(); // callback