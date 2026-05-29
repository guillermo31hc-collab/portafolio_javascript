// Selección de elementos del DOM
// Botones de filtro en la cabecera (tienen el atributo data-filter)
const botones = document.querySelectorAll(".arriba");
console.log(botones);
// Secciones de proyecto (cada una puede tener data-categoria)
const proyectos = document.querySelectorAll(".proyecto");
console.log(proyectos);

// Añadir el listener de clic a cada botón para activar el filtrado
botones.forEach((boton) => boton.addEventListener("click", desaparecer));
function desaparecer(e) {
    // Quitar la clase seleccionado de todos los botones
    botones.forEach((boton) => boton.classList.remove("seleccionado"));

    // Obtener el botón que disparó el evento y añadir la clase
    // Usamos e.currentTarget para asegurarnos de referirnos al botón
    const boton = e.currentTarget;
    boton.classList.add("seleccionado");

    // Leer el filtro desde el atributo data-filter del botón
    // Ejemplos: 'todos', 'personajes', 'fondos', 'posters'
    const categoria = boton.dataset.filter;
    console.log("data-filter:", categoria);

    // Para cada proyecto, comprobar su data-categoria y ocultarlo/mostrarlo
    proyectos.forEach((proyecto) => {
        const categoriaProyecto = proyecto.dataset.categoria;
        console.log("proyecto categoria:", categoriaProyecto);
        if (categoria === "todos" || categoriaProyecto === categoria) {
            // Mostrar cuando coincide la categoría o cuando se selecciona 'todos'
            proyecto.style.display = "";
        } else {
            // Ocultar proyectos que no coinciden
            proyecto.style.display = "none";
        }
    });
}

