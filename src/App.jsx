const isAuthenticated = false;

const App = () => {
  if (isAuthenticated) {
    return <div>Hello World!</div>;
  }
  return <div>You are not logged in</div>;
};

export default App;
