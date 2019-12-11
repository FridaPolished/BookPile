import React from 'react';
import {Link} from 'react-router-dom';
import BookshelfAddContainer from '../bookshelf/bookshelf_add_container';
import ReactTooltip from "react-tooltip";

const BookIndexItem = ({ book }) => (
  <div>
    <Link to={`/books/${book.id}`}>
      <img
        className="book-cover-image"
        src={book.coverUrl}
        alt={book.title}
        data-tip
        data-for={`${book.id}`}
      />
    <ReactTooltip id={`${book.id}`} className='custom' effect="solid" place="right">
      <h2>{`${book.title}`}</h2>
      <br />
      <span>by {`${book.author}`}</span>
      <br />
      <p>{`${book.description}`}</p>
      <br />
    </ReactTooltip>
    </Link>
    <div id="book-show">
      <BookshelfAddContainer book={book} />
    </div>
  </div>
);

export default BookIndexItem;