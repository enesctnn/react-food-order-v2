import { useQuery } from '@tanstack/react-query';

import MealItem from './MealItem';
import { fetchFoods } from '../util/http';

export default function foodItems() {
  const { data, isError, error, isPending } = useQuery({
    queryKey: ['foods'],
    queryFn: ({ signal }) => fetchFoods({ signal }),
  });

  return (
    <main className="animate-fade-in-slide-up px-10">
      <ul className="grid grid-cols-auto gap-4 max-w-6xl mx-auto">
        {isPending && <h2>Loading . . .</h2>}
        {data && data.map((food) => <MealItem key={food.id} food={food} />)}
      </ul>
    </main>
  );
}
