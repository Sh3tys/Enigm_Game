
const resultEtape1 = document.getElementById('resultStep1');
const resultEtape2 = document.getElementById('resultStep2');
const resultEtape3 = document.getElementById('resultStep3');
const etape2 = document.getElementById('etape2');
const etape3 = document.getElementById('etape3');
//const etape4 = document.getElementById('resultStep4');
//const etape5 = document.getElementById('resultStep5');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
//const btn3 = document.getElementsByName('btn3');
//const btn4 = document.getElementsByName('btn4');
//const btn5 = document.getElementsByName('btn5');


btn1.addEventListener('click',function(){
    if (resultEtape1.value === '16') {
        etape2.style.display = 'block';
        resultEtape1.readOnly = true; // retire la modification possible
        btn1.style.display = 'none';
    } else {
        resultEtape1.value = '';
    }
});

btn2.addEventListener('click',function() {
    if (resultEtape2.value === '26 21_36 17 25 29 21') {
        etape3.style.display = 'block';
        resultEtape2.readOnly = true; // retire la modification possible
        btn2.style.display = 'none';
    } else {
        resultEtape2.value = '';
    }
});

btn3.addEventListener('click',function() {
    if (resultEtape3.value === 'amour') {
        etape4.style.display = 'block';
        resultEtape3.readOnly = true; // retire la modification possible
        btn3.style.display = 'none';
    } else {
        resultEtape3.value = '';
    }
});
/*
btn4.addEventListener('click',function() {
    if (etape1.value === '16') {
        etape2.style.display = 'block';
        etape1.readOnly = true; // retire la modification possible
        btn4.style.display = 'none';
    } else {
        etape1.value = '';
    }
});
*/