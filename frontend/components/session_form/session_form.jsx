import React from 'react';
import {Link} from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    renderErrors(){
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}> {error} </li>
                ))}
            </ul>
        );
    }

    render(){
        return(
            <div>
                <h2>{this.props.formType}</h2>
                <br/>
                {this.props.formType === 'login' ? <Link to='/signup'>Sign up</Link> :
                    <Link to='/login'>Log in</Link>}
                {this.renderErrors()}

                <form onSubmit={this.handleSubmit}>
                    <br/>
                    <label>
                        Username
                            <input type="text" value={this.state.username} onChange={this.update("username")} />
                    </label>
                    <br/>
                    <label>
                        Password
                            <input type="password" value={this.state.password} onChange={this.update("password")} />
                    </label>
                    <input onClick={this.handleSubmit} type="submit" />
                </form>
            </div>
        )
    }
};

export default SessionForm;