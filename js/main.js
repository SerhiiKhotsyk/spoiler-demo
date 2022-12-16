'use strict';

document.addEventListener('click', function(e) {
    if (!e.target.closest('.spoiler__title')) return; // если клик не по заголовку игнорируем

    // аккордеон (удалить если не нужен)
    // проходимся по всем заголовкам и удаляем клас active 
    Array.from(e.target.closest('.container').children).forEach(element => {
        if (element !== e.target.closest('.spoiler')) { // удаляем active кроме элемента по которому кликнули
            element.classList.remove('active');
        }  
    });


    e.target.closest('.spoiler').classList.toggle('active'); // переключаем клас active при клике
})
