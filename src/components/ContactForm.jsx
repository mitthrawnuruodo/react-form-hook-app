import React from 'react';
import useForm from '../hooks/useForm';

export default function ContactForm() {
  const initialValues = {
    name: '',
    email: '',
    requestType: '',
    title: '',
    description: '',
  };

  const { values, errors, handleChange, handleSubmit, resetForm } = useForm(initialValues);

  const onSubmit = () => {
    console.log('Form submitted:', values);
    // Clear the form after submission.
    resetForm();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, onSubmit)}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={values.name} onChange={handleChange} />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={values.email} onChange={handleChange} />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <div>
        <label>Request Type:</label>
        <div>
          <label>
            <input
              type="radio"
              name="requestType"
              value="option1"
              checked={values.requestType === 'option1'}
              onChange={handleChange}
            />
            Option 1
          </label>
          <label>
            <input
              type="radio"
              name="requestType"
              value="option2"
              checked={values.requestType === 'option2'}
              onChange={handleChange}
            />
            Option 2
          </label>
          <label>
            <input
              type="radio"
              name="requestType"
              value="option3"
              checked={values.requestType === 'option3'}
              onChange={handleChange}
            />
            Option 3
          </label>
          <label>
            <input
              type="radio"
              name="requestType"
              value="option4"
              checked={values.requestType === 'option4'}
              onChange={handleChange}
            />
            Option 4
          </label>
        </div>
        {errors.requestType && <p style={{ color: 'red' }}>{errors.requestType}</p>}
      </div>
      <div>
        <label>Title:</label>
        <input type="text" name="title" value={values.title} onChange={handleChange} />
        {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
      </div>
      <div>
        <label>Description:</label>
        <textarea name="description" value={values.description} onChange={handleChange}></textarea>
        {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
