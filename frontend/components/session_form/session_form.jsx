import React from 'react';
import {Link} from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            name: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.setState({email: "", password: "", name: ""})
        this.props.processForm(user);
    }

    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    renderErrors(){
        if (this.props.errors){
            return (
                <ul>
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}> {error} </li>
                    ))}
                </ul>
            );
        } 
    }
// change
    render(){
        let name;
        if (this.props.formType === 'signup') {
            name = <label>  <input type="text" placeholder="Name" value={this.state.name}
                    onChange={this.update("name")} className="login-input" /></label>
        };
        return(
            <div className="login-form-container">
            {this.renderErrors()}
                {/* <h2>{this.props.formType}</h2> */}
                {/* {this.props.formType === 'login' ? <Link to='/signup'>Sign up</Link> :
                    <Link to='/login'>Log in</Link>} */}
                <form onSubmit={this.handleSubmit}>
                    <div className={`${this.props.formType}-form`}> 
                        {name}
                        <label>
                            <input type="text" placeholder="Email" value={this.state.email} 
                            onChange={this.update("email")} className="login-input" />
                        </label>
                        <label>
                            <input type="password" placeholder="Password" value={this.state.password} 
                            onChange={this.update("password")} className="login-input" />
                        </label>
                        <input className={`session-submit-${this.props.formType}`} onClick={this.handleSubmit} type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        )
    }
};

export default SessionForm;