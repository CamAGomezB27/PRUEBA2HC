document.addEventListener('DOMContentLoaded', function () {
    const chatbotButton = document.getElementById('chatbot-button');
    const chatbotContainer = document.getElementById('chatbot-container');
    const closeChatButton = document.getElementById('close-chat');
    const ButtonMasivas = document.getElementById('ButtonMasivas');  // Asegúrate de que el ID sea correcto
    const ButtonPersonales = document.getElementById('ButtonPersonales');  // Asegúrate de que el ID sea correcto
    const ButtonPostnomina = document.getElementById('ButtonPostnomina');  // Asegúrate de que el ID sea correcto
    const goHomeButton = document.getElementById("goHomeButton");
    const toggleButton = document.getElementById("toggleBubble");
    const chatBubble = document.getElementById("chatBubble");
    const toggleIcon = document.getElementById("toggleIcon");

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

        // Redirigir al inicio (index.html) cuando se haga clic en el botón INICIO
    document.getElementById("goHomeButton").addEventListener("click", function() {
        window.location.href = "index.html"; // Redirige a la página de inicio
    });

    // Función para alternar el estado de la burbuja (expandir/contraer)
    toggleButton.addEventListener("click", function() {
        chatBubble.classList.toggle("collapsed"); // Alterna la clase 'collapsed' en la burbuja
    });
    
});