import React from 'react';


class BookshelfEdit extends React.Component {

  constructor(props){
    this.state = {
      name: props.bookshelf.name
    }
  }

  update(field){
     return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updateBookshelf(this.state)
  }

  render(){
    return (<div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="" value={this.state.name} onChange={this.update("name")}/>
        <input id="add-bookslf" type="submit" value="Edit bookshelf"/>
      </form>
    </div>
    )
  }
}

export default BookshelfEdit;