import axios from 'axios';

//Action types
const GET_ALL_HOUSES = 'GET_ALL_HOUSES';

//Action creator
const getAllHouses = allHouses => ({
    type: GET_ALL_HOUSES,
    allHouses
});

//Thunk Creator
export const fetchHouses = () => {
    return async (dispatch) => {
        const res = await axios.get('https://www.anapioficeandfire.com/api/houses');
        const data = res.data;
        dispatch(getAllHouses(data));
    }
}

//Initial State
const defaultAllHouses = [];

//Reducer
export default function (state = defaultAllHouses, action) {
    switch (action.type) {
        case GET_ALL_HOUSES:
            return action.allHouses
        
        default:
            return state
    }
}