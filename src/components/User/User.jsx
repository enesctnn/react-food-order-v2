import { useMutation } from '@tanstack/react-query';
import { useRef, useState } from 'react';

import { deleteUser, queryClient, updateUserData } from '../../util/http';

import { FaCheck } from 'react-icons/fa';
import { MdModeEditOutline } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';

function User({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const userNameRef = useRef();
  const userEmailRef = useRef();
  const userPasswordRef = useRef();
  const userRoleRef = useRef();

  const { mutate: deleteUserFn } = useMutation({
    mutationFn: deleteUser,
    onSuccess: async () => {
      window.alert('User succesfully deleted');
      await queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const { mutate: updateUser, isPending } = useMutation({
    mutationFn: updateUserData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  function updateUserHandler(id) {
    const userData = {
      'user-name': userNameRef.current.value,
      email: userEmailRef.current.value,
      password: userPasswordRef.current.value,
      role: userRoleRef.current.value.toUpperCase(),
    };

    updateUser({ userData, id });

    setIsEditing(false);
  }

  function deleteUserHandler() {
    const isConfirm = window.confirm(
      'This proccess can not be undone are you sure you want to delete the user'
    );
    if (isConfirm) {
      deleteUserFn({ id: user.id });
    }
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
    <td className="flex gap-6 text-red-600 ">
      <button
        onClick={() => setIsEditing(true)}
        className="hover:drop-shadow-md"
      >
        <MdModeEditOutline />
      </button>
      <button className="hover:drop-shadow-md" onClick={deleteUserHandler}>
        <FaTrashAlt />
      </button>
    </td>
  );

  if (isEditing) {
    content = (
      <>
        <td>
          <input
            ref={userNameRef}
            className="max-w-[8rem] pl-1 rounded-sm"
            defaultValue={user['user-name']}
          />
        </td>
        <td>
          <input
            ref={userEmailRef}
            className="max-w-[17rem] pl-1 rounded-sm"
            defaultValue={user['email']}
          />
        </td>
        <td>
          <select
            ref={userRoleRef}
            required
            name="user-role"
            id="user-role"
            className="bg-slate-800 py-1 pl-2 rounded-sm text-center"
            defaultValue={user.role.toLowerCase()}
          >
            <option value="role_admin">ROLE_ADMIN</option>
            <option value="role_employee">ROLE_EMPLOYEE</option>
            <option value="role_user">ROLE_USER</option>
          </select>
        </td>
        <td className="flex justify-center ">
          <input
            ref={userPasswordRef}
            className="w-20 text-center"
            defaultValue={user['password']}
          />
        </td>
      </>
    );
    actions = (
      <td>
        <button
          id={user.id}
          onClick={() => updateUserHandler(user.id)}
          className="text-green-500 hover:drop-shadow-lg"
        >
          <FaCheck />
        </button>
      </td>
    );
  }

  if (isPending) {
    return (
      <td>
        <h2 className="text-center">Submitting . . .</h2>
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
