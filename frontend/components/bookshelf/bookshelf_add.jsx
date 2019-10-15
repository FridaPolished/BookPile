import React from 'react';

class BookshelfAdd extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      book_id: this.props.book.id,
      bookshelf: ''
    }
      this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.props.fetchBookshelves();
    this.props.fetchBookBookshelves(this.props.book.id)
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

  render(){
    if (!(this.props.book && this.props.book.bookshelfIds)){
      return null;
    }

    let bookshelves = this.props.bookshelves.map((bookshelf, i) => {
      return ( 
        <label>
        <input key={bookshelf.name} checked={this.props.book.bookshelfIds.includes(bookshelf.id)}
            type="checkbox"  id={i} onChange={this.handleChange(bookshelf.id)}/>
        {bookshelf.name}
        </label>
      )
    })
    return(
    <div className="dropdown-bookshelves">
      <div className="dropdown-header">
        <div className="dropdown-header-title">Choose a shelf</div>
          <div className="dropdown-checkboxes"> 
            <ul>
            {bookshelves}
            </ul>
          </div>
      </div>
    </div>
    )
  }
};

export default BookshelfAdd;

