import React from 'react';


class BookShow extends React.Component {

	componentDidMount(){
		this.props.fetchBook(this.props.match.params.bookId);
	}

	render(){
		const {book} = this.props;
	return  (
			<section className="book-detail">
				<figure>
					<img src={book.coverUrl} alt={`cover for ${book.title}`} />
				</figure>

				<section className="book-information">
					<h3>{book.title}</h3>
					<h4>by {book.author}</h4>
					<p>{book.description}</p>
					<h5>{book.year}</h5>
				</section>
			</section>
		)
	}

	//rating will go here with little stars, maybe books?
	//review form will go here
	//reviews will go here



};
export default BookShow;