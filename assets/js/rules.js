
// rules

const buttons = document.querySelectorAll('.control-rules');

const rules = document.querySelectorAll('.item-rules');
const maxrules = rules.length;

let countR = 0;

buttons.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-r-left');

        if(isLeft){
            countR -= 1;
        }else{
            countR += 1;
        };

        if(countR >= maxrules){
            countR = 0;
        };

        if(countR < 0){
            countR = maxrules - 1;
        };

        rules.forEach(item => item.classList.remove('focus'));
        buttons.forEach(item => item.classList.remove('curruent-item'));

        rules[countR].classList.add('focus');
        buttons[countR].classList.add('curruent-item');
    });
});