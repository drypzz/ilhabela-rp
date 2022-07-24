
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

// toasts

document.querySelector('#button-basic').addEventListener('click',
    () => {
        document.querySelector('#basic').style = 'display: block';
    }
);

document.querySelector('#button-premium').addEventListener('click',
    () => {
        document.querySelector('#premium').style = 'display: block';
    }
);

document.querySelector('#button-fac').addEventListener('click',
    () => {
        document.querySelector('#fac').style = 'display: block';
    }
);

document.querySelector('#button-org').addEventListener('click',
    () => {
        document.querySelector('#org').style = 'display: block';
    }
);

document.querySelector('#button-corp').addEventListener('click',
    () => {
        document.querySelector('#corp').style = 'display: block';
    }
);

document.querySelector('#close-basic').addEventListener('click',
    () => {
        document.querySelector('#basic').style = 'display: none';
    }
);

document.querySelector('#close-premium').addEventListener('click',
    () => {
        document.querySelector('#premium').style = 'display: none';
    }
);

document.querySelector('#close-fac').addEventListener('click',
    () => {
        document.querySelector('#fac').style = 'display: none';
    }
);

document.querySelector('#close-org').addEventListener('click',
    () => {
        document.querySelector('#org').style = 'display: none';
    }
);

document.querySelector('#close-corp').addEventListener('click',
    () => {
        document.querySelector('#corp').style = 'display: none';
    }
);

// date

date = function(){
    return document.querySelector('#date').innerHTML = new Date().getFullYear();
};

date(); // callback