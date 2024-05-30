export function Form() {
  return (
    <div>
      <form>
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          id="username"
          onChange={(event) => {
            console.log(`Username: ${event.target.value}`);
          }}
        />
        <br />
        <label htmlFor="password">password</label>
        <br />
        <input
          type="password"
          id="password"
          onChange={(event) => {
            console.log(`Password: ${event.target.value}`);
          }}
        />
        <br />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
