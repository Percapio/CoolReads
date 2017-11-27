import React from 'react';
import BooksIndexItem from './books_index_item';
import BooksSidebar from './books_sidebar';
import BookshelfContainer from '../bookshelf/bookshelf_container';

class BooksIndex extends React.Component {
	componentDidMount() {
		this.props.getAllBooks();
	}

	render() {
		const books = this.props.books.map(
			book => {
				return (
					<BooksIndexItem
						key= { book.id }
						book= { book } />
				);
			});

		return (
			<div>
				<h2>Welcome, { this.props.user }!</h2>
				<div className= 'index-page'>
					<div className= 'single-books'>
						<BooksSidebar />
					</div>

					<div>
						<ul className= 'books-index'>
							{ books }
						</ul>
					</div>

					<div className= 'index-bookshelf'>
						<BookshelfContainer />
					</div>
				</div>
			</div>
		);
	}
};

export default BooksIndex;