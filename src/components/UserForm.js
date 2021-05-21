import React from 'react';


const UserForm = (props) => {
    const {inputs, setInputs} = props;

    const onChange = e => {
        setInputs({ 
            ...inputs, 
        [e.target.name]:e.target.value
    })
    }

    return (
        <div>
            <form onSubmit={  (e) => e.preventDefault() }>
                <div>
                    <label>First Name: </label>
                    <input type="text" name="firstName" onChange={onChange}/>
                    {
                        inputs.firstName.length > 0 && inputs.firstName.length < 3 ? 
                        <p style={{color:'red'}}>First Name must be more than 3 characters.</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" name="lastName" onChange={onChange} />
                    {
                        inputs.lastName.length > 0 &&inputs.lastName.length < 3 ? 
                        <p style={{color:'red'}}>Last Name must be more than 3 characters.</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" name="email" onChange={onChange} />
                    {
                        inputs.email.length > 0 && inputs.email.length < 3 ? 
                        <p style={{color:'red'}}>Email must be more than 3 characters.</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" name="password" onChange={onChange}/>
                    {
                        inputs.password.length > 0 && inputs.password.length < 5 ? 
                        <p style={{color:'red'}}>Password must be more than 5 characters.</p> :
                        ''
                    }
                </div>
                <div>
                    <label> Confirm Password: </label>
                    <input type="password" name="confPassword" onChange={onChange}/>
                    {
                        inputs.confPassword.length > 0 && inputs.confPassword !== inputs.password ? 
                        <p style={{color:'red'}}>Confirmation password must be the same as your password.</p> :
                        ''
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
            <h3>Your Form Data</h3>
            <p>First Name: {inputs.firstName} </p> 
            <p>Last Name: {inputs.lastName} </p>
            <p>Email: {inputs.email} </p>
            <p>Password: {inputs.password} </p>
            <p>Confirm Password: {inputs.confPassword} </p>
        </div>
    );
};
export default UserForm;