import React from 'react';
import BookshelfAddContainer from '../bookshelf/bookshelf_add_container';
import {Route} from 'react-router-dom';

class BookShow extends React.Component {

	componentDidMount(){
		
		this.props.fetchBook(this.props.match.params.bookId);
		this.props.fetchBookBookshelves(this.props.match.params.bookId)
	}

	render(){
		
		const {book} = this.props;
		if(!book){
			return null;
		}
	return  (
			<section className="book-detail">
				<div>
					<img className="book-cover-image" src={book.coverUrl} alt={`cover for ${book.title}`} />
					<BookshelfAddContainer book={book}/>
				</div>

				<section className="book-information">
					<div className="title">
						<h1>{book.title}</h1>
					</div>
					<div>
						<h4>by {book.author}</h4>
						<h5>{book.year}</h5>
						<p>{book.description}</p>
					</div>
				</section>
			</section>
		)
	}
};
export default BookShow;
