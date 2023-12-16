import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import { useMutation } from '@tanstack/react-query';
import { userLogin } from '../util/http';
import { uiActions } from '../store/uiSlice';
import { useDispatch } from 'react-redux';

export default function LoginPage() {
  const dispatch = useDispatch();

  const { mutate, isError, error } = useMutation({
    mutationFn: userLogin,
    onMutate: (data) => {
      dispatch(uiActions.setUser({ user: data }));
    },
    onError: (error, data, context) => {
      dispatch(uiActions.setUser({ user: {} }));
    },
  });

  async function handleSubmition(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const inputObject = Object.fromEntries(formData);

    mutate({ ...inputObject });
  }
  if (isError) {
    throw new Error(error.message);
  }

  return (
    <form
      onSubmit={handleSubmition}
      className="flex flex-col justify-center items-center animate-fade-in-slide-up"
    >
      <div className="flex flex-col gap-5 py-3 px-8 shadow-lg shadow-stone-700">
        <Input name="email" label="E-mail" type="email" required />
        <Input name="password" label="Password" type="password" required />
        <div className="text-right">
          <Link to="/sign-up" className="font-bold text-xl">
            Sign Up
          </Link>
          <Button className=" ml-5 text-xl">Login</Button>
        </div>
      </div>
    </form>
  );
}
