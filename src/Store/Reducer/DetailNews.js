const initialState = {items: [], isLoaded: false}
const DetailNews = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_NEWS':
            return{
                ...state,
                item: action.payload[action.id],
                isLoaded: true
            }
        case 'SET_LOADING_STATUS':
            return{
                ...state,
                isLoaded: action.payload,

            }
        default: return state
    }
}
export default DetailNews;