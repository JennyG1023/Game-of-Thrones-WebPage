// import axios from 'axios';

// //Action types
// const GET_SINGLE_BOOK = 'GET_SINGLE_BOOK';

// //Action creator
// const getSingleBook = singleBook => ({
//     type: GET_SINGLE_BOOK,
//     singleBook
// });

// //Thunk Creator
// export const fetchSingleBook = (bookURL) => {
//     return async (dispatch) => {
//         const res = await axios.get(bookURL);
//         const data = res.data;
//         console.log('THIS IS A SINGLE BOOK ######################################', data)
//         dispatch(getSingleBook(data));
//     }
// }

// //Initial State
// const defaultSingleBook = [];

// //Reducer
// export default function (state = defaultSingleBook, action) {
//     switch (action.type) {
//         case GET_SINGLE_BOOK:
//             return action.singleBook
        
//         default:
//             return state
//     }
// }