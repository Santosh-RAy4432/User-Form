
import React from 'react';
import { useForm } from 'react-hook-form';
import './UserForm.css';

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched', // Validate on blur
  });

  const onSubmit = data => {
    console.log('Form Submitted', data);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <small>{errors.name.message}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: 'Invalid email',
              },
            })}
          />
          {errors.email && <small>{errors.email.message}</small>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
