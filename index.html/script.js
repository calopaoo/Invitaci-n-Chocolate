// --- Contador Regresivo ---
const countdownElement = document.getElementById('countdown');
const eventDate = new Date('July 21, 2025 20:00:00').getTime(); // Establece la fecha y hora de tu evento

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
        countdownElement.innerHTML = "¡El evento ha comenzado!";
        clearInterval(countdownInterval); // Detiene el contador
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `
        <span>${days} Días</span>
        <span>${hours} Horas</span>
        <span>${minutes} Minutos</span>
        <span>${seconds} Segundos</span>
    `;
}

// Actualiza el contador cada segundo
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Llama una vez para mostrar el contador inmediatamente

// --- Formulario de Inscripción ---
const form = document.getElementById('inscripcion-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la forma tradicional

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const tickets = document.getElementById('tickets').value;

    // Aquí normalmente enviarías estos datos a un servidor (backend)
    // Para este 101, solo mostraremos un mensaje de éxito o error.

    if (nombre && email && tickets > 0) {
        // Simulación de envío exitoso
        formMessage.textContent = `¡Gracias, ${nombre}! Has reservado ${tickets} entrada(s). Te hemos enviado un email de confirmación a ${email}.`;
        formMessage.className = 'form-message success';
        form.reset(); // Limpia el formulario
    } else {
        formMessage.textContent = 'Por favor, completa todos los campos correctamente.';
        formMessage.className = 'form-message error';
    }

    // Pequeño efecto visual al enviar
    form.querySelector('.btn-submit').style.transform = 'scale(0.98)';
    setTimeout(() => {
        form.querySelector('.btn-submit').style.transform = 'scale(1)';
    }, 100);
});
document.addEventListener('DOMContentLoaded', function() {
    // Código para el contador regresivo (si lo tienes)
    const countdownElement = document.getElementById('countdown');
    const targetDate = new Date('October 29, 2023 20:00:00').getTime(); // Asegúrate que esta es la fecha y hora correctas

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            countdownElement.innerHTML = "¡El evento ha comenzado!";
            clearInterval(countdownInterval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Llamada inicial para evitar un retraso de 1 segundo

    // Código para el formulario de inscripción
    const inscripcionForm = document.getElementById('inscripcion-form');
    const formMessage = document.getElementById('form-message');

    if (inscripcionForm && formMessage) { // Asegurarse de que los elementos existen
        inscripcionForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que el formulario se envíe de la forma tradicional y recargue la página

            // Aquí puedes agregar lógica para enviar los datos a un servidor (opcional)
            // Por ahora, solo mostraremos el mensaje de confirmación

            formMessage.textContent = '¡Gracias por tu reserva! Te esperamos.';
            formMessage.style.color = '#28a745'; // Color verde para éxito
            formMessage.style.display = 'block'; // Asegurarse de que el mensaje sea visible

            // Opcional: limpiar el formulario después de un tiempo
            setTimeout(() => {
                inscripcionForm.reset(); // Resetea los campos del formulario
                formMessage.textContent = ''; // Limpia el mensaje
                formMessage.style.display = 'none'; // Oculta el mensaje
            }, 5000); // El mensaje desaparecerá después de 5 segundos
        });
    } else {
        console.error("No se encontró el formulario 'inscripcion-form' o el elemento 'form-message'.");
    }
});