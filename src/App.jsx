import { useState } from "react";
import { UserDetails } from "./components/UserDetails";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [counter, setCounter] = useState(3);

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

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newUser = {
            id: counter,
            name,
            email,
          };
          setCounter((curVal) => curVal + 1);
          setUsers((curUsers) => [...curUsers, newUser]);
        }}>
        <div>
          <label htmlFor="name">name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button>Add User</button>
      </form>
    </div>
  );
};
export default App;
