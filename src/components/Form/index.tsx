import React, { useCallback, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores';
import { useError } from './hooks';

const renderError = (error: string) => {
  return (
    <div className='form-group-error'>
      {error}
    </div>
  )
}

const Form: React.FC = observer(() => {
  const { UserStore } = useStore();
  const { firstName, lastName, setFirstName, setLastName, toggleModal } = UserStore;
  const { errors, showError, clearErrors } = useError();

  const compose = (fn: Function) => (e: any) => {
    clearErrors();
    fn(e)
  }
  const onChangeFirstName = compose(setFirstName);
  const onChangeLastName = compose(setLastName);

  const handleSubmit = () => {
    if (!firstName) {
      showError('firstName', 'Please specify your first name');
    }
    if (!lastName) {
      showError('lastName', 'Please specify your lastName name')
    }
    if (firstName && lastName) {
      toggleModal();
    }
  };

  return (
    <div className="form">
      <div className='form-group'>
        <input
          type="text"
          placeholder="Имя"
          value={firstName}
          onChange={(e) => onChangeFirstName(e.target.value)}
        />
        {errors['firstName'] ? renderError(errors.firstName) : null}
      </div>
      <div className='form-group'>
        <input
          type="text"
          placeholder="Фамилия"
          value={lastName}
          onChange={(e) => onChangeLastName(e.target.value)}
        />
        {errors['lastName'] ? renderError(errors.lastName) : null}
      </div>
      <button type='submit' onClick={handleSubmit}>Готово</button>
    </div>
  );
});

export default Form;