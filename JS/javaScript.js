// Чекаємо, поки весь HTML-вміст завантажиться
document.addEventListener("DOMContentLoaded", () => {
    
    // Знаходимо всі кнопки "Додати в кошик"
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Додаємо обробник події "click" до кожної кнопки
    addToCartButtons.forEach(button => {
        
        button.addEventListener('click', () => {
            // Знаходимо найближчу батьківську картку товару
            const card = button.closest('.product-card');
            
            // Беремо назву товару з картки
            const productName = card.querySelector('h3').textContent;
            
            // Виводимо просте сповіщення
            alert(`"${productName}" додано до кошика!`);

            // Тут можна додати складнішу логіку
            // (наприклад, оновлення іконки кошика)
        });
    });

});