import React from 'react';
import ReviewItem from './review_item';
import BookShow from './book_show';
import BookShelfContainer from '../bookshelf/bookshelf_container';

class Reviews extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			book_id: '',
			author_id: '',
			title: '',
			description: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);

	}

	componentDidMount() {
		this.props.getAllBooks();
		this.props.getReviews(this.props.book.id);
	}

	// handleReviewForm() {
		// if (  )
		// <form className= 'review-form'>

		// </form>
	// }

	handleSubmit(e) {
		e.preventDefault();
		this.setState({
			book_id: this.props.book.id,
			author_id: this.props.userId
		})
		this.props.createReview(this.state);
	}

	handleChange(field) {
		return(e) => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleBookShow() {
		if (this.props.book) {
			return <BookShow book= { this.props.book } />
		} else if (typeof this.props.book === 'undefined') {
			
		}
	}

			// { this.handleReviewForm }
					// 
	render() {
		const reviews = this.props.reviews.map(
			(review, index) => {
				debugger;
				return (
					<ReviewItem
						key= { index }
						review= { review }
						destroyReview= { this.props.destroyReview }
						updateReview= { this.props.updateReview } />
				)
			}
		)

	return(
		<div className= 'main-component'>
			<div className= 'index'>
				<div className= 'index-2'>

					{ this.handleBookShow() }

					<form className= 'review-form' onSubmit= { this.handleSubmit }>
						<label>Title
							<input
								input= 'text'
								value= { this.state.title }
								onChange= { this.handleChange('title') }
								/>
						</label>

						<label>Review
							<textarea
								value= { this.state.description }
								onChange= { this.handleChange('description') }> </textarea>
						</label>

						<input type='submit' value='Submit' className= 'submit-button'/>
					</form>

					<ul>
						{ reviews }
					</ul>
				</div>

				<div className= 'index-1'>
					<BookShelfContainer />
				</div>
			</div>
		</div>
	)
}};

export default Reviews;