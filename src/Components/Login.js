import {useState} from "react";

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const baseUrl = "http://apps.avantrio.xyz:8010";

    async function login() {
        let credentials = {email, password};
        let result = await fetch(baseUrl + "/api/user/login", {
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

    return (
        <div className="App col-sm-6 offset-sm-3">
            <input
                type="text"
                placeholder="UserName"
                className="form-control"
                onChange={event => setEmail(event.target.value)}/>
            <input
                type="password"
                placeholder="Password"
                className="form-control"
                onChange={event => setPassword(event.target.value)}/>
            <button
                className="btn btn-primary"
                onClick={login}>
                Login
            </button>
        </div>
    )
}
