import {Link} from 'react-router-dom';
import React from 'react';
import BookshelfEditContainer from './bookshelf_edit_container';

const BookshelfIndexItem = (props) => (
  <div>
    <Link to={`/shelves/${props.bookshelf.id}`}>{props.bookshelf.name}</Link>
    <button className="delete-btn" style={props.style} id="delete-bookshelf" onClick={() => props.delete(props.bookshelf)}>delete</button>
    
  </div>
);

export default BookshelfIndexItem;