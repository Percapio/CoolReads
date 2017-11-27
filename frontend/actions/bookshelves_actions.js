import * as APIUtil from '../util/bookshelves_api_util';

export const RECEIVE_BOOKSHELVES = 'RECEIVE_BOOKSHELVES';
export const RECEIVE_BOOKSHELF = 'RECEIVE_BOOKSHELF';
export const DELETE_BOOKSHELF = 'DELETE_BOOKSHELF';
export const CREATE_BOOKSHELF = 'CREATE_BOOKSHELF';

const receiveBookshelves = bookshelves => ({
	type: RECEIVE_BOOKSHELVES,
	bookshelves
});

const receiveBookshelf = bookshelf => ({
	type: RECEIVE_BOOKSHELF,
	bookshelf
});

const removeBookshelf = bookshelf => ({
	type: DELETE_BOOKSHELF,
	bookshelf
});

const makeBookshelf = bookshelf => ({
	type: CREATE_BOOKSHELF,
	bookshelf
});

export const getBookshelves = (userId) => dispatch => (
	APIUtil.getBookshelves(userId).then(
		(bookshelf) => dispatch(receiveBookshelves(bookshelves)) )
);

export const getBookshelf = (shelf, userId) => dispatch => (
	APIUtil.getBookshelf(shelf, userId).then(
		(bookshelf) => dispatch(receiveBookshelf(bookshelf)) )
);

export const createBookshelf = (shelf, userId) => dispatch => (
	APIUtil.createBookshelf(shelf, userId).then(
		(payload) => dispatch(makeBookshelf(payload)) )
);

export const deleteBookshelf = (shelfId, userId) => dispatch => (
	APIUtil.deleteBookshelf(shelfId, userId).then(
		(bookshelf) => dispatch(removeBookshelf(bookshelf)) )
);

export const editBookshelf = (shelf, userId) => dispatch => (
	APIUtil.editBookshelf(shelf, userId).then(
		(payload) => dispatch(receiveBookshelf(payload)) )
);