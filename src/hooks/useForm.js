import { useReducer, useRef } from 'react';

// Basic validation function (same as before)
function validateField(name, value) {
  let error = '';
  if (!value.trim()) {
    error = `${name} is required`;
  }
  if (name === 'email' && value) {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(value)) {
      error = 'Invalid email address';
    }
  }
  return error;
}

// Reducer to handle form state
function formReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD': {
      const { name, value } = action.payload;
      return {
        ...state,
        values: { 
          ...state.values, 
          [name]: value 
        },
        // Immediately update the error for this field
        errors: { 
          ...state.errors, 
          [name]: validateField(name, value) 
        }
      };
    }
    case 'SET_ERRORS': {
      return {
        ...state,
        errors: action.payload,
      };
    }
    case 'RESET': {
      return {
        values: action.payload, // Reset to the original values from the ref
        errors: {}
      };
    }
    default:
      return state;
  }
}

export default function useForm(initialValues) {
  // Save initial values for the reset action
  const initialValuesRef = useRef(initialValues);
  
  // Use useReducer to manage a combined state for values and errors
  const [state, dispatch] = useReducer(formReducer, {
    values: initialValues,
    errors: {}
  });

  // Handle changes by dispatching an action
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FIELD', payload: { name, value } });
  };

  // Validate every field on submit, then dispatch errors if present
  const handleSubmit = (e, callback) => {
    e.preventDefault();
    const newErrors = {};
    for (let field in state.values) {
      newErrors[field] = validateField(field, state.values[field]);
    }
    dispatch({ type: 'SET_ERRORS', payload: newErrors });
    const hasErrors = Object.values(newErrors).some((error) => error);
    if (!hasErrors) {
      callback();
    }
  };

  // Reset the form state to the initial values
  const resetForm = () => {
    dispatch({ type: 'RESET', payload: initialValuesRef.current });
  };

  return {
    values: state.values,
    errors: state.errors,
    handleChange,
    handleSubmit,
    resetForm,
  };
}
