/* eslint-disable react/prop-types */
import Friend from "./friend";


function Friendslist({ initialFriends, showSplitBill, friendId}) {
  return (
    <ul>
      {initialFriends.map((friend) => (
        <Friend friend={friend} key={friend.id} showSplitBill={showSplitBill} friendId={friendId}/>
      ))}
    </ul>
  );
}



export default Friendslist;
