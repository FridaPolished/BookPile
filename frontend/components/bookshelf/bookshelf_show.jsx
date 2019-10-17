import React from 'react';
import {Link, Route} from 'react-router-dom';


 class BookshelfShow extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
  this.props.fetchBookshelf(this.props.match.params.bookshelfId);
  }

  render(){
    if(!this.props.bookshelf){
      return null;
    }
    let tableElements = this.props.books.map(book => {
      return (<React.Fragment>
              <div><Link to={`/books/${book.id}`}>
                  <img className='mini-book-cover-image'
                    src={book.coverUrl}
                    alt={book.title} />
               </Link></div>
               <div key={book.title}><Link to={`/books/${book.id}`}>{book.title}</Link></div>
               <div id="author" key={book.author}>{book.author}</div>
              </React.Fragment>
            )
    });

    return (
      <div className='bookshelf-show-col'>
        <h3>{this.props.bookshelf.name} bookshelf</h3>
        <section className="table-books">
          
            <div key='col1'>cover</div> 
            <div key='col2'>title</div> 
            <div key='col3'>author</div>  
          
          {tableElements}
        </section>
      </div>
    )
  }
}

export default BookshelfShow;