import { getData, newUser } from '../Api/api';

const GET_USERS = 'GET_USERS';
const GET_RADIODATA = 'GET_RADIODATA';
const ADD_NEW_USER = 'ADD_NEW_USER';
const TOGGLE_MODAL_WINDOW = 'TOGGLE_MODAL_WINDOW';

const initialState = {
    arrayOfUsers: [],
    arrayOfRadioData: [],
    totalUsersCount: null,
    newUserId: 0,
    toggleModalWindow: false
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_USERS: {
            return {
                ...state,
                arrayOfUsers: action.data.arrayOfUsers,
                totalUsersCount: action.data.totalUsersCount
            }
        }
        case GET_RADIODATA: {
            return {
                ...state,
                arrayOfRadioData: action.arrayOfRadioData
            }
        }
        case ADD_NEW_USER: {
            return {
                ...state,
                newUserId: action.newUserId
            }
        }
        case TOGGLE_MODAL_WINDOW: {
            return {
                ...state,
                toggleModalWindow: action.toggle
            }
        }
        default:
            return state;
    }
}

const getUsersfromApiAC = (arrayOfUsers, totalUsersCount) => ({type: GET_USERS, data: { arrayOfUsers, totalUsersCount} })

const getRadioDataFromApiAC = (arrayOfRadioData) => ({ type: GET_RADIODATA, arrayOfRadioData })

const addNewUserAC = (newUserId) => ({type: ADD_NEW_USER, newUserId})

const toggleModalWindowAC = (toggle) => ({type: TOGGLE_MODAL_WINDOW, toggle})

export const getUsersFromApiTC = (moreUsers) => {
    return (dispatch) => {
        getData.getUsers(moreUsers).then( (response) => {
            dispatch(getUsersfromApiAC(response.users, response.total_users));
        })
    }
}

export const getRedioDataFromApiTC = () => {
    return (dispatch) => {
        getData.getRadioboxData().then( (response) => {
            dispatch(getRadioDataFromApiAC(response.positions));
        })
    }
}

export const addNewUserTC = (userData) => {
    return (dispatch) => {
        getData.getToken().then( (token) => {
            newUser.setUser(userData, token)
                .then( (userResponse) => {
                    dispatch(addNewUserAC(userResponse.user_id))
                    dispatch(getUsersFromApiTC());
                    dispatch(toggleModalWindowTC(true));
            })
        })
    }
}

export const toggleModalWindowTC = (toggle) => {
    return (dispatch) => {
        dispatch(toggleModalWindowAC(toggle));
    }
}

export default userReducer;