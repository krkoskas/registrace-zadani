import React, {useState} from "react";

const Registration = (props) => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
    });

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    };

   const handleBlur = () => {
        if (user.username === "" && user.email.includes("@")) {
            const emailDivide = user.email.split("@");
            setUser({...user, username: (emailDivide[0])})
        }
    }
    const handleSubmit = () => {
        event.preventDefault();
        console.log(user);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label><input type="text" id="username" name="username" onChange={handleChange} onBlur={handleBlur} value={user.username}></input>
            <label htmlFor="email">Email:</label><input type="text" id="email" name="email" onChange={handleChange} onBlur={handleBlur} value={user.email}></input>
            <label htmlFor="password">Password:</label><input type="password" id="password" name="password" onChange={handleChange}></input>
            <label htmlFor="password">Password confirm:</label><input type="password" id="passwordConfirm" name="passwordConfirm" onChange={handleChange}></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Registration;