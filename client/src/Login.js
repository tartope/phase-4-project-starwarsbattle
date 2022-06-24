import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import "./Login.css"

function Login({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <wrapper className= "login">
      <div className= "login"> 
      {/* <div className="empty" > 

      </div>   */}
      {showLogin ? (
        <>
          <LoginForm setUser={setUser} />
          <divider />
          <p>
            Don't have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm setUser={setUser} />
          <divider />
          <p>
            Already have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
      </div>
    </wrapper>
  );
}


export default Login;