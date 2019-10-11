import React from 'react';
import {Link} from 'react-router-dom';

<<<<<<< HEAD
const BookIndexItem =  ({ book }) => (

			<div>
				<Link to={`/books/${book.id}`}>
					<img className='book-cover-image' 
					src={book.coverUrl} 
					alt={book.title} />
				</Link>
			</div>
		
);
=======
class BookIndexItem extends React.Component {
    constructor (props) {
        super(props);

        this.displayMiniShow = this.displayMiniShow.bind(this);
    }

    displayMiniShow(e){
        return e => {
            
        }
    };

    render(){
        return (
        <div>
            <Link to={`/books/${book.id}`}></Link>
            <img src="" alt="" onMouseLeave={this.displayMiniShow}/>
        </div>
        )
    }

};
>>>>>>> 342fd451ef16267b507a998f32e6d2b734be83c3

export default BookIndexItem;