import PropTypes from "prop-types";
import "./styles.css";

export function UserName(props) {
  console.log(props);
  props.callme();
  return (
    <div className="userName">
      <div>
        <span>Username:</span>
        <span>{props.username}</span>
      </div>
      <div>
        <b>Age:</b>
        <span>{props.age}</span>
      </div>
    </div>
  );
}

UserName.propTypes = {
  username: PropTypes.string.isRequired,
  age: PropTypes.number,
  callme: PropTypes.func,
};
