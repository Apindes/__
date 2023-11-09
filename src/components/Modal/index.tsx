// src/components/Modal.tsx
import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores';

const CloseButton = () => (
  <svg
    className="close-button"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
    />
  </svg>
)

const Modal: React.FC = observer(() => {
  const { UserStore } = useStore();
  const { fullName, showModal, toggleModal } = UserStore;

  return (
    showModal ? (
      <div className="modal">
        <div className="modal-content">
          <span>👋 Здравствуйте, <span className='greeting-person'>{fullName}</span></span>
          <button onClick={toggleModal}>
            <CloseButton />
          </button>
        </div>
      </div>
    ) : null
  );
});

export default Modal;