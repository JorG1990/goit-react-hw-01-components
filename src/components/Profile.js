
import PropTypes from 'prop-types';

const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className="profile">
    <div className="description">
      <img
        src={avatar}
        alt="User avatar"
        className="avatar"
      />
      <h2 className="name" style={{
        display: "flex",
        justifyContent:"center",
      }}
      >{username}</h2>
      <p className="tag" style={{
        display: "flex",
        justifyContent:"center",
      }}>{tag}</p>
      <p className="location" style={{
        display: "flex",
        justifyContent:"center",
      }}>{location}</p>
    </div>

    <ul className="stats" style={{
        display: "flex",
        justifyContent:"center",
        }}>
      <li style={{
        display: "flex",
        flexDirection: "column",
        marginRight: "20px",
        border: "2px black",
        }}>
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li style={{
        display: "flex",
        flexDirection: "column",
        marginRight: "20px",
        }}>
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li style={{
        display: "flex",
        flexDirection: "column",
        }}>
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
