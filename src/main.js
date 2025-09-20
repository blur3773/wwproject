// Маска для телефона
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function() {
        let digits = this.value.replace(/\D/g, '').slice(0, 11);
        digits = digits.replace(/^8/, '7'); // Нормализация 8 → 7
        
        let formatted = '+7';
        if (digits.length > 1) {
            formatted += ` (${digits.slice(1, 4)}`;
        }
        if (digits.length >= 4) {
            formatted += ') ';
        }
        if (digits.length >= 5) {
            formatted += digits.slice(4, 7);
        }
        if (digits.length >= 8) {
            formatted += `-${digits.slice(7, 9)}`;
        }
        if (digits.length >= 10) {
            formatted += `-${digits.slice(9, 11)}`;
        }
        
        this.value = formatted;
    });
}

// Валидация всех форм на странице
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        const submitBtn = this.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true;
            setTimeout(() => {
                submitBtn.disabled = false;
            }, 3000);
        }
    });
});

// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});