const form = document.querySelector('form');

const inputs = {
    nombre: document.querySelector('input[name="nombre-alojamiento"]'),
    ubicacion: document.querySelector('input[name="ubicacion-alojamiento"]'),
    precio: document.querySelector('input[name="precio-alojamiento"]'),
    capacidad: document.querySelector('input[name="capacidad-alojamiento"]'),
    tipo: document.querySelector('select[name="tipo-alojamiento"]'), 
}

Object.keys(inputs).forEach(key => {
    const textError = document.createElement('small');
    textError.classList.add('text-danger','d-none');
    textError.id = `error-${key}`;
    inputs[key].parentNode.appendChild(textError);
})

const validaciones = {
    nombre: (value) => {
        if(!value) return  'El nombre es obligatorio';
        if(value.length <3) return 'El nombre debe tener al menos 3 caracteres';
        return '';
    },
    direccion: (value) => !value ? 'La dirección es obligatoria' : '',
    precio: (value) => {
        if(!value) return 'El precio es obligatorio';
        if(value < 0) return 'El precio no puede ser negativo';
        return '';
    },
    ubicacion: (value) => !value ? 'La ubicación es obligatoria' : '',
    capacidad: (value) => {
        if(!value) return 'La capacidad es obligatoria';
        if(value < 1) return 'La capacidad debe ser mayor a 0';
        return '';
    },
    tipo: (value) => !value ? 'El tipo es obligatorio' : '',
}

const mostrarError = (input,mensajeError) => {
    const  errorMessage = document.querySelector(`#error-${input}`);
    if (mensajeError){
        errorMessage.textContent = mensajeError;
        errorMessage.classList.remove('d-none');
        inputs[input].classList.add('is-invalid');
    }else{
        errorMessage.classList.add('d-none');
        inputs[input].classList.remove('is-invalid');
    }
}

//listener de formulario

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let errores = false;

    Object.keys(inputs).forEach(key=>{
        const valor = inputs[key].value;
        const error = valor? validaciones[key](valor): 'Campo obligatorio';
        mostrarError(key,error);
        if(error) errores = true;
    });

    if(!errores){
        alert('Datos de formulario: \n' + JSON.stringify(Object.fromEntries(new FormData(form))));
        form.submit();
    }
})

Object.keys(inputs).forEach(key => {
    inputs[key].addEventListener('input', () => {
        const error = validaciones[key](inputs[key]?.value);
        mostrarError(key, error);
    });
});