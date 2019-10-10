import React from 'react';
import { Link } from 'react-router-dom';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sampleUser = this.sampleUser.bind(this);
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.setState({ email: "", password: "", name: "" })
        this.props.processForm(user);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    renderErrors() {
        if (this.props.errors) {
            return (
                <ul>
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}> {error} </li>
                    ))}
                </ul>
            );
        }
    }

    sampleUser(e) {
        debugger
        e.preventDefault();
        let user = { email: "sample@email.com", password: "password"};
        this.props.processForm(user);
    };

    render() {
       
        return (
            <div className="login-form-container">
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit}>
                    <div className={`${this.props.formType}-form`}>
                        {name}
                        <label>
                            <input type="text" placeholder="Email" value={this.state.email}
                                onChange={this.update("email")} className={`login-${this.props.formType}`} />
                        </label>
                        <label>
                            <input type="password" placeholder="Password" value={this.state.password}
                                onChange={this.update("password")} className={`login-${this.props.formType}`} />
                        </label>
                        <input className={`session-submit-${this.props.formType}`} onClick={this.handleSubmit} type="submit" value={this.props.formType} />
                        <div id="sampleuser" onClick={this.sampleUser}>Sample user</div>
                    </div>
                </form>
            </div>
        )
    }
};

export default LoginForm;