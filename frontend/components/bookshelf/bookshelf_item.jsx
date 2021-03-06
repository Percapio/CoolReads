import React from 'react';
import ModalContainer from '../modal/modal_container';

export default class BookshelfItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		}

		this.number = 0;

		this.handleBookshelfClick = this.handleBookshelfClick.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.callbackToParent = this.callbackToParent.bind(this);
		this.renderBookImage = this.renderBookImage.bind(this);
		this.handleDeleteBookshelf = this.handleDeleteBookshelf.bind(this);
	}

	componentDidMount() {
		if (this.props.bookshelf.title === 'Want to Read') {
			this.props.getShelf( this.props.bookshelf.id );
			this.forceUpdate();
		}	
	}

	handleBookshelfClick(e) {
		e.preventDefault();
		this.handleModal();
	}	

	handleDelete(e) {
		e.preventDefault();
		this.props.deleteShelf({ 
			book_id: this.props.books[ this.number ].id,
			bookshelf_id: this.props.bookshelf.id });
		this.forceUpdate();
	}

	handleDeleteBookshelf(e) {
		e.preventDefault();
		this.props.deleteBookshelf({ 
			shelfId: this.props.bookshelf.id, 
			userId: this.props.user.id });
		this.forceUpdate();
	}

	handleModal() {
		this.setState({ showModal: !this.state.showModal });
	}

	callbackToParent() {
		this.handleModal();
	}

	renderBookImage(direction) {
		if (direction === 'right') {
			this.number += 1;
			this.image(this.number);
		} else if (direction === 'left') {
			this.number -= 1;
			this.image(this.number);
		}

		this.forceUpdate();
	}

	image(number) {
		let length = this.props.books.length;

		if (length > 0) {
			if (number < 0) {
				this.number += length;
			} else if (number >= length) {
				this.number -= length;
			} 
			return this.props.books[this.number].img_url;
		}
	}

	render() {
		let shelfType, image;
		let options = { 
			handleDeleteBookshelf: this.handleDeleteBookshelf,
			books: this.props.books,
			bookshelves: this.props.bookshelves }

		if (typeof this.props.books === 'undefined') {
			image = this.props.bookshelf.img_url;
		} else {
			image = this.image( this.number );
			if (typeof image === 'undefined') {
				image = this.props.bookshelf.img_url;
			}
		}

		if (this.props.sideShelf) {
			shelfType = 
				<div className= 'shelf'>					
					<h3>Want To Read</h3>

					<div className= 'side-bar-book-img'>
						<img 
							src= { image }
							alt= 'some random book'
							className= 'side-bar-img'
							onClick= { this.handleBookshelfClick } />
					</div>							
					<div className= 'mini-edits'>
						<i className="fa fa-arrow-left" aria-hidden="true" onClick= { () => this.renderBookImage('left') } />
						<i className="fa fa-minus-circle" aria-hidden="true" onClick= { this.handleDelete } />
						<i className="fa fa-arrow-right" aria-hidden="true" onClick= { () => this.renderBookImage('right') } />
					</div>
					
					<hr />
				</div>
		} else {
			shelfType = 
				<li className= 'mini-shelf'>
					<p className= 'bookshelf-title' onClick= { this.handleBookshelfClick }>{ this.props.bookshelf.title }</p>
					<i className= "fa fa-times" aria-hidden= "true" onClick= { this.handleDeleteBookshelf } />
				</li>
		}

		return(
			<div className= 'bookshelves-wrap'>
				{ shelfType }

				{ this.state.showModal ? <ModalContainer 
																		item= { this.props.bookshelf }
																		open= { true }
																		type= { 'bookshelf' }
																		user= { this.props.user }
																		options= { options }
																		callbackToParent= { this.callbackToParent } /> : null }	
			</div>
		)
	}
}