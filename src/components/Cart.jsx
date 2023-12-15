import { useEffect, useRef } from 'react';
import { uiActions } from '../store/uiSlice';
import { useDispatch, useSelector } from 'react-redux';
import Button from './UI/Button';
import CartItem from './CartItem';
import { cartActions } from '../store/cartSlice';

function Cart({ cartQuantity }) {
  const dialog = useRef();
  const dispatch = useDispatch();
  const { isCartOpen } = useSelector((state) => state.ui);
  const { cart } = useSelector((state) => state.cart);

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

  function handleAddItem(id) {
    dispatch(cartActions.addToCart({ id }));
  }
  function handleUpdateItem(id, amount) {
    dispatch(cartActions.updateCart({ id, amount }));
  }

  let content = (
    <>
      <section className="text-left w-96 min-h-full flex flex-col gap-3 mb-8">
        <h1>Your Cart</h1>
        <ul className="flex flex-col gap-4">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onAdd={handleAddItem}
              onUpdate={handleUpdateItem}
            />
          ))}
        </ul>
      </section>
      <form method="dialog" className="text-right ">
        <Button textOnly>Close</Button>
        <Button type="button" className="rounded-sm ml-5">
          Submit
        </Button>
      </form>
    </>
  );

  if (cartQuantity <= 0) {
    content = (
      <>
        <header>
          <h2>Cart Is Empty</h2>
        </header>
        <p>Looks like there is nothing to see in here</p>
        <p>You can add foods on foods page if you want it</p>
        <form method="dialog">
          <Button>GOT IT!!</Button>
        </form>
      </>
    );
  }
  return (
    <dialog
      className="backdrop:bg-yellow-900 backdrop:opacity-70 rounded-md p-3"
      ref={dialog}
      onClose={handleModalClose}
    >
      {content}
    </dialog>
  );
}

export default Cart;
