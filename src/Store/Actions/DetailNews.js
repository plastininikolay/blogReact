import axios from "axios"
export const setNewsDis = (item, id) => ({
    type: "SET_NEWS",
    payload: [...item],
    id: id
})
export const setNewsLoaded = (payload) => ({
    type: 'SET_LOADING_STATUS',
    payload
})
export const fetchDetailNews = (id) => (dispatch) => {
    dispatch(setNewsLoaded(false));
    console.log(id)
    setTimeout(() =>
        axios.get('http://localhost:3000/db.json').then(({data})=>{
            dispatch(setNewsDis(data.DetailNews, id));
        }), 1500);
}