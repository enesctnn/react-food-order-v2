import { Link, NavLink, useRouteLoaderData, useSubmit } from 'react-router-dom';
import Button from './UI/Button';
import headerImg from '/logo.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../store/uiSlice';
import Cart from './Cart';
import { BiLogOutCircle } from 'react-icons/bi';

export default function Header() {
  const dispatch = useDispatch();
  const submit = useSubmit();

  let isLoggedIn = useRouteLoaderData('root');

  const handleActiveLink = ({ isActive }) =>
    isActive ? 'underline decoration-2' : '';

  function handleLogout() {
    submit(null, { method: 'POST', action: '/logout' });
  }

  const { cart } = useSelector((state) => state.cart);

  const cartQuantity = cart.reduce(
    (totalQuantity, item) => (totalQuantity += item.quantity),
    0
  );

  return (
    <>
      <Cart cartQuantity={cartQuantity} />
      <header className="h-50 w-screen sm:px-24 py-16 flex flex-row justify-between items-center text-yellow-500 select-none">
        <div className="flex flex-row h-10 items-center gap-4">
          <img
            src={headerImg}
            alt="restaurant logo"
            className="h-full rounded-3xl outline outline-2 outline-yellow-500 "
          />
          <h1
            htmlFor="restaurant name"
            className="uppercase font-medium text-3xl"
          >
            <Link to="/">ReactFood</Link>
          </h1>
        </div>
        <nav className="flex flex-row gap-4 items-end whitespace-nowrap">
          {!isLoggedIn && (
            <NavLink to="/login" className={handleActiveLink}>
              Login
            </NavLink>
          )}
          {isLoggedIn && (
            <div className="absolute top-8 right-8 group">
              <button onClick={handleLogout}>
                <BiLogOutCircle size={26} />
              </button>
              <div className="scale-0 group-hover:scale-100 text-gray-600 absolute -left-4 font-bold duration-100">
                Logout
              </div>
            </div>
          )}
          <NavLink to="/foods" className={handleActiveLink}>
            FOODS
          </NavLink>
          <Button textOnly onClick={() => dispatch(uiActions.openModal())}>
            Cart ({cartQuantity})
          </Button>
        </nav>
      </header>
    </>
  );
}
