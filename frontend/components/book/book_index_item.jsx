import React from 'react';
import {Link} from 'react-router-dom';

const BookIndexItem =  ({ book }) => (

			<div>
				<Link to={`/books/${book.id}`}>
					<img className='book-cover-image' 
					src={book.coverUrl} 
					alt={book.title} />
				</Link>
			</div>
		
);

export default BookIndexItem;