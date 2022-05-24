//Скріпт для оновлення полів

document.querySelector('.btn-danger').addEventListener('click', () => {
    document.querySelector('.firstName').value = "";
    document.querySelector('.secondName').value = "";
    document.querySelector('.selectCourse').value = 'value1';
    document.querySelector('.radioBut').checked = true;
    document.querySelector('.selectProf').value = 'value1';
    document.querySelector('.phoneValue').value = "";

})