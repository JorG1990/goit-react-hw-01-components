import React from 'react';

import user from "../json/user.json";
import Profile from "./Profile";

import Statistics from './Statistics';
import data from '../json/data.json';

import TransactionHistory from './TransactionHistory';
import transactions from '../json/transactions.json';

import friends from "../json/friends.json";
import FriendList from './FriendList';



function App({ username, tag, location, avatar, stats }) {
  return (
    <div style={{
      width: "1200px",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    }}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        width: "470px",
        height: "720px",
	      background:"#1ca78c",
	      boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2)",
        borderRadius: "0px 0px 4px 4px",
        marginTop: "30px",
        marginBottom: "30px",
        // marginLeft: "400px",
      }}>
      <Profile style={{
        display: "flex",
        justifyContent: "center",
        with: "470px",
      }}
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
