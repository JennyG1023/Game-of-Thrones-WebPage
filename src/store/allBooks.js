import axios from 'axios';

//Action types
const GET_ALL_BOOKS = 'GET_ALL_BOOKS';

//Action creator
const getAllBooks = allBooks => ({
    type: GET_ALL_BOOKS,
    allBooks
});

//Thunk Creator
export const fetchBooks = () => {
    return async (dispatch) => {
        const res = await axios.get('https://www.anapioficeandfire.com/api/books');
        const data = res.data;
        console.log('THIS IS ALL THE BOOKS ######################################', data)
        dispatch(getAllBooks(data));
    }
}

//Initial State
const defaultAllBooks = [];

//Reducer
export default function (state = defaultAllBooks, action) {
    switch (action.type) {
        case GET_ALL_BOOKS:
            return action.allBooks
        
        default:
            return state
    }
}