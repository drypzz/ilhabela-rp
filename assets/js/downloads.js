document.getElementById('countermta').innerHTML = (localStorage.clickCounterMTA ?? 0);
document.getElementById('countergta').innerHTML = (localStorage.clickCounterGTA ?? 0);

// callback

function clickCounter(int){
    if (int == 1){
        if (localStorage.clickCounterMTA) {
            localStorage.clickCounterMTA = Number(localStorage.clickCounterMTA) + 1;
        }else{
            localStorage.clickCounterMTA = 1;
        };
        document.getElementById('countermta').innerHTML = localStorage.clickCounterMTA;
    }else{
        if (localStorage.clickCounterGTA) {
            localStorage.clickCounterGTA = Number(localStorage.clickCounterGTA) + 1;
        }else{
            localStorage.clickCounterGTA = 1;
        };
        document.getElementById('countergta').innerHTML = localStorage.clickCounterGTA;
    };
};