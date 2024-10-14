import { useState } from "react";
import Friendslist from "./Friendslist";
import FormAddFriend from "./Form";
import FormSplitBill from "./Form2";
function App() {
  const [initialFriends, setInitialFriends] = useState([
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ]);

  const [show, setShow] = useState(false);
  const [showSplit, setShowSplit] = useState(false);
  const [friendId, setFriendId] = useState();

  function click (){
    setShow(!show);
  }

  function addFriend(friend){
    setInitialFriends([...initialFriends, friend]);
    setShow(false);
  }

  const showSplitBill =(id)=> {
    if(id === friendId){
      setShowSplit(false);
      setFriendId(null);
      return;
    }
    setShowSplit(true);
    setFriendId(id);
    setShow(false);
  }

 const handleSplitBill = (value) =>{
  setInitialFriends(initialFriends.map(friend=>{
    if(friend.id === friendId){
      return {...friend, balance: friend.balance+value};
    }
    return friend;
  }))
  setShowSplit(false);
  setFriendId(null);
  setShow(false);

 }
  return (
    <div className="app">
      <div className="sidebar">
        <Friendslist initialFriends={initialFriends} showSplitBill={showSplitBill} friendId={friendId}/>
        {show && <FormAddFriend addFriend={addFriend} />}
        {!show? <button className="button" onClick={click}>Add Friend</button>: <button className="button" onClick={click}>close</button>}
      </div>
      <FormSplitBill showSplit={showSplit} initialFriends={initialFriends} friendId={friendId} handleSplitBill={handleSplitBill} />
    </div>
  );
}

export default App;
