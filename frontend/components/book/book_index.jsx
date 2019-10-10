import React from 'react';
import BookIndexContainer from './book_index_container';

class BookIndex extends React.Component {

    componentDidMount(){
        this.props.fetchBooks();
    }


    render(){
        const { books } = this.props;
         
    return (
        <section>
            <ul>
              {books.map(book => <BookIndexItem key={book.id} book={book} />)}
            </ul>
        </section>
        )
    }

}

export default BookIndex;