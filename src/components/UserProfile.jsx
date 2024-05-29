import PropTypes from "prop-types";

export const UserProfile = ({ user }) => {
  return (
    <div>
      <b>ID:</b>
      <span>{user.id}</span>
      <br />
      <b>Username: </b>
      <span>{user.name}</span>
      <br />
      <b>Email: </b>
      <span>{user.email}</span>
      <br />
      <br />
    </div>
  );
};

UserProfile.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.email,
  }),
};
