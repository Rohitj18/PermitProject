import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {

    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();


        try {

            const response = await axios.post('http://localhost:4000/api/v1/login', { email, password }).then(res => {
                if (res.data.response === "exist") {
                    localStorage.setItem("user",JSON.stringify(res.data.data));
                    history("/Dashboard", { state: { id: email } })
                }
                else if (res.data.response === "notexist") {
                    alert("User have not sign up")
                }
            })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);
                });
            console.log("This is the response", response);

        }
        catch (e) {
            console.log(e);

        }

    }


    return (
        <div className="login">

            <h1>Login</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <input type="submit" onClick={submit} />

            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/signup">Signup Page</Link>

        </div>
    )
}

export default Login