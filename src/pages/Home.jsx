import { Link } from 'react-router-dom';
import plateOfFoodImg from '../assets/food-in-plate.png';

export default function HomePage() {
  return (
    <main className="text-center animate-fade-slide-in-from-right flex flex-col h-max gap-5">
      <header className="w-screen h-96 flex flex-col gap-2">
        <h1>Welcome To React Food Order</h1>
        <img
          src={plateOfFoodImg}
          alt="plate of food"
          className="h-full object-cover"
        />
      </header>
      <article className="text-yellow-300 text-xl">
        <p>Please enjoy ordering meal from react food order.</p>
        <p>
          You can Sign-in/up and enjoy ordering your meal or you can order 
          <Link to="/foods"> Food </Link> 
          without <Link to="sign-in"> signing in</Link>.
        </p>
      </article>
    </main>
  );
}
