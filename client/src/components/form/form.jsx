import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useSelector } from 'react-redux';
import "../form/form.style.css";

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
    const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;  //Valido que sea una URL
    return urlPattern.test(url);
  };

  const validateHealthScore = (score) => {
    const numericScore = parseInt(score, 10);
    return !isNaN(numericScore) && numericScore >= 0 && numericScore <= 100;    //Valido que no sea entre 0 y 100
  };

  const handleChange = (e) => {           //Accede a determinado elemento del formData
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'title' && /\d/.test(value)) {     //Validando que no tenga números el texto ingresado
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

  const handleImagePaste = (e) => {         //para poder pegar la url con el mouse
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


  const handleDietChange = (e) => {
    const { name, checked } = e.target;


    const selectedDietsCopy = [...formData.diets];

  
    if (checked) {
      selectedDietsCopy.push(name);
    } else {
      const index = selectedDietsCopy.indexOf(name);
      if (index !== -1) {
        selectedDietsCopy.splice(index, 1);
      }
    }

    setFormData({
      ...formData,
      diets: selectedDietsCopy,
    });
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

    if (formData.diets.length === 0) {              //validación de dieta para seleccionar al menos una
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

    if (formData.steps.some((step) => step.step.trim() === '')) {     //validación para no enviar un paso sin descripcion
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
      const response = await axios.post('http://localhost:3001/recipes/', formData); 

      setFormData({         // para limpiar el formulario despues de capturar
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
    <form className='form' onSubmit={handleSubmit}>
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
        <label>Dietas:</label>
        {diets.map((diet) => (
          <div key={diet.name}>
            <input
              type="checkbox"
              id={diet.name}
              name={diet.name}
              checked={formData.diets.includes(diet.name)}
              onChange={handleDietChange}
            />
            <label htmlFor={diet.name}>{diet.name}</label>
          </div>
        ))}
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
