import { useState } from "react";
import { UserDetails } from "./components/UserDetails";

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Aslam",
      email: "muhammedaslam204@gmail.com",
    },
    {
      id: 2,
      name: "Anson",
      email: "anson@gmail.com",
    },
  ]);

  return (
    <div>
      {users.map((user) => {
        return <UserDetails user={user} key={user.id} setUsers={setUsers} />;
      })}
    </div>
  );
};
export default App;
