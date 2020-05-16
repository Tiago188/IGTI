document.addEventListener('DOMContentLoaded', appInit);

function appInit() {
    const inputs  = document.querySelectorAll('.range');
    const amostra = document.querySelector('#amostra');

    inputs.forEach(input => {
        const fieldValue = `#${input.id}_value`;

        input.value = Math.random() * 255;
        input.fieldValue = document.querySelector(fieldValue);
        input.fieldValue.value = input.value;
    });
}