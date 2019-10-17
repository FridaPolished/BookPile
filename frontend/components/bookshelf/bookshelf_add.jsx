import React from 'react';

class BookshelfAdd extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      book_id: this.props.book.id,
      bookshelf: '',
      hideShelves: true
    }
      this.handleChange = this.handleChange.bind(this);
      this.displayShelves = this.displayShelves.bind(this);
  }

  componentDidMount(){
    // this.props.fetchBookshelves();
    this.props.fetchBookBookshelves(this.props.book.id);
  }

  handleChange(bookshelfId){
    return (e) => {
    let shelfInfo = {
      bookshelfId: bookshelfId,
      bookId: this.props.book.id
    };
     if (e.target.checked === true){
       this.props.addBook(shelfInfo);
     } else {
       this.props.deleteBook(shelfInfo);
     }
    }  
  }

  displayShelves(){
    this.setState(prevState => ({
      hideShelves: !prevState.hideShelves
    }) )
  }

  render(){
    if (!(this.props.book && this.props.book.bookshelfIds)){
      return null;
    }
    let style = this.state.hideShelves ? {display: 'none'} : {display: 'block'}

    let bookshelves = this.props.bookshelves.map((bookshelf, i) => {
      return ( 
        <label key={`label${bookshelf.id}`}>
        <input key={`checkbox${bookshelf.name}`} checked={this.props.book.bookshelfIds.includes(bookshelf.id)}
            type="checkbox"  style={style} onChange={this.handleChange(bookshelf.id)}/>
        {bookshelf.name}
        </label>
      )
    })

    return(
    <div className="dropdown-bookshelves">
      <div className="dropdown-header" onClick={this.displayShelves}>Choose a shelf</div>
          <div style={style} className="dropdown-checkboxes"> 
            <ul>
            {bookshelves}
           </ul>
          </div>
    </div>
    )
  }
};

export default BookshelfAdd;

