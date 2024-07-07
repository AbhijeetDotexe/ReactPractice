import { buy_book } from "./BookType"
const initialState={
    NumberOfBooks:22
}

const BookReducer = (state=initialState, action)=>{
    switch(action.type){
        case buy_book: return{
            ...state, NumberOfBooks: state.NumberOfBooks-1
        }

        default: return state
    }
}

export default BookReducer;