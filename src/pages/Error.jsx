import { Link, useRouteError } from 'react-router-dom';
import Header from '../components/Header';
import { IoFastFoodOutline } from 'react-icons/io5';

export default function ErrorPage() {
  const error = useRouteError();

  let title = 'An error occured!';
  let messageElement = (
    <p className="font-medium text-2xl">
      {error.message || ' Unexpected error occured!!'}
    </p>
  );

  return (
    <>
      <Header />
      <main
        className="flex flex-row justify-between items-center text-red-800 bg-red-300
    py-8 px-10  w-max max-w-[700px] rounded-lg mx-auto mt-52 animate-fade-in-slide-up"
      >
        <div className="flex flex-col w-10/12 gap-4">
          <h1 className="text-red-800">{title}</h1>
          <p>{messageElement}</p>
        </div>
        <div className="text-right relative text-yellow-300 hover:text-yellow-900 group">
          <Link to="/">
            <IoFastFoodOutline
              size={40}
              className="hover:scale-125 active:scale-150 duration-100"
            />
            <div className="scale-0 absolute -left-3 -bottom-8 font-bold text-yellow-900 whitespace-nowrap group-hover:scale-100 duration-100">
              Go Home
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}
