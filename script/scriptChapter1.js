
const etape1 = document.getElementById('resultStep1');
const btn1 = document.getElementById('btn');

btn1.addEventListener('click',function() {
    if (etape1.value === 'code') {
        etape2.style.display = 'block';
        etape1.readOnly = true; // retire la modification possible
    } else {
        etape1.value = '';
    }
});