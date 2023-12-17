import { useMutation } from '@tanstack/react-query';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';

export default function SignUpPage() {
  function submitionHandler(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const formData = Object.fromEntries(fd);

    console.log(formData);
  }

  return (
    <form
      onSubmit={submitionHandler}
      className="min-w-max flex justify-center items-center animate-fade-slide-in-from-right"
    >
      <div className="w-80 flex flex-col gap-5 items-center shadow-md shadow-emerald-600 px-20 py-10 rounded-md min-w-max">
        <h2>User Info</h2>
        <Input label="User Name" name="user-name" />
        <Input label="Email" name="email" type="email" />
        <Input label="Password" name="password" type="password" />
        <h2>Adress</h2>
        <div className="w-72 grid grid-cols-2 gap-4 justify-center">
          <Input label="City" name="city" />
          <Input label="Street" name="street" />
          <Input label="Postal Code" name="postal-code" />
          <Input label="Adress" name="adress" textarea />
        </div>
        <menu className="flex gap-4">
          <Button
            type="reset"
            className=" text-white bg-red-400 hover:bg-red-600 hover:scale-110 duration-75"
          >
            Reset
          </Button>
          <Button className=" bg-stone-600 hover:bg-stone-400 hover:text-stone-200 duration-150 text-xl font-medium">
            Register
          </Button>
        </menu>
      </div>
    </form>
  );
}
