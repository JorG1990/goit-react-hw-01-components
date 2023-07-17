
import friends from "json/friends.json";
import FriendList from "./FriendListItems";

import user from "../json/user.json";
import Profile from "./Profile";

import TransactionHistory from "./TransactionHistory";
import transactions from "../json/transactions.json";

import Statistics from "./Statistics";
import data from "../json/data.json";

const App = () => (
  <div>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />

    <Statistics title="Upload stats" stats={data} />

    <ul className="friend-list">
      {friends.map((friend) => (
        <FriendList
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>

    <TransactionHistory items={transactions} />
  </div>
);

export default App.styled;
