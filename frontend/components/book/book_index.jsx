import React from 'react';
<<<<<<< HEAD
import {Route} from 'react-router-dom';
import BookIndexItem from './book_index_item';
import BookShowContainer from './book_show_container';
=======
import BookIndexContainer from './book_index_container';
>>>>>>> 342fd451ef16267b507a998f32e6d2b734be83c3

class BookIndex extends React.Component {

    componentDidMount(){
<<<<<<< HEAD
        
     this.props.fetchBooks();
=======
        this.props.fetchBooks();
>>>>>>> 342fd451ef16267b507a998f32e6d2b734be83c3
    }


    render(){
        const { books } = this.props;
         
<<<<<<< HEAD
        return (
            <section className='book-index'>
               <Route path='/books/:bookId' component={BookShowContainer}/>
                
                {books.map(book => <BookIndexItem key={book.title} book={book} />)}
            </section>
            )
        }

};
=======
    return (
        <section>
            <ul>
              {books.map(book => <BookIndexItem key={book.id} book={book} />)}
            </ul>
        </section>
        )
    }

}
>>>>>>> 342fd451ef16267b507a998f32e6d2b734be83c3

export default BookIndex;