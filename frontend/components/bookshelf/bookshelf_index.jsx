import React from 'react';
import BookshelfIndexItem from './bookshelf_index_item';
import BookshelfForm from './bookshelf_form_container';
import {Link} from 'react-router-dom';
import BookshelfShow from './bookshelf_show_container';

class BookshelfIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookshelf: this.props.bookshelves[0]
    };
    
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
              {bookshelves.map(bookshelf => <BookshelfIndexItem key={bookshelf.id} bookshelf={bookshelf}/>)}
            </div>
          </section>
          <div>
            <Link to='/shelves/new'>Add shelf</Link>
          </div>
        </div>
        <div>
          {/* <BookshelfShow bookshelf={this.state}/> */}
        </div>
      </div>

    )
  }
};

export default BookshelfIndex;