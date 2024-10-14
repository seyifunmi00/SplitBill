/* eslint-disable react/prop-types */
import { useState } from "react";

function FormSplitBill({
  showSplit,
  initialFriends,
  friendId,
  handleSplitBill,
}) {
  const [totalBill, setTotalBill] = useState();
  const [onesBill, setOnesBill] = useState();
  const [whoIsPaying, setWhoIsPaying] = useState("User");

  const people = initialFriends;
  const idFriends = friendId;


  // eslint-disable-next-line no-unused-vars
  const payingFriend = (idFriends) => {
    const person = people.find((person) => person.id === friendId);

    return person ? person.name : "Person not found";
  };

  const handleTotalBill = (e) => {
    setTotalBill(Number(e.target.value));
  };
  const handleOnesBill = (e) => {
    if (e.target.value > totalBill) {
      return onesBill;
    } else {
      setOnesBill(Number(e.target.value));
    }
  };

  const calculateSplit = totalBill - onesBill;

  const paying = (e) => {
    setWhoIsPaying(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!totalBill || !onesBill) {
      return;
    }
    handleSplitBill(whoIsPaying === "User" ? calculateSplit : -onesBill);
  };

  const showSplitBill = showSplit;

  return (
    showSplitBill && (
      <form action="" className="form-split-bill" onSubmit={handleSubmit}>
        <h2>Split a bill with {payingFriend(idFriends)}</h2>

        <label>💰 Bill value</label>
        <input type="text" value={totalBill} onChange={handleTotalBill} />

        <label>💵 Your Expenses</label>
        <input type="text" value={onesBill} onChange={handleOnesBill} />

        <label>💳 {payingFriend(idFriends)}&apos;s expense</label>
        <input
          type="text"
          disabled
          value={isNaN(calculateSplit) ? "" : calculateSplit}
        />

        <label>Who is paying the bill</label>
        <select value={whoIsPaying} onChange={paying}>
          <option value="User">You</option>
          <option value="Friend">{payingFriend(idFriends)}</option>
        </select>

        <button className="button">Split bill</button>
      </form>
    )
  );
}

export default FormSplitBill;
