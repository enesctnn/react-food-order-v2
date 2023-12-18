import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/uiSlice';
import { createPortal } from 'react-dom';

function Modal({ children, className }) {
  const dialog = useRef();

  const dispatch = useDispatch();
  const { isModalOpen } = useSelector((state) => state.ui);

  useEffect(() => {
    const modal = dialog.current;
    if (isModalOpen) {
      modal.showModal();
    }
  }, [isModalOpen]);

  function handleModalClose() {
    dialog.current.close();
    dispatch(uiActions.closeModal());
  }

  return createPortal(
    <dialog
      className={`backdrop:bg-yellow-900 backdrop:opacity-70 rounded-md p-3 ${className}`}
      ref={dialog}
      onClose={handleModalClose}
    >
      {children}
    </dialog>,
    document.getElementById('layout')
  );
}

export default Modal;
