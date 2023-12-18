import { cartActions } from '../store/cartSlice';
import Button from './UI/Button';
import { useDispatch } from 'react-redux';

export default function MealItem({ food }) {
  const dispatch = useDispatch();
  function handleAddItem(item) {
    dispatch(cartActions.addToCart({ item }));
  }
  return (
    <li className="text-white rounded-2xl overflow-hidden shadow-lg text-center bg-[#1d1a16]">
      {food.name}
      <article className="h-full flex flex-col justify-between items-center">
        <img
          src={`http://localhost:3000/${food.image}`}
          className="object-cover w-full h-80"
          alt={food.name}
        />
        <h3 className="font-bold text-2xl m-3">{food.name}</h3>
        <div className="bg-yellow-300 bg-opacity-20 text-lg text-yellow-400 font-bold py-1 px-5 rounded-md">
          ${food.price}
        </div>
        <p className="m-4 font-medium text-lg">{food.description}</p>
        <div className="mb-10 rounded-md overflow-hidden">
          <Button
            key={food.id}
            onClick={() => handleAddItem(food)}
            className="bg-yellow-500"
          >
            Add to Cart
          </Button>
        </div>
      </article>
    </li>
  );
}
