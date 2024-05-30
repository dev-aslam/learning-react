const isAuthenticated = false;

const App = () => {
  return isAuthenticated ? (
    <div>Hello World</div>
  ) : (
    <div>You are not logged in</div>
  );
};
export default App;
