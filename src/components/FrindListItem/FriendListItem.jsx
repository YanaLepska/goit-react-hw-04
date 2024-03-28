import css from "./FrindListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const status = isOnline;

  return (
    <div className={css.listItem}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>
        <b>{name}</b>
      </p>
      <p
        className={clsx(css.offline, {
          [css.online]: isOnline,
        })}
      >
        {status ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
