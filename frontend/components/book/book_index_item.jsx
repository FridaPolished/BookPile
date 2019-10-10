import React from 'react';
import {Link} from 'react-router-dom';

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

export default BookIndexItem;