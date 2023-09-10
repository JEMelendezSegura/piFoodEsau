import { useState } from "react";


function Form(){
    const [formData, setFormData] = useState({
        title:"",
        image: "",
        summary: "",
        healthScore: 0,
        diets: [],
        steps: [],
    })

    





    return (
        <div>
            <p>estas en el form</p>
        </div>
    )
}

export default Form;

// Nombre.
// Resumen del plato.
// Nivel de comida saludable (health score).
// Paso a paso.
// Imagen.
// Posibilidad de seleccionar/agregar varios tipos de dieta en simultáneo.
// Botón para crear la receta.