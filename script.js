document.addEventListener('DOMContentLoaded', function () {
    const chatbotButton = document.getElementById('chatbot-button');
    const chatbotContainer = document.getElementById('chatbot-container');
    const closeChatButton = document.getElementById('close-chat');
    const ButtonMasivas = document.getElementById('ButtonMasivas');  // Asegúrate de que el ID sea correcto
    const ButtonPersonales = document.getElementById('ButtonPersonales');  // Asegúrate de que el ID sea correcto
    const ButtonPostnomina = document.getElementById('ButtonPostnomina');  // Asegúrate de que el ID sea correcto
    const returnButton = document.querySelector('.return-button');

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

        // Verifica si el botón existe antes de agregar el evento
    if (returnButton) {
        // Agrega el evento de clic al botón
        returnButton.addEventListener('click', () => {
            // Redirige a la página principal (index.html)
            window.location.href = 'index.html'; 
        });
    }

    
});