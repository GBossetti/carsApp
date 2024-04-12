import React from "react";

const NewUser = () => {
    const [user, setUser] = useState ({ 
        username:'', 
        lastname:'', 
        dni:'', 
        mail:'', 
        password:''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({ ...user, [name]:value});
    };

    const eventHandler = (e) => {
        e.preventDefault();

        // Here, you can perform login logic, such as sending the credentials to a server
        // for authentication. For this example, we'll just log the entered username and password.
        console.log('Mail: ' + user.username);    
        console.log('Password: ' + user.lastname);
        console.log('Mail: ' + user.dni);    
        console.log('Password: ' + user.mail);
        console.log('Password: ' + user.password);
    };

    return(
        <section>
            
        </section>
    );
    

}