import axios from "axios"
export const setNewsDis = (items) => ({
    type: "SET_ALL_NEWS",
    payload: [...items]
})
export const setNewsLoaded = (payload) => ({
    type: 'SET_LOADING_STATUS',
    payload
})
export const fetchNews = () => (dispatch) => {
    dispatch(setNewsLoaded(false));
    setTimeout(() =>
    axios.get('http://localhost:3000/db.json').then(({data})=>{
      dispatch(setNewsDis(data.ShortNews));
    }), 500);
}