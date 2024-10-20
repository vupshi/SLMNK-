document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM загружен, перевіряємо стилі...");
    console.log("Колір фону:", getComputedStyle(document.body).backgroundColor);
    console.log("Колір тексту заголовка:", getComputedStyle(document.querySelector('h1')).color);
    
    document.querySelectorAll('.btn').forEach((btn, index) => {
        console.log(`Колір тексту кнопки ${index + 1}:`, getComputedStyle(btn).color);
    });
});
