import { useDispatch, useSelector } from 'react-redux';
import Button from './UI/Button';
import CartItem from './CartItem';
import { cartActions } from '../store/cartSlice';
import Modal from './UI/Modal';
import { useState } from 'react';
import SubmitOrder from './SubmitOrder';

function Cart({ cartQuantity }) {
  const dispatch = useDispatch();
  const [isOrdering, setIsOrdering] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  let modalStyle =
    cartQuantity <= 0
      ? 'animate-fade-in-slide-up bg-stone-500 '
      : 'animate-fade-in-slide-up ';
  const total = cart.reduce(
    (totalPrice, item) =>
      (totalPrice += Number(item.price) * item.quantity * 100),
    0
  );

  function handleAddItem(id) {
    dispatch(cartActions.addToCart({ id }));
  }
  function handleUpdateItem(id, amount) {
    dispatch(cartActions.updateCart({ id, amount }));
  }

  let content = (
    <>
      <section className="text-left min-h-full flex flex-col gap-3 mb-8">
        <h1 className="text-4xl">Your Cart</h1>
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
        <p className="p-1 font-bold text-red-800 select-none">
          Total Cost:
          <span className="text-green-500 text-lg hover:underline ml-2 cursor-pointer">
            ${(total / 100).toFixed(2)}
          </span>
        </p>
        <Button textOnly>Cancel</Button>
        <Button
          onClick={() => setIsOrdering(true)}
          type="button"
          className=" ml-5 bg-yellow-400"
        >
          Continue
        </Button>
      </form>
    </>
  );

  if (cartQuantity <= 0) {
    content = (
      <>
        <header className="mb-5">
          <h1 className="text-4xl text-stone-200 text-center">
            Cart Is Empty!
          </h1>
        </header>
        <section className="leading-9 mb-10 text-2xl">
          <p>Looks like there is nothing to see in here</p>
          <p>You can add foods any time and order 7/24!</p>
        </section>
        <form method="dialog">
          <Button className=" bg-stone-400 font-bold hover:scale-110 hover:shadow-stone-600 hover:bg-stone-500 hover:shadow-sm duration-75">
            GOTCHA!
          </Button>
        </form>
      </>
    );
  }
  function onClose() {
    setIsOrdering(false);
  }
  if (isOrdering) {
    content = <SubmitOrder onClose={onClose} totalPrice={total} />;
    modalStyle = 'animate-fade-slide-in-from-right bg-stone-600';
  }

  return <Modal className={modalStyle}>{content}</Modal>;
}

export default Cart;
