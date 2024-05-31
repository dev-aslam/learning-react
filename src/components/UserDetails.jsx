import { useState } from "react";

export function UserDetails({ user }) {
  const [isEditing, setEditing] = useState(false);

  return (
    <div>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        {if ({isEditing}) {
            <button
            onClick={() => {
              setEditing((curVal) => !curVal);
            }}>
            Save
          </button>
        }else{
            <button
            onClick={() => {
              setEditing((curVal) => !curVal);
            }}>
            Edit
          </button>
        }}
      </div>
    </div>
  );
}
