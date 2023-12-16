import { useDispatch, useSelector } from 'react-redux';
import Button from './UI/Button';
import CartItem from './CartItem';
import { cartActions } from '../store/cartSlice';
import Modal from './UI/Modal';

function Cart({ cartQuantity }) {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart);

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
        <p className="p-1 font-bold text-green-500 text-lg hover:underline">
          ${(total / 100).toFixed(2)}
        </p>
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
  return <Modal className="animate-fade-in-slide-up">{content}</Modal>;
}

export default Cart;
