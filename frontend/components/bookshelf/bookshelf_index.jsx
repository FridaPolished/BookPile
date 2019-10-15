import React from 'react';
import BookshelfIndexItem from './bookshelf_index_item';
import BookshelfFormContainer from './bookshelf_form_container';
import {Link, Route} from 'react-router-dom';
import BookshelfShowContainer from './bookshelf_show_container';

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
            <h4>My bookshelves</h4>
            <div>
              {bookshelves.map(bookshelf => 
                <BookshelfIndexItem 
                  key={bookshelf.id} 
                  bookshelf={bookshelf}/>
                )}
            </div>
            <BookshelfFormContainer />
          </section>
        </div>
          <div id="right-col">
            <Route path={`/shelves/:bookshelfId`} component={BookshelfShowContainer} />
          </div> 
      </div>

    )
  }
};

export default BookshelfIndex;