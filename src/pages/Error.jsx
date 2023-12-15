import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  let title = 'An error occured!';
  let messageElement = (
    <p className="font-medium text-2xl">
      {error.message || ' Unexpected error occured!!'}
    </p>
  );

  return (
    <main
      className="flex flex-col text-red-800 bg-red-300
    py-8 pl-10 pr-52 w-max rounded-lg mx-auto mt-52 animate-fade-in-slide-up"
    >
      <h1 className="text-red-800">{title}</h1>
      {messageElement}
    </main>
  );
}
