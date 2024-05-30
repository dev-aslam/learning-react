import { Form } from "./Form";

const App = () => {
  window.addEventListener("resize", () => {
    console.log(window.innerHeight, window.innerWidth);
  });
  return <Form />;
};
export default App;
