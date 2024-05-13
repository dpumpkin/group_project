// Получаем элементы из DOM
const minusBtns = document.querySelectorAll('.minus-btn');
const plusBtns = document.querySelectorAll('.plus-btn');
const quantityInputs = document.querySelectorAll('.quantity-input');
const totalSpan = document.querySelector('.price b'); // Общая сумма корзины
const removeButton = document.querySelector('.cart__item-header-button');

// Добавляем слушателей событий для кнопок "-" и "+"
minusBtns.forEach((minusBtn, index) => {
    minusBtn.addEventListener('click', function() {
        updateQuantity(index, -1);
    });
});

plusBtns.forEach((plusBtn, index) => {
    plusBtn.addEventListener('click', function() {
        updateQuantity(index, 1);
    });
});

// Функция для обновления количества товаров и общей суммы
function updateQuantity(index, change) {
    const quantityInput = quantityInputs[index];
    let quantity = parseInt(quantityInput.value) + change;

    // Проверяем, чтобы количество товаров не было отрицательным
    if (quantity < 0) {
        return;
    }

    quantityInput.value = quantity; // Обновляем значение поля ввода количества

    // Получаем цену товара
    const price = parseFloat(quantityInput.parentElement.querySelector('.cart__item-total-price').textContent.slice(1));

    // Обновляем общую сумму корзины
    const total = parseFloat(totalSpan.textContent.slice(1)); // Текущая общая сумма
    const newTotal = total + (change * price); // Новая общая сумма

    totalSpan.textContent = '$' + newTotal.toFixed(2); // Обновляем отображение общей суммы
}

removeButton.addEventListener('click', function() {
    // Находим родительский элемент с классом "cart__container-item" и скрываем его
    const containerItem = removeButton.closest('.cart__container-item');
    containerItem.style.display = 'none';
});