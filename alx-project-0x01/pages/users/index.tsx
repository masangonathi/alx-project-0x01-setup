import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserData } from "@/interfaces";
import { useState } from "react";

interface UsersPageProps {
  users: UserData[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [userList, setUserList] = useState<UserData[]>(users);

  const handleAddUser = (newUser: UserData) => {
    const updatedUser = { ...newUser, id: userList.length + 1 };
    setUserList((prevUsers) => [...prevUsers, updatedUser]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {userList.map(({ id, name, email, username }, key) => (
            <div key={key} className="p-4 border rounded-lg">
              <h2 className="text-lg font-semibold">{name}</h2>
              <p>{username}</p>
              <p>{email}</p>
            </div>
          ))}
        </div>
      </main>

      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
