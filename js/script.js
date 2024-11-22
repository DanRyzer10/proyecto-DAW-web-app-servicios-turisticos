document.getElementById('atividades-recreativas').addEventListener('submit', function(event) {
event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const tipo = document.getElementById('tipo').value;
    const duracion = document.getElementById('duracion').value;
    const fecha = document.getElementById('fecha').value;

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
         <h2>Resumen de la Actividad:</h2>
         <p><strong>Nombre:</strong> ${nombre}</p>
         <p><strong>Descripción:</strong> ${descripcion}</p>
         <p><strong>Tipo de Actividad:</strong> ${tipo}</p>
         <p><strong>Duración:</strong> ${duracion} horas</p>
         <p><strong>Fecha:</strong> ${fecha}</p>
         <p><strong>Servicios Adicionales:</strong> ${servicios.length > 0 ? servicios.join(', ') : 'Ninguno'}</p>
     `;
 });