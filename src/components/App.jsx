import React from 'react';

import user from "../json/user.json";
import Profile from "./Profile";

import Statistics from './Statistics';
import data from '../json/data.json';

import TransactionHistory from './TransactionHistory';
import transactions from '../json/transactions.json';

import friends from "../json/friends.json";
import FriendList from './FriendList';



function App() {
  return (
    <div>
      <div>
      <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
      />
      </div>

      <Statistics title="upload stats" stats={data} />
      <TransactionHistory items={transactions} />
      <FriendList friends={friends} />

    </div>
  );
};

export default App;
