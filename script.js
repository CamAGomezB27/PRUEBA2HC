document.addEventListener('DOMContentLoaded', function () {
    const chatbotButton = document.getElementById('chatbot-button');
    const chatbotContainer = document.getElementById('chatbot-container');
    const closeChatButton = document.getElementById('close-chat');
    const ButtonMasivas = document.getElementById('ButtonMasivas');  // Asegúrate de que el ID sea correcto
    const ButtonPersonales = document.getElementById('ButtonPersonales');  // Asegúrate de que el ID sea correcto
    const ButtonPostnomina = document.getElementById('ButtonPostnomina');  // Asegúrate de que el ID sea correcto
    const returnButton = document.querySelector('.return-button');
    const submitButton = document.getElementById('submitButton');
    const messageElement = document.getElementById('message');

    // Abrir el chat cuando se presiona el botón
    chatbotButton.addEventListener('click', () => {
        chatbotContainer.classList.add('show');
    });

    // Cerrar el chat cuando se presiona el botón "X"
    closeChatButton.addEventListener('click', () => {
        chatbotContainer.classList.remove('show');
    });

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
    
        // Mostrar mensaje de error al hacer clic una vez
    submitButton.addEventListener('click', function () {
        // Mostrar el mensaje de error
        messageElement.innerText = 'ARCHIVO CON ERROR, REVISAR CAMPOS';
        messageElement.className = 'message error'; // Añadir clase de error
        messageElement.style.opacity = 1; // Mostrar el mensaje

        // Limpiar el mensaje después de 2 segundos
        setTimeout(() => {
            messageElement.style.opacity = 0; // Ocultar el mensaje con la animación
        }, 2500);
    });

    // Mostrar mensaje de éxito al hacer doble clic
    submitButton.addEventListener('dblclick', function () {
        // Mostrar el mensaje de éxito
        messageElement.innerText = 'CARGUE EXITOSO';
        messageElement.className = 'message success'; // Añadir clase de éxito
        messageElement.style.opacity = 1; // Mostrar el mensaje

        // Limpiar el mensaje después de 2 segundos
        setTimeout(() => {
            messageElement.style.opacity = 0; // Ocultar el mensaje con la animación
        }, 2500);
    });
    
});