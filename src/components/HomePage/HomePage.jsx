import React from "react";
import { AiFillLock } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

const HomePage = () => {
  return (
    <div className="connexion">
      <section>
        <div className="form-box">
          <div className="form-value">
            <form action="">
              <h2>Login</h2>
              <div className="inputbox">
                <BsFillPersonFill />
                <input type="text" required />
                <label for="">Utilisateur</label>
              </div>
              <div className="inputbox">
                <AiFillLock />
                <input type="password" required />
                <label for="">Mot de passe</label>
              </div>
              <button>Log In</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
