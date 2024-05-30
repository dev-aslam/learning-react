const App = () => {
  const account_Status = "verified";
  // verified, not-verified, disabled

  switch (account_Status) {
    case "verified":
      return <div>Hello</div>;
    case "not-verified":
      return <div>Not verified</div>;
    case "disabled":
      return <div>disabled</div>;
    default:
      return <div>status not set</div>;
  }

  // if (account_Status == "Verified") {
  //   return <div>Hello</div>;
  // } else if (account_Status == "not-verified") {
  //   return <div>Not verified</div>;
  // } else if (account_Status == "disabled") {
  //   return <div>disabled</div>;
  // } else {
  //   return <div>status not set</div>;
  // }
};
export default App;
