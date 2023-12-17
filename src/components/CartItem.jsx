function CartItem({ item, onAdd, onUpdate }) {
  const className =
    'rounded-full bg-amber-950 text-white text-3xl w-8 h-8 hover:bg-amber-900 active:bg-amber-800 active:scale-95 duration-100';

  return (
    <li className="flex flex-row justify-between px-4 whitespace-nowrap text-center">
      <div>
        {item.name} x {item.quantity}
      </div>
      <span className="w-full">${item.price}</span>
      <menu className="flex flex-row gap-2">
        <button className={className} onClick={() => onUpdate(item.id, -1)}>
          -
        </button>
        <button className={className} onClick={() => onAdd(item.id)}>
          +
        </button>
      </menu>
    </li>
  );
}

export default CartItem;
