import { Link, useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getUsersData } from '../util/http';
import { MdSubdirectoryArrowRight } from 'react-icons/md';
import Users from '../components/User/Users';

function AdminPage() {
  const isAdmin = useLoaderData();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: getUsersData,
  });

  let content = (
    <>
      {isPending && <h1>User Data is Loading...</h1>}
      {data && <Users users={data} />}
    </>
  );

  if (!isAdmin) {
    content = (
      <div className="flex flex-col items-center gap-10 bg-red-300 rounded-sm p-6">
        <h2 className="text-red-900 text-5xl">Access Denied</h2>
        <Link to="/" className="flex text-2xl font-bold text-red-500">
          <MdSubdirectoryArrowRight />
          Go to Home Page
        </Link>
      </div>
    );
  }

  return <main className="flex justify-center">{content}</main>;
}

export default AdminPage;
