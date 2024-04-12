import React from "react";
import { useState } from "react";
import '../style/login.css';

const LoginForm = () => {
    const [credentials, setCredentials] = useState({ mail: '', password: ''});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setCredentials({ ...credentials, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Here, you can perform login logic, such as sending the credentials to a server
        // for authentication. For this example, we'll just log the entered username and password.
        console.log('Mail: ' + credentials.username);    
        console.log('Password: ' + credentials.password);
    };

    return (
        <section id="login">
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="mail"></label>
                        <input 
                            className="place-holder"
                            type="text"
                            id="mail"
                            name="mail"
                            value={credentials.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password"></label>
                        <input
                            className="place-holder"
                            type="text"
                            id="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="button-sign-in">Login</button>
                </form>    
                <button type="submit" className="button-sign-in">Login</button>             
            </div>
        </section>
    );
};

export default LoginForm;