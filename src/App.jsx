import { UserProfile } from "./components/UserProfile";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    age: 28,
    address: {
      street: "123 Main St",
      city: "Springfield",
      state: "IL",
      zip: "62704",
    },
    phone: "555-1234",
    profilePicture: "https://example.com/profiles/john_doe.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    age: 34,
    address: {
      street: "456 Oak St",
      city: "Metropolis",
      state: "NY",
      zip: "10001",
    },
    phone: "555-5678",
    profilePicture: "https://example.com/profiles/jane_smith.jpg",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    age: 23,
    address: {
      street: "789 Pine St",
      city: "Gotham",
      state: "CA",
      zip: "90001",
    },
    phone: "555-8765",
    profilePicture: "https://example.com/profiles/alice_johnson.jpg",
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bob.brown@example.com",
    age: 45,
    address: {
      street: "101 Maple St",
      city: "Star City",
      state: "WA",
      zip: "98001",
    },
    phone: "555-4321",
    profilePicture: "https://example.com/profiles/bob_brown.jpg",
  },
  {
    id: 5,
    name: "Carol White",
    email: "carol.white@example.com",
    age: 29,
    address: {
      street: "202 Birch St",
      city: "Central City",
      state: "TX",
      zip: "73301",
    },
    phone: "555-6789",
    profilePicture: "https://example.com/profiles/carol_white.jpg",
  },
];

const App = () => {
  return (
    <div>
      {users.map((user) => {
        return <UserProfile user={user} key={user.id} />;
      })}
    </div>
  );
};

export default App;
