import {Link, Route} from 'react-router-dom';
import React from 'react';
import BookshelfEditContainer from './bookshelf_edit_container';

class BookshelfIndexItem extends React.Component {
 constructor(props){
   super(props);
   this.state = {
     edit: false,
     name: props.bookshelf.name
   }
   this.handleChange = this.handleChange.bind(this);
   this.startEdit = this.startEdit.bind(this);
   this.endEdit = this.endEdit.bind(this);
   this.cancelEdit = this.cancelEdit.bind(this);
 }

 startEdit(){
   this.setState({
     edit: true
   })
 }

 endEdit(){
   if (this.state.name !== this.props.bookshelf.name){
     this.props.updateBookshelf({name: this.state.name, id: this.props.bookshelf.id})
   }

   this.setState({
     edit: false
   });
 }

handleChange(e){
  this.setState({
    name: e.target.value
  });

}

  cancelEdit(e){
    this.setState({
      name: this.props.bookshelf.name,
      edit: false
    })
  }


  render(){
    const {bookshelf, style} = this.props;
    let header;
    let button;
    if(this.state.edit === true) {
      header = (
        <input type="text" value={this.state.name} onChange={this.handleChange} onBlur={this.endEdit}></input>
        )
        button = (
          <button className="cancel-btn" onClick={this.cancelEdit}>cancel</button>
        )
    } else {
      header = (
      <Link to={`/shelves/${bookshelf.id}`} className="grid-padding">{bookshelf.name}</Link>
      )
      button = (
        <button className="edit-btn" style={style} onClick={this.startEdit}>edit</button>
      )
    }
  return (<div>
    {header}
    {button}
    <button className="delete-btn" style={style} id="delete-bookshelf" 
    onClick={() => this.props.delete(bookshelf)}>delete</button>
  </div>)
  }

}


export default BookshelfIndexItem;