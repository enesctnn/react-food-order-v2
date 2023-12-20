import User from './User';

export default function Users({ users }) {
  return (
    <table className="bg-yellow-900 shadow-lg shadow-yellow-700 rounded-sm border-separate border-spacing-7">
      <thead className="text-2xl text-yellow-500">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody className="text-yellow-300">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
}
