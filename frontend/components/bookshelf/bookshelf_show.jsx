import React from 'react';
import {Link} from 'react-router-dom';

 class BookshelfShow extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchBookshelf(this.props.bookshelf.id);
  }

  render(){
    let tableElements = this.props.books.map(book => {
      return (<ul>
              <Link to={`/books/${book.id}`}>
                  <img className='book-cover-image'
                    src={book.coverUrl}
                    alt={book.title} />
               </Link>
               <li key={book.title}><Link to={`/books/${book.id}`}>{book.title}</Link></li>
               <li key={book.author}>{book.author}</li>
              </ul>
            )
    });

    return (
      <div className='bookshelf-show-col'>
        <section className="table books">
          <h3>{this.props.bookshelf.name} bookshelf</h3>
          <ul>
            <li key='col1'>cover</li> 
            <li key='col2'>title</li> 
            <li key='col3'>author</li>  
          </ul>
          {tableElements}
        </section>
      </div>
    )
  }
}

export default BookshelfShow;