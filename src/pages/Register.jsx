import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [values, setValues] = useState({});
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
      // console.log({ [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post("http://94.74.86.174:8080/register", values)
        .then((res) => navigate("/login"))
        .catch((err) => {
          alert("something wrong!");
          // navigate("/login");
        });
    };
  
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-4-desktop">
                    <form onSubmit={handleSubmit} className="box">
                    <h1>Register</h1>
                        <div className="field mt-5">
                            <label className="label">Name</label>
                            <div className="controls">
                                <input  id="username"  name="username" type="name" className="input" placeholder="Name" onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <label className="label">Email</label>
                            <div className="controls">
                                <input id="email" name="email" type="email" className="input" placeholder="Email" onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <label className="label">Password</label>
                            <div className="controls">
                                <input name="password" type="password" className="input" placeholder="*****" onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <button className="button is-success is-fullwidth">Register</button>
                        </div>
                    </form>
                </div>
            </div>  
        </div>
      </div>
    </section>
  )
}

export default Register