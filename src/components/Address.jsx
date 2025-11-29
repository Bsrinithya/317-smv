import React, { useState } from "react";
import "./Address.css";

const Address = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    house: "",
    street: "",
    city: "",
    state: "",
    pincode: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Address Saved Successfully!");
    console.log("Saved Address:", formData);
  };

  return (
    <div className="address-container">
      <h2 className="address-title">Add Delivery Address</h2>

      <form className="address-form" onSubmit={handleSubmit}>
        
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="house"
          placeholder="House / Flat / Door No."
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="street"
          placeholder="Street / Area"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="state"
          placeholder="State"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="pincode"
          placeholder="Pincode"
          onChange={handleChange}
          required
        />

        <button type="submit" className="save-btn">Save Address</button>
      </form>
    </div>
  );
};

export default Address;
