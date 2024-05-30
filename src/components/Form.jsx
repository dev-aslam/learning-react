export function Form() {
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          const formData = new FormData(event.target);

          const username = formData.get("username");
          const password = formData.get("password");

          fetch("http://localhost:8000/api/login", {
            body: {
              username: { username },
              password: { password },
            },
            method: "POST",
          });
        }}>
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
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
          name="password"
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
