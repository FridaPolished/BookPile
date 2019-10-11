import React from 'react';
import {Route} from 'react-router-dom';
import BookIndexItem from './book_index_item';
import BookShowContainer from './book_show_container';

class BookIndex extends React.Component {

    componentDidMount(){
        
     this.props.fetchBooks();
    }


    render(){
        const { books } = this.props;
         
        return (
            <section className='book-index'>
               <Route path='/books/:bookId' component={BookShowContainer}/>
                
                {books.map(book => <BookIndexItem key={book.title} book={book} />)}
            </section>
            )
        }

};

export default BookIndex;