import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { useSpring } from "react-spring";

const Design1 = () => {
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = event => {
    event.preventDefault();
    if (user.some(u => u.username === username && u.password === password)) {
      setLogin(!isLogin);
      setError("");
    } else {
      setError("Username or Password is invalid");
    }
  };
  const [username, setName] = useState("");
  const [password, setPass] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setLogin] = useState(false);

  const handleReset = () => {
    setLogin(!isLogin);
    setName("");
    setPass("");
  };

  return (
    <>
      <pre>{JSON.stringify(user, undefined, 4)}</pre>

      <div className='hello-user'>
        <h2>
          Hello&nbsp;
          <span>{isLogin === true ? username : "Visitor"}</span>
        </h2>
      </div>

      <div className='error'>{error}</div>

      {isLogin ? (
        <div className='f-group'>
          <button
            type='reset'
            className='f-control btn'
            onClick={() => handleReset()}
          >
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='f-group'>
            <input
              type='text'
              name='username'
              value={username}
              onChange={e => setName(e.target.value)}
              className='f-control'
            />
          </div>
          <div className='f-group'>
            <input
              type='text'
              name='password'
              value={password}
              onChange={e => setPass(e.target.value)}
              className='f-control'
            />
          </div>
          <div className='f-group'>
            <button className='f-control btn'>Login</button>
          </div>
        </form>
      )}
    </>
  );
};

export default Design1;
