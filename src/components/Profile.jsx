
import PropTypes from 'prop-types';
import { DivContenedor, DivDescription, ListStats, StatsLi } from "./Profile.styled"

const Profile = ({ username, tag, location, avatar, stats }) => (
     <DivContenedor className="profile">
      <DivDescription className="description">
        <img
          src={avatar}
          alt="User avatar"
          className="avatar"
        />
        <h2 className="name">{username}</h2>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </DivDescription>

      <ListStats className="stats">
        <StatsLi>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </StatsLi>
        <StatsLi>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </StatsLi>
        <StatsLi>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </StatsLi>
      </ListStats>
    </DivContenedor>

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
