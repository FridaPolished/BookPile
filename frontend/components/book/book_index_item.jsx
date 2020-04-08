import React from 'react';
import {Link} from 'react-router-dom';
import BookshelfAddContainer from '../bookshelf/bookshelf_add_container';
import ReactTooltip from "react-tooltip";

const BookIndexItem = ({ book }) => {
	let sampleDescription = book.description.substr(0,300);

	return (
    <div>
      <Link to={`/books/${book.id}`}>
        <img
          className="book-cover-image"
          src={book.coverUrl}
          alt={book.title}
          data-tip
          data-for={`${book.id}`}
        />
        <ReactTooltip
          id={`${book.id}`}
          className="custom"
          effect="solid"
          place="right"
        >
          <h2 className="b-title">{`${book.title}`}</h2>
          <br />
          <span>by {`${book.author}`}</span>
          <br />
          <br />
          <span>
            <p className="s-paragraph">{`${sampleDescription}`}...</p>
          </span>
          <br />
          <br />
          <span className="continue">
            ...click on cover to continue reading
          </span>
        </ReactTooltip>
      </Link>
      <div id="book-show">
        <BookshelfAddContainer book={book} />
      </div>
    </div>
  );};

export default BookIndexItem;