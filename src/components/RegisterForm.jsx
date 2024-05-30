import { useState } from "react";

export function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const isDisabled = !username || !password || !displayName;

  return (
    <div>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <br />
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
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
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
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
            value={displayName}
            onChange={(e) => {
              setDisplayName(e.target.value);
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
        <span>{username}</span>
      </div>
      <div>
        <span>Password: </span>
        <span>{password}</span>
      </div>
      <div>
        <span>Name: </span>
        <span>{displayName}</span>
      </div>
    </div>
  );
}
