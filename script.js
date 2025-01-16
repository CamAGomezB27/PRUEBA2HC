document.addEventListener('DOMContentLoaded', function () {
    const chatbotButton = document.getElementById('chatbot-button');
    const chatbotContainer = document.getElementById('chatbot-container');
    const closeChatButton = document.getElementById('close-chat');
    
    // Desactivar los botones si existen
    const ButtonMasivas = document.getElementById('BtnMasivas');
    if (ButtonMasivas) ButtonMasivas.disabled = false;

    const ButtonPersonales = document.getElementById('BtnPersonales');
    if (ButtonPersonales) ButtonPersonales.disabled = false;

    const ButtonPostnomina = document.getElementById('BtnPostnomina');
    if (ButtonPostnomina) ButtonPostnomina.disabled = false;

    // Abrir el chat cuando se presiona el botón
    chatbotButton.addEventListener('click', () => {
        chatbotContainer.classList.add('show');
    });

    // Cerrar el chat cuando se presiona el botón "X"
    closeChatButton.addEventListener('click', () => {
        chatbotContainer.classList.remove('show');
    });

    // Redirigir a otras páginas al hacer clic en los botones
    if (ButtonMasivas) {
        ButtonMasivas.addEventListener('click', function () {
            window.location.href = "masivas.html";
        });
    }

    if (ButtonPersonales) {
        ButtonPersonales.addEventListener('click', function () {
            window.location.href = "personales.html";
        });
    }

    if (ButtonPostnomina) {
        ButtonPostnomina.addEventListener('click', function () {
            window.location.href = "postnomina.html";
        });
    }
});
