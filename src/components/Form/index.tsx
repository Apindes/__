import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores';

const Form: React.FC = observer(() => {
  const { UserStore } = useStore();
  console.log('UserStore', UserStore)
  const { firstName, lastName, setFirstName, setLastName, toggleModal } = UserStore;


  const handleSubmit = () => {
    if (firstName && lastName) {
      toggleModal();
    }
  };

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Имя"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Фамилия"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button onClick={handleSubmit}>Готово</button>
    </div>
  );
});

export default Form;