import React, { useEffect } from "react";

const Form = ({ inputs, setInputs }) => {

    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const validateFirstName = (inputs) => {
        return inputs.firstName.length > 0 && inputs.firstName.length < 2 ? "First Name must be at least 2 characters." : "";
    }

    const validateLastName = (inputs) => {
        return inputs.lastName.length > 0 && inputs.lastName.length < 2 ? "Last Name must be at least 2 characters." : "";
    }
    const validateEmail = (inputs) => {
        return inputs.email.length > 0 && inputs.email.length < 5 ? "Email must be at least 5 characters." : "";
    }

    const validatePassword = (inputs) => {
        return inputs.password.length > 0 && inputs.password.length < 8 ? "Password must be at least 8 characters." : "";
    }

    const validateConfirmPassword = (inputs) => {
        return inputs.password !== inputs.confirmPassword ? "Passwords must match." : "";
    }

    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="firstName">First Name: </label>
                    <input
                        type="text"
                        name="firstName"
                        onChange={onChange}
                        className="form-control"
                    />
                    <p className="text-muted">
                        {validateFirstName(inputs)}
                    </p>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name: </label>
                    <input
                        type="text"
                        name="lastName"
                        onChange={onChange}
                        className="form-control"
                    />
                    <p className="text-muted">
                        {validateLastName(inputs)}
                    </p>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        name="email"
                        onChange={onChange}
                        className="form-control"
                    />
                    <p className="text-muted">
                        {validateEmail(inputs)}
                    </p>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        name="password"
                        onChange={onChange}
                        className="form-control"
                    />
                    <p className="text-muted">
                        {validatePassword(inputs)}
                    </p>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        onChange={onChange}
                        className="form-control"
                    />
                    <p className="text-muted">
                        {validateConfirmPassword(inputs)}
                    </p>
                </div>
            </form>
        </div>
    );
};
export default Form;