import PropTypes from 'prop-types';
import Profile from './Profail/userProp'
import Statistic from './statistic/statistic';
import FriendList from './FriendList/FrientList';
import TransactionHistory from './TransactionHistory/TransactionHistori';
import transaction from '../date/transactions.json';
import friends from '../date/friends.json';
import arr from '../date/data.json';
import user from '../date/user.json';

export const App = () => {
  return (
    <div>
      
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
      <Statistic title='Upload stats' stats={arr} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transaction}/>
   </div>    
  );
};

Profile.propTypes = {
   username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }),
}
