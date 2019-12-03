import React from 'react';


class BookshelfForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      showForm: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let name = {name: this.state.name};
    this.setState({name: ''});
    this.props.createBookshelf(name);
  }

  update(field){
    return e => this.setState({
      [field]: e.target.value
    });
  }

  render(){
    if (!this.state.showForm) {
     return  (<div className="add-bookslf" onClick={()=>this.setState({showForm: true})}>Add bookshelf</div>)
    }
    return (<div>
      <form  className="form-bookshelf" onSubmit={this.handleSubmit}>
        <input type="text" name="" value={this.state.name} onChange={this.update("name")}/>
        <input className="add-bookslf" type="submit" value="Add bookshelf"/>
      </form>
    </div>
    )
  }
};

export default BookshelfForm;