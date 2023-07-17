import PropTypes from "prop-types";

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
    return (
      <li FriendItem key={id}>
        <span status={isOnline}></span>
        <img src={avatar} alt={name} width="48" />
        <p>{name}</p>
      </li>
    );
  };
FriendListItem.propTypes = {
    id: PropTypes.string,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };


export default FriendListItem;
