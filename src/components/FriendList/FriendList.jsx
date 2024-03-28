import css from "./FriendList.module.css";
import FriendListItem from "../FrindListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {Array.isArray(friends) &&
        friends.map((friend) => (
          <li key={friend.id}>
            <FriendListItem {...friend} />
          </li>
        ))}
    </ul>
  );
};

export default FriendList;
