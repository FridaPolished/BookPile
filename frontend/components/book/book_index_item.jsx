import React from 'react';
import {Link} from 'react-router-dom';
import BookshelfAddContainer from '../bookshelf/bookshelf_add_container';

const BookIndexItem =  ({ book }) => (

			<div>
				<Link to={`/books/${book.id}`}>
					<img className='book-cover-image' 
					src={book.coverUrl} 
					alt={book.title} />
				</Link>
				<div id="book-show">
				<BookshelfAddContainer book={book}/>
				</div>
			</div>
		
);

export default BookIndexItem;