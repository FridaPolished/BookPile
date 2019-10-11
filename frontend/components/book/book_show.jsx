<<<<<<< HEAD
import React from 'react';


class BookShow extends React.Component {

	componentDidMount(){
		
		this.props.fetchBook(this.props.match.params.bookId);
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

	//rating will go here with little stars, maybe books?
	//review form will go here
	//reviews will go here



};
export default BookShow;
=======


export default BookShow = () =>{


};
>>>>>>> 342fd451ef16267b507a998f32e6d2b734be83c3
