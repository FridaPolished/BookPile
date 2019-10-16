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
      return (<ul className="individual-row">
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
        <h3>{this.props.bookshelf.name} bookshelf</h3>
        <section className="table-books">
          <div className="titles">
            <div key='col1'>cover</div> 
            <div key='col2'>title</div> 
            <div key='col3'>author</div>  
          </div>
          {tableElements}
        </section>
      </div>
    )
  }
}

export default BookshelfShow;