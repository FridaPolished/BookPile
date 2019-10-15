import React from 'react';


class BookshelfForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){

    e.preventDefault();
    this.props.createBookshelf(this.state);
  }

  update(field){
    return e => this.setState({
      [field]: e.target.value
    });
  }

  render(){
    return (<div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="" value={this.state.name} onChange={this.update("name")}/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
    )
  }
};

export default BookshelfForm;