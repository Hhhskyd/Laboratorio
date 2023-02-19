const formulario = document.getElementById ('formulario');
const inputs = document.querySelectorAll('#formulario inputs');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    clave: /^.{8}$/,
	confirmesuclave:/^.{8,12}$/, 
}

