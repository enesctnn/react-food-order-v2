import { Form, Link, redirect } from 'react-router-dom';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';

import { userLogin } from '../util/http';

export default function LoginPage() {
  // function handleSubmition(event) {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);
  //   const inputObject = Object.fromEntries(formData);
  // }

  return (
    <Form
      className="flex flex-col justify-center items-center animate-fade-in-slide-up"
      method="POST"
    >
      <div className="flex flex-col gap-5 py-3 px-8 shadow-lg shadow-stone-700">
        <Input name="email" label="E-mail" type="email" required />
        <Input name="password" label="Password" type="password" required />
        <div className="flex items-center justify-end gap-2">
          <Link to="/sign-up" className="font-bold text-xl">
            Sign Up
          </Link>
          <Button className="ml-5 text-xl bg-stone-300 hover:bg-stone-400">
            Login
          </Button>
        </div>
      </div>
    </Form>
  );
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const userData = await userLogin({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  localStorage.setItem('USER_DATA', JSON.stringify(userData));

  return redirect('/foods');
}
