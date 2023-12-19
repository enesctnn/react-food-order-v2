import getUserData from '../../ui/user-data';
import Button from './Button';
import Input from './Input';

function SubmitOrder({ onClose, totalPrice }) {
  const user = getUserData() || null;
  console.log(user);
  return (
    <form className="px-8 py-5 flex flex-col gap-4">
      <div className="text-right font-bold text-yellow-500 select-none">
        <h3>Cart Total:</h3>
        <span className="cursor-pointer hover:underline text-green-600 text-lg">
          ${(totalPrice / 100).toFixed(2)}
        </span>
      </div>
      <div className="flex gap-4">
        <Input
          type="text"
          name="user-name"
          label="Name"
          defaultValue={user ? user['user-name'] : ''}
          required
        />
        <Input
          name="email"
          label="E-mail"
          type="email"
          defaultValue={user ? user.email : ''}
          required
        />
      </div>
      <section className="flex flex-col gap-2">
        <Input
          required
          label="City"
          name="city"
          defaultValue={user ? user.city : ''}
        />
        <Input
          required
          label="Street"
          name="street"
          defaultValue={user ? user.street : ''}
        />
        <Input
          required
          label="Postal Code"
          name="postal-code"
          defaultValue={user ? user['postal-code'] : ''}
        />
        <Input
          required
          label="Adress"
          name="adress"
          textarea
          defaultValue={user ? user.adress : ''}
        />
      </section>

      <menu className="mt-5 text-right">
        <Button textOnly type="submit" onClick={onClose}>
          Go Back to Cart
        </Button>
        <Button className=" bg-yellow-400 ml-5">Order</Button>
      </menu>
    </form>
  );
}
export default SubmitOrder;
