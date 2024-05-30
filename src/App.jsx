const isAuthenticated = true;

const App = () => {
  if (isAuthenticated) {
    return <div>Hello World!</div>;
  } else {
    return <div>You are not logged in</div>;
  }
};

export default App;
