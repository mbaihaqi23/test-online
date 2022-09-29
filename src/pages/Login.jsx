import axios from "axios";
import React from "react";
import  { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [values, setValues] = useState({});
    const [cookies, setCookies] = useCookies(["accessToken"])
    const navigate = useNavigate()

    useEffect(() => {
        if (cookies.accessToken) {
          return navigate("/dashboard");
        }
      });

    const handleOnChange = (e) => {
        setValues({...values, [e.target.type]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .post("https://binar-blog-app.herokuapp.com/login", values)
          .then((res) => {
            const { accessToken, id, email } = res.data;
            setCookies("accessToken", accessToken, { maxAge: 3600 });
            setCookies("userId", id, { maxAge: 3600 });
            setCookies("email", email, { maxAge: 3600 });
            navigate("/dashboard");
          })
          .catch((err) => {
            alert("Invalid login");
          });
      };    


  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-4-desktop">
                    <form className="box" onSubmit={handleSubmit} >
                    <h1>Login</h1>
                        <div className="field mt-5">
                            <label className="label">Email or Username</label>
                            <div className="controls">
                                <input type="email" className="input" placeholder="Username" onChange={handleOnChange}/>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <label className="label">Password</label>
                            <div className="controls">
                                <input type="password" className="input" placeholder="*****" onChange={handleOnChange}/>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <button type="submit" className="button is-success is-fullwidth">Login</button>
                        </div>
                    </form>
                </div>
            </div>  
        </div>
      </div>
    </section>
  )
}



export default Login