import React from 'react';
import Modal from 'react-modal';

import Book from '../reviews/book';
import ShelfContainer from '../shelves/shelf_container';

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 50,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.5)'
  },
  content : {
    position                   : 'absolute',
    top                        : '40px',
    left                       : '40px',
    right                      : '40px',
    bottom                     : '40px',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px',

  }
}

class ModalComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			modalIsOpen: props.open,
			type: props.type,
			item: props.item
		}

		this.toggleModal = this.toggleModal.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	toggleModal() {
		this.setState({ 
			modalIsOpen: !this.state.modalIsOpen,
			type: '',
			item: '' 
		})
		this.props.callbackToParent();
	}

	handleKeyDown(e) {
		if (e.keyCode == 27) this.toggleModal();
	}

	render() {
		let container;
		if (this.state.type === 'book') {
			container = <Book 
										book= { this.state.item } 
										user= { this.props.user }
										options= { this.props.options }
										createShelf= { this.props.createShelf }
										deleteShelf= { this.props.deleteShelf } />
		} else if (this.state.type === 'bookshelf') {
			container = <ShelfContainer
										bookshelf= { this.state.item }
										user= { this.props.user }
										options= { this.props.options } />
		}

		return(
			<div>
				<Modal
					isOpen= { this.state.modalIsOpen }
					onRequestClose= { this.toggleModal }
					style= { customStyles }
					contentLabel= "Base Modal"
					ariaHideApp= { false }
					onKeyDown= { this.handleKeyDown } >
					
					<button 
						className= 'modal-close'
						onClick= { this.toggleModal }>CLOSE</button>
						
					{ container }
				</Modal>
			</div>
		)
	}
}

export default ModalComponent;