import PropTypes from "prop-types";

import { UserRandom } from "./UserRandom";
import { UserName } from "./UserName";

const UserProfile = () => {
  const callme = () => {
    console.log("hello");
  };

  return (
    <div>
      <UserName
        username="bob"
        age={20}
        isLoggedIn={true}
        array={["helo", "world"]}
        callme={callme}
      />
      <div>
        <span>email: </span>
        <span>john@example.com</span>
      </div>
      <UserRandom />
    </div>
  );
};
export default UserProfile;
