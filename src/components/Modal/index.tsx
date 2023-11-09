// src/components/Modal.tsx
import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores';

const Modal: React.FC = observer(() => {
  const { UserStore } = useStore();
  const { fullName, showModal, toggleModal } = UserStore;

  return (
    showModal ? (
      <div className="modal">
        <div className="modal-content">
          <span>Здравствуйте, {fullName}</span>
          <button onClick={toggleModal}>Закрыть</button>
        </div>
      </div>
    ) : null
  );
});

export default Modal;