import React from 'react';
import {Route, Link} from 'react-router-dom';
import BookIndexItem from './book_index_item';
import BookShowContainer from './book_show_container';

class BookIndex extends React.Component {

    componentDidMount(){
        
        this.props.fetchBooks();
    }


    render(){
        const { books } = this.props;
         
    return (
        <div>
            <div>
                <Link to='/shelves'>My bookshelves</Link>
            </div>
            <section className="book-index">
                {books.map(book => <BookIndexItem key={book.id} book={book} />)}
            </section>
        </div>
        )
    }

}

export default BookIndex;