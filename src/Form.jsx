import { useState } from "react";

/* eslint-disable react/prop-types */
function FormAddFriend({ addFriend }) {
  const [friendName, setFriend] = useState("");
  const [url, setUrl] = useState("https://i.pravatar.cc/48");

  const handleFriend = (e) => {
    setFriend(e.target.value);
  };

  const handleUrl = (e) => {
    setUrl(e.target.value);
  };
 

  const handleAddFriend = (e) => {

    e.preventDefault();
    
    if(friendName!== '' && url !== ""){
      const id = Math.floor(Math.random() * 100000000000)
      const target = {
        id: id ,
        name: friendName,
        image: `${url}?${id}`,
        balance: 0,
      };
  
      addFriend(target);
      setFriend("");
      setUrl("https://i.pravatar.cc/48");
    }
  };

  return (
    <form action="" className="form-add-friend" onSubmit={handleAddFriend}>
      <label>Friends Name</label>
      <input type="text" value={friendName} onChange={handleFriend} />

      <label>Image URL</label>
      <input type="text" value={url} onChange={handleUrl} />

      <button className="button" >
        Add
      </button>
    </form>
  );
}

export default FormAddFriend;
