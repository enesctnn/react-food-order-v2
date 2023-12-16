import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/uiSlice';

function Modal({ children, className }) {
  const dialog = useRef();

  const dispatch = useDispatch();
  const { isCartOpen } = useSelector((state) => state.ui);

  useEffect(() => {
    const modal = dialog.current;
    if (isCartOpen) {
      modal.showModal();
    }
  }, [isCartOpen]);

  function handleModalClose() {
    dialog.current.close();
    dispatch(uiActions.closeModal());
  }

  return (
    <dialog
      className={`backdrop:bg-yellow-900 backdrop:opacity-70 rounded-md p-3 ${className}`}
      ref={dialog}
      onClose={handleModalClose}
    >
      {children}
    </dialog>
  );
}

export default Modal;
