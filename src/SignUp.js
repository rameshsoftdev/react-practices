import React, { useState, useEffect } from 'react';
const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const formHandler = (e) => {
    let userInfo = { name, email, phone };
    console.log(userInfo);
    e.preventDefault();
  };
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={formHandler}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          value={phone}
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
export default SignUp;
