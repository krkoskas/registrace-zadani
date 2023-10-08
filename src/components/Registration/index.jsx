import React, {useState} from "react";

const Registration = (props) => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
    });

    const [usernameValue, setUsernameValue] = useState("");
    const [emailValue, setEmailValue] = useState ("");

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
        if (event.target.name === "username") {
            setUsernameValue(event.target.value)
        } else if (event.target.name === "email") {
            setEmailValue(event.target.value)
        }
    };

   const handleBlur = () => {
        if (usernameValue === "" && emailValue.includes("@")) {
            const emailDivide = emailValue.split("@");
            setUsernameValue(emailDivide[0]);
        }
    }
    const handleSubmit = () => {
        event.preventDefault();
       if (user.username === "" && usernameValue !== "") {
            setUser({
                ...user,
                username: usernameValue
            })
        }
        console.log(user);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label><input type="text" id="username" name="username" onChange={handleChange} onBlur={handleBlur} value={usernameValue}></input>
            <label htmlFor="email">Email:</label><input type="text" id="email" name="email" onChange={handleChange} onBlur={handleBlur} value={emailValue}></input>
            <label htmlFor="password">Password:</label><input type="password" id="password" name="password" onChange={handleChange}></input>
            <label htmlFor="password">Password confirm:</label><input type="password" id="passwordConfirm" name="passwordConfirm" onChange={handleChange}></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Registration;