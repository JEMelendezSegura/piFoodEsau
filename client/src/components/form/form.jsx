// import { useState } from "react";
// import { useDispatch } from "react-redux";


// function Form(){
//     const dispatch = useDispatch();
//     const [formData, setFormData] = useState({
//         title:"",
//         image: "",
//         summary: "",
//         healthScore: 0,
//         diets: [],
//         steps: [],
//     });

//     const [errores, setErrores] = useState({
//         title:"",
//         image: "",
//         summary: "",
//         healthScore: "",
//         diets: "",
//         steps: "",
//     })


//     function handleInputChange(e){
//         const {name, value} = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         })
//     };

//     function validardatos(campo, valor){
//         switch (campo){
//             case "title":
//                 const notNumber = /^[^0-9]+$/;
//                 if(!notNumber.test(valor)){
//                     setErrores({
//                         ...errores,
//                         title: "El nombre de la receta no debe contener números",
//                     });
//                 } else {
//                     setErrores({
//                         ...errores,
//                         title: "",
//                     });
//                 }
//                 case "image":
//                 const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
//                 if(!urlPattern.test(valor)){
//                     setErrores({
//                         ...errores,
//                         image: "La URL ingresada no es válida",
//                     });
//                 } else {
//                     setErrores({
//                         ...errores,
//                         image: "",
//                     });
//                 }
//                 case "healthScore":
//                 const numero = parseFloat(valor);
//                 if(isNaN(numero) || numero < 0 || numero >100){
//                     setErrores({
//                         ...errores,
//                         healthScore: "El healthScore debe ser un número entre 0 y 100",
//                     });
//                 } else {
//                     setErrores({
//                         ...errores,
//                         healthScore: "",
//                     });
//                 }
//             default:
//         }
//     }













//     return (
//         <div>
//             <p>estas en el form</p>
//         </div>
//     )
// }

// export default Form;
//!!!!!!!!!!!!!





import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useSelector } from 'react-redux';

function RecipeForm() {
    const diets = useSelector((state) => state.diets);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    summary: '',
    healthScore: '',
    diets: [], 
    steps: [],
  });

  const [errors, setErrors] = useState({
    title: '',
    image: '',
    healthScore: '',
    diets: '', 
    steps: '', 
  });

  const validateImageURL = (url) => {
    // Expresión regular para validar una URL
    const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    return urlPattern.test(url);
  };

  const validateHealthScore = (score) => {
    const numericScore = parseInt(score, 10);
    return !isNaN(numericScore) && numericScore >= 0 && numericScore <= 100;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'title' && /\d/.test(value)) {
      setErrors({
        ...errors,
        title: 'El título no debe contener números.',
      });
    } else if (name === 'title') {
      setErrors({
        ...errors,
        title: '',
      });
    }

    if (name === 'image' && !validateImageURL(value)) {
      setErrors({
        ...errors,
        image: 'Por favor, ingrese una URL válida.',
      });
    } else if (name === 'image') {
      setErrors({
        ...errors,
        image: '',
      });
    }

    if (name === 'healthScore' && !validateHealthScore(value)) {
      setErrors({
        ...errors,
        healthScore: 'La puntuación de salud debe estar entre 0 y 100.',
      });
    } else if (name === 'healthScore') {
      setErrors({
        ...errors,
        healthScore: '',
      });
    }
  };

  const handleImagePaste = (e) => {
    e.preventDefault();
    const pastedValue = e.clipboardData.getData('text');
    setFormData({
      ...formData,
      image: pastedValue,
    });

    if (!validateImageURL(pastedValue)) {
      setErrors({
        ...errors,
        image: 'Por favor, ingrese una URL válida.',
      });
    } else {
      setErrors({
        ...errors,
        image: '',
      });
    }
  };

  const handleDietChange = (e) => {         //!!!!!!!!!!! aqui está el problema
    const { options } = e.target;
    const selectedDiets = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setFormData({
      ...formData,
      diets: selectedDiets,
    });

    // Limpiar el error de las dietas si se selecciona al menos una
 
  };

  const handleStepChange = (e, index) => {
    const { name, value } = e.target;
    const newSteps = [...formData.steps];
    newSteps[index][name] = value;
    setFormData({
      ...formData,
      steps: newSteps,
    });
  };

  const addStep = () => {
    setFormData({
      ...formData,
      steps: [...formData.steps, { number: formData.steps.length + 1, step: '' }],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación adicional para diets y steps
    if (formData.diets.length === 0) {
      setErrors({
        ...errors,
        diets: 'Debe seleccionar al menos una dieta.',
      });
      return;
    } else {
      setErrors({
        ...errors,
        diets: '',
      });
    }

    if (formData.steps.some((step) => step.step.trim() === '')) {
      setErrors({
        ...errors,
        steps: 'Todos los pasos deben tener una descripción.',
      });
      return;
    } else {
      setErrors({
        ...errors,
        steps: '',
      });
    }

    try {
      const response = await axios.post('http://localhost:3001/recipes/', formData); // Cambia la URL de la API según tu configuración
      dispatch({ type: 'ADD_RECIPE', payload: response.data }); // Agrega la receta a tu estado de Redux si es necesario
      // Limpia el formulario
      setFormData({
        title: '',
        image: '',
        summary: '',
        healthScore: '',
        diets: [],
        steps: [],
      });
    } catch (error) {
      console.error('Error al enviar el formulario', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Título:</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
        {errors.title && <p className="error">{errors.title}</p>}
      </div>
      <div>
        <label htmlFor="image">Imagen:</label>
        <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} onPaste={handleImagePaste} required />
        {errors.image && <p className="error">{errors.image}</p>}
      </div>
      <div>
        <label htmlFor="summary">Resumen:</label>
        <textarea id="summary" name="summary" value={formData.summary} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="healthScore">Puntuación de salud:</label>
        <input type="number" id="healthScore" name="healthScore" value={formData.healthScore} onChange={handleChange} required />
        {errors.healthScore && <p className="error">{errors.healthScore}</p>}
      </div>
      <div>
        <label htmlFor="diets">Dietas:</label>
        <select id="diets" name="diets" multiple onChange={handleDietChange} required>
        {diets.map((diet)=>
                <option value = {diet.name}>{diet.name}</option>
                )}
        </select>
        {errors.diets && <p className="error">{errors.diets}</p>}
      </div>
      <div>
        <label>Ingredientes:</label>
        <ul>
          {formData.steps.map((step, index) => (
            <li key={index}>
              <input type="text" name="number" value={step.number} onChange={(e) => handleStepChange(e, index)} placeholder="Número de paso" />
              <textarea name="step" value={step.step} onChange={(e) => handleStepChange(e, index)} placeholder="Descripción del paso" />
            </li>
          ))}
        </ul>
        {errors.steps && <p className="error">{errors.steps}</p>}
        <button type="button" onClick={addStep}>Agregar paso</button>
      </div>
      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
}

export default RecipeForm;