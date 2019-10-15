import React from 'react';
import BookshelfIndexItem from './bookshelf_index_item';
import BookshelfForm from './bookshelf_form_container';
import {Link} from 'react-router-dom';

class BookshelfIndex extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  componentDidMount(){
    this.props.fetchBookshelves();
  }


  render(){
    const {bookshelves} = this.props;
    
    return (
      <div>
        <div id="side">
          <section className='user-bookshelves'>
            <div>
              {bookshelves.map(bookshelf => <BookshelfIndexItem key={bookshelf.id} bookshelf={bookshelf}/>)}
            </div>
          </section>
          <div>
            <Link to='/shelves/new'>Add shelf</Link>
          </div>
        </div>
        <div>
          <BookshelfShowContainer  />
        </div>
      </div>

    )
  }
};

export default BookshelfIndex;