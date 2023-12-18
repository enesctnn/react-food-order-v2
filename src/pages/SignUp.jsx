import { useMutation } from '@tanstack/react-query';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import { signUpUser } from '../util/http';
import { useNavigate } from 'react-router-dom';

export default function SignUpPage() {
  const navigate = useNavigate();
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: signUpUser,
    onSuccess: () => {
      window.alert('User succesfully registered!!');
      navigate('/foods');
    },
  });

  function submitionHandler(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const formData = Object.fromEntries(fd);
    mutate({ user: { ...formData }, id: Date.now() });
  }
  if (isError) {
    throw new Error(error);
  }

  return (
    <form
      onSubmit={submitionHandler}
      className="min-w-max flex justify-center items-center animate-fade-slide-in-from-right"
    >
      <div className="w-80 flex flex-col gap-5 items-center shadow-md shadow-emerald-600 px-20 py-10 rounded-md min-w-max">
        <h1>User Info</h1>
        <Input required label="User Name" name="user-name" />
        <Input required label="Email" name="email" type="email" />
        <Input required label="Password" name="password" type="password" />
        <h2>Adress</h2>
        <div className="w-72 grid grid-cols-2 gap-4 justify-center">
          <Input required label="City" name="city" />
          <Input required label="Street" name="street" />
          <Input required label="Postal Code" name="postal-code" />
          <Input required label="Adress" name="adress" textarea />
        </div>
        <menu className="flex gap-4">
          {!isPending && (
            <Button
              type="reset"
              className=" text-white bg-red-700 hover:bg-red-600 duration-75"
            >
              Reset
            </Button>
          )}
          <Button className="bg-stone-600 hover:bg-stone-400 hover:text-stone-200 hover:scale-110 duration-150 text-xl font-medium">
            {isPending ? 'Submitting...' : 'Register'}
          </Button>
        </menu>
      </div>
    </form>
  );
}
