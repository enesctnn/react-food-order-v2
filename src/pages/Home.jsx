import { Link, useRouteLoaderData } from 'react-router-dom';
import plateOfFoodImg from '../assets/food-in-plate.png';
import getUserData from '../ui/user-data';

export default function HomePage() {
  const isLoggedIn = useRouteLoaderData('root');
  const user = getUserData();
  const linkStyle = 'mx-1 duration-100 hover:text-yellow-200';
  return (
    <main className="text-center animate-fade-slide-in-from-right flex flex-col h-max gap-5">
      <header className="w-screen h-96 flex flex-col gap-2 mb-10">
        <h1>
          Welcome To React Food Order
          {isLoggedIn ? (
            <span className="uppercase mx-2">{`${user['user-name']}`}</span>
          ) : undefined}
        </h1>
        <img
          src={plateOfFoodImg}
          alt="plate of food"
          className="h-full object-cover"
        />
      </header>
      <article className="text-yellow-300 text-xl">
        {isLoggedIn && <p>Please enjoy ordering meal from react food order.</p>}
        {!isLoggedIn && (
          <p>
            You can Sign-in/up and enjoy ordering your meal or you can order
            <Link to="/foods" className={linkStyle}>
              Food
            </Link>
            without
            <Link to="login" className={linkStyle}>
              Loging
            </Link>
            in.
          </p>
        )}
      </article>
    </main>
  );
}
