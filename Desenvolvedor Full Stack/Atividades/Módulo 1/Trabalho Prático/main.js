document.addEventListener('DOMContentLoaded', appInit);

function appInit() {
    const inputs  = document.querySelectorAll('.range');
    const amostra = document.querySelector('#amostra');

    function colorChange(params) {
        const inputRed   = inputs[0]; 
        const inputGreen = inputs[1]; 
        const inputBlue  = inputs[2];
        const RGB = `(${inputRed.value}, ${inputGreen.value}, ${inputBlue.value})`;
        
        amostra.style.backgroundColor = `rgb${RGB}`;
        console.log(`O código RGB é: RGB ${RGB}`);
    }

    document.addEventListener('colorchange', function (e) {
        colorChange();
    });
    
    inputs.forEach(input => {
        const fieldValue = `#${input.id}_value`;

        input.value = Math.random() * 255;
        input.fieldValue = document.querySelector(fieldValue);
        input.fieldValue.value = input.value;

        colorChange();

        input.addEventListener('input', function () {
            this.fieldValue.value = this.value;
            document.dispatchEvent( new Event('colorchange') );
        }); 
    });
}