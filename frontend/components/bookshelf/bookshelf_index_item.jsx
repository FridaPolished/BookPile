import {Link} from 'react-router-dom';
import React from 'react';

const BookshelfIndexItem = ({bookshelf}) => (
  <div>
    <Link to={`/shelves/${bookshelf.id}`}>{bookshelf.name}</Link>
  </div>
);

export default BookshelfIndexItem;