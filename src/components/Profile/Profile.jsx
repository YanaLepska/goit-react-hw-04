import css from "./Profile.module.css";
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileCard}>
      <div className={css.profileUser}>
        <img src={image} alt="User avatar" />
        <p className={css.profileName}>
          <b>{name}</b>
        </p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.profileActivity}>
        <li>
          <span>Followers</span>
          <span>
            <b>{stats.followers}</b>
          </span>
        </li>
        <li>
          <span>Views</span>
          <span>
            <b>{stats.views}</b>
          </span>
        </li>
        <li>
          <span>Likes</span>
          <span>
            <b>{stats.likes}</b>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
