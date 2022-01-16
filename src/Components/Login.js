import {useEffect, useState} from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom"

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let navigate = useNavigate();

    const baseUrl = "http://apps.avantrio.xyz:8010/api";

    async function login() {
        let credentials = {email, password};
        let result = await fetch(baseUrl + "user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(credentials)
        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        // history.push("/add")
    }

    const fetchUser = () => {
        return axios.post(baseUrl + "/user/login", {
            username: email,
            password: password
        })
            .then(function (response) {
                // console.log(response.data)
                localStorage.setItem("user-info", response.data.token);
                localStorage.setItem("isLoggedIn", true);
                navigate("/home")
            })
            .catch(function (error) {
                console.log(error);
                alert("Wrong Credentials")
            });
    }

    const getUserData = () => {
        return axios.get("http://apps.avantrio.xyz:8010/api/users", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("user-info")}`
            }
        })
            .then((res) => {
            console.log(...res.data)
        })
            .catch((error) => {
                console.error(error)
            })

    }
    return (
            <div className="App col-sm-6 offset-sm-3 p-3 mt-5" style={{
            backgroundColor:"gold",
            borderRadius:"15px"}}>
                <h3>Sign In</h3>
                <label>Email address</label>
                <input
                    type="text"
                    placeholder="UserName"
                    className="form-control mb-4"
                    onChange={event => setEmail(event.target.value)}/>
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    className="form-control mb-4"
                    onChange={event => setPassword(event.target.value)}/>
                <button
                    className="btn btn-primary"
                    onClick={fetchUser}>
                    Login
                </button>
            </div>

    )
}
