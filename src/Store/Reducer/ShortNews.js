const initialState = {items: [], isLoaded: false}
const ShortNews = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_ALL_NEWS':
            return{
                ...state,
                items: action.payload,
                isLoaded: true
            }
        case 'SET_LOADING_STATUS': 
            return{
                ...state,
                isLoaded: action.payload
            }
        default: return state
    }
}
export default ShortNews;