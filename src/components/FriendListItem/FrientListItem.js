import PropTypes from 'prop-types';
import css from './FrientListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
    return (
      <li className={css.item}>
        <span className={css[isOnline]}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;
