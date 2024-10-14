/* eslint-disable react/prop-types */
function Friend({ friend, showSplitBill, friendId}) {
  let tab;
  const isFriend = friend.id=== friendId;

  if(isFriend) {
    tab = "close";
  }
  else{
    tab = "select";
  }

 

 return (
   <li className={ isFriend ? "selected": ""}>
     <img src={friend.image} alt={friend.name} />
     <h2>{friend.name}</h2>
     {friend.balance <0 && <p className="red">You owe {friend.name} ${Math.abs(friend.balance)}</p>}
     {friend.balance >0 && <p className="green">{friend.name} owes you ${Math.abs(friend.balance)}</p>}
     {friend.balance === 0 && <p>You and {friend.name} are even</p>}

     <button className="button" onClick={()=>showSplitBill(friend.id)}>{tab}</button>
   </li>
 );
}

export default Friend;