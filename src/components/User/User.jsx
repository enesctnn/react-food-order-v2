import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import { updateUserData } from '../../util/http';

import { FaCheck } from 'react-icons/fa';
import { MdModeEditOutline } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';
import Input from '../UI/Input';

function User({ user }) {
  const [isEditing, setIsEditing] = useState(false);

  const { mutate } = useMutation({
    mutationFn: updateUserData,
  });

  function updateUserHandler(userData, id) {
    const isConfirm = window.confirm(
      'This proccess can not be undone are you sure you want to update the user'
    );
    if (isConfirm) {
      mutate({ userData, id });
    }
    setIsEditing(false);
  }

  let content = (
    <>
      <td className="capitalize">{user['user-name']}</td>
      <td>{user['email']}</td>
      <td>{user['role']}</td>
      <td className="text-center">{user['password']}</td>
    </>
  );
  let actions = (
    <td className="flex gap-6 text-red-600">
      <button onClick={() => setIsEditing(true)}>
        <MdModeEditOutline />
      </button>
      <button>
        <FaTrashAlt />
      </button>
    </td>
  );

  if (isEditing) {
    content = (
      <>
        <td>
          <Input
            className="max-w-[8rem]"
            required
            defaultValue={user['user-name']}
          />
        </td>
        <td>
          <Input
            className="max-w-[17rem]"
            required
            defaultValue={user['email']}
          />
        </td>
        <td className="text-center">
          <select
            name="user-role"
            id="user-role"
            className="bg-slate-800 px-1 rounded-sm"
          >
            <option value="role_employee">ROLE_EMPLOYEE</option>
            <option value="role_user">ROLE_USER</option>
            <option value={user.role.toLowerCase()} selected>
              {user.role}
            </option>
          </select>
        </td>
        <td className="flex justify-center">
          <Input className="w-20" required defaultValue={user['password']} />
        </td>
      </>
    );
    actions = (
      <td>
        <button id={user.id} onClick={() => updateUserHandler(user, user.id)}>
          <FaCheck />
        </button>
      </td>
    );
  }
  return (
    <tr className="text-start text-2xl text-black font-bold">
      {content}
      {actions}
    </tr>
  );
}

export default User;
