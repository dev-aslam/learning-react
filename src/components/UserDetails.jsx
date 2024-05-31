import { useState } from "react";
import PropTypes from "prop-types";

export function UserDetails({ user, setUsers }) {
  const [isEditing, setEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  return (
    <div>
      <div>
        <label htmlFor="username">Username:</label>
        {!isEditing ? (
          user.name
        ) : (
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        )}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        {!isEditing ? (
          user.email
        ) : (
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        )}
      </div>
      <div>
        {!isEditing ? (
          <div>
            <button
              onClick={() => {
                setEditing((curVal) => !curVal);
              }}>
              Edit
            </button>
            <button
              onClick={() => {
                setUsers((curState) => {
                  return curState.filter((curUser) => curUser.id != user.id);
                });
              }}>
              Delete
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              setUsers((curUserstate) => {
                return curUserstate.map((curUser) => {
                  if (curUser.id == user.id) {
                    return { ...curUser, name, email };
                  } else return curUser;
                });
              });
              setEditing(false);
            }}>
            Save
          </button>
        )}
      </div>

      <br />
    </div>
  );
}

UserDetails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  setUsers: PropTypes.func.isRequired,
};
