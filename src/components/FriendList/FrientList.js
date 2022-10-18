import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FrientListItem';
import css from './FrientList.module.css';

function FriendList({ friends }) {
    return (
      <ul className={css.friendList}>
        {friends.map(friend => (
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id}
          />
        ))}
      </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number.isRequired})),
}

export default FriendList;