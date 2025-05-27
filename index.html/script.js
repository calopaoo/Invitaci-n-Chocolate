
const countdownElement = document.getElementById('countdown');
const eventDate = new Date('July 21, 2025 20:00:00').getTime(); 

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
        countdownElement.innerHTML = "¡El evento ha comenzado!";
        clearInterval(countdownInterval); 
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


const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); 

// --- Formulario de Inscripción ---
const form = document.getElementById('inscripcion-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const tickets = document.getElementById('tickets').value;

    

    if (nombre && email && tickets > 0) {
        
        formMessage.textContent = `¡Gracias, ${nombre}! Has reservado ${tickets} entrada(s). Te hemos enviado un email de confirmación a ${email}.`;
        formMessage.className = 'form-message success';
        form.reset(); 
    } else {
        formMessage.textContent = 'Por favor, completa todos los campos correctamente.';
        formMessage.className = 'form-message error';
    }

    
    form.querySelector('.btn-submit').style.transform = 'scale(0.98)';
    setTimeout(() => {
        form.querySelector('.btn-submit').style.transform = 'scale(1)';
    }, 100);
});
document.addEventListener('DOMContentLoaded', function() {
    
    const countdownElement = document.getElementById('countdown');
    const targetDate = new Date('October 29, 2023 20:00:00').getTime(); 

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
    updateCountdown(); 

    // Código para el formulario de inscripción
    const inscripcionForm = document.getElementById('inscripcion-form');
    const formMessage = document.getElementById('form-message');

    if (inscripcionForm && formMessage) { 
        inscripcionForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            

            formMessage.textContent = '¡Gracias por tu reserva! Te esperamos.';
            formMessage.style.color = '#28a745'; // Color verde para éxito
            formMessage.style.display = 'block'; // Asegurarse de que el mensaje sea visible

            // Opcional: limpiar el formulario después de un tiempo
            setTimeout(() => {
                inscripcionForm.reset(); 
                formMessage.textContent = ''; 
                formMessage.style.display = 'none'; 
            }, 5000); // El mensaje desaparecerá después de 5 segundos
        });
    } else {
        console.error("No se encontró el formulario 'inscripcion-form' o el elemento 'form-message'.");
    }
});