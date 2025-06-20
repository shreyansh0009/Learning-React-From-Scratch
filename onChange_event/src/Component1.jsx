import React, { useState } from "react";

// onChange: it is generally used in forms, input, select, radio etc. where the real time data updation required on change of any element.

function Component1() {
  const [name, setname] = useState("Guest");
  const [comment, setcomment] = useState("");
  const [payment, setpayment] = useState("");
  const [deliveryMethod, setdeliveryMethod] = useState("Delivery");

  const handleChange = (e) => {
    setname(e.target.value);
  };

  const handleComment = (e) => {
    setcomment(e.target.value);
  };

  const handlePayment = (e) => {
    setpayment(e.target.value);
  };

  const handleDelivery = (e) => {
    setdeliveryMethod(e.target.value);
  };

  return (
    <div>
      <label htmlFor="label">Enter your name: </label>
      <input type="text" value={name} onChange={handleChange} />
      <h5>Your name is: {name}</h5>

      <textarea
        placeholder="Enter instruction"
        value={comment}
        onChange={handleComment}
      />
      <h5>Comment: {comment}</h5>

      <select value={payment} onChange={handlePayment}>
        <option value="">Select Payment</option>
        <option value="UPI">UPI</option>
        <option value="Credit Card">Credit Card</option>
        <option value="Debit Card">Debit Card</option>
        <option value="Net Banking">Net Banking</option>
      </select>
      <h5>Selected Pyament Method: {payment}</h5>

      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={deliveryMethod === "Pick Up"}
          onChange={handleDelivery}
        />
        Pick Up
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="delivery"
          checked={deliveryMethod === "delivery"}
          onChange={handleDelivery}
        />
        Delivery
      </label>
      <h5>Delivery Method: {deliveryMethod}</h5>
    </div>
  );
}

export default Component1;
