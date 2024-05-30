import { useState } from "react";

export function RegisterForm() {
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [displayName, setDisplayName] = useState("");

  const [FormField, setFormField] = useState({
    username: "",
    password: "",
    displayName: "",
  });
  // instead of using multiple useState statement we can usse a single and pass an object with the initial values of the variables, and here we can use FormField.username etc to access each varible

  const isDisabled =
    !FormField.username || !FormField.password || !FormField.displayName;

  return (
    <div>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <br />
          <input
            type="text"
            id="username"
            value={FormField.username}
            onChange={(e) => {
              setFormField((curValue) => ({
                ...curValue,
                username: e.target.value,
              }));
            }}
          />
          <br />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            value={FormField.password}
            onChange={(e) => {
              setFormField((curValue) => ({
                ...curValue,
                password: e.target.value,
              }));
            }}
          />
          <br />
        </div>
        <div>
          <label htmlFor="displayName">Name</label>
          <br />
          <input
            type="text"
            id="displayName"
            value={FormField.displayName}
            onChange={(e) => {
              setFormField((curValue) => ({
                ...curValue,
                displayName: e.target.value,
              }));
            }}
          />
          <br />
        </div>
        <div>
          <button disabled={isDisabled}>Submit</button>
        </div>
        <br />
      </form>
      <div>
        <span>Username: </span>
        <span>{FormField.username}</span>
      </div>
      <div>
        <span>Password: </span>
        <span>{FormField.password}</span>
      </div>
      <div>
        <span>Name: </span>
        <span>{FormField.displayName}</span>
      </div>
    </div>
  );
}
