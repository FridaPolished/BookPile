import React from 'react';
import {Link} from 'react-router-dom';

 class BookshelfShow extends React.Component{

  componentDidMount(){
    this.props.fetchBookshelf(this.props.match.params.bookshelfId);
  }

  render(){
    let tableElements = this.props.books.map(book => {
      return (<tr>
               <td>{book.cover}</td>
               <td><Link to={`/books/${book.id}`}>{book.title}</Link></td>
               <td>{book.author}</td>
              </tr>
            )
    });

    return (
      <div className='bookshelf-show-col'>
        <table className="table books">
          <tr>
            <th>cover</th> 
            <th>title</th> 
            <th>author</th>  
          </tr>
          {tableElements}
        </table>
      </div>
    )
  }
}

export default BookshelfShow;