import { MdModeEditOutline } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';
export default function User({ user }) {
  return (
    <li className="flex flex-row gap-10 items-start">
      <section className="flex flex-row gap-5 w-96">
        <div>{user['user-name']}</div>
        <div>{user.email}</div>
        <div>{user.role}</div>
        <div>{user.password}</div>
      </section>
      <menu className="flex gap-2">
        <button>
          <MdModeEditOutline size={26} />
        </button>
        <button>
          <FaTrashAlt size={26} />
        </button>
      </menu>
    </li>
  );
}
