import React from 'react';
import BookshelfIndexItem from './bookshelf_index_item';
import BookshelfFormContainer from './bookshelf_form_container';
import {Link, Route} from 'react-router-dom';
import BookshelfShowContainer from './bookshelf_show_container';

class BookshelfIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideButton: true
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  componentDidMount(){
    this.props.fetchBookshelves();
  }
  
  handleChange(e){
    this.setState(prevState => ({
      hideButton: !prevState.hideButton
    }))
  }


  render(){
    const {bookshelves} = this.props;
    const style = this.state.hideButton ? {display: 'none'} : {};

    return (
      <div className="grid-container">
        <div id="side">
          <section className='user-bookshelves'>
            <h4>My bookshelves</h4>
            <div>
              {bookshelves.map(bookshelf => 
                <BookshelfIndexItem 
                  key={bookshelf.id} 
                  bookshelf={bookshelf}
                  delete={this.props.deleteBookshelf}
                  style={style}
                  />
                )}
            </div>
            <BookshelfFormContainer />
            <div onClick={this.handleChange}>Delete bookshelf</div>
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