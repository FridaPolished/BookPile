import React from 'react';
import {Route} from 'react-router-dom';
import BookIndexItem from './book_index_item';
import BookShowContainer from './book_show_container';

class BookIndex extends React.Component {

    componentDidMount(){
        debugger
     this.props.fetchBooks();
    }


    render(){
        debugger
        const { books } = this.props;
         
        return (
            <section className='book-index'>
               <Route path='/books/:bookId' component={BookShowContainer}/>
                <ul>
                {books.map(book => <BookIndexItem key={book.id} book={book} />)}
                </ul>
            </section>
            )
        }

};

export default BookIndex;