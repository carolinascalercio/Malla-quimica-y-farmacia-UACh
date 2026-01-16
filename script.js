// Cambia entre pendiente y aprobado cuando se hace clic en el ramo
function marcarRamo(ramoId) {
    let ramo = document.getElementById(ramoId);

    if (ramo.classList.contains('pendiente')) {
        ramo.classList.remove('pendiente');
        ramo.classList.add('aprobado');
    } else if (ramo.classList.contains('aprobado')) {
        ramo.classList.remove('aprobado');
        ramo.classList.add('pendiente');
    }
}

// Bloquea los ramos que dependen de otros, cambiándolos a gris
function bloquearRamo(ramoId) {
    let ramo = document.getElementById(ramoId);
    
    // Verifica si el ramo ya tiene el estado de bloqueado para evitar repetición
    if (!ramo.classList.contains('preRequisito')) {
        ramo.classList.add('preRequisito');
        alert("Este ramo está bloqueado, necesitas aprobar el ramo anterior primero.");
    }
}
