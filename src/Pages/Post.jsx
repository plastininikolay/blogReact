import React from "react";
import { useParams } from "react-router";
import PostContent from "../Components/Post/Post";
import {fetchDetailNews} from "../Store/Actions/DetailNews";
import {useDispatch, useSelector} from "react-redux";

function Post() {
    React.useEffect(()=>{window.scrollTo(0, 0)},[])
    const Lock = useParams()

    const id = Lock.id - 1;

    const dispatch = useDispatch();
    const news = useSelector((state)=>state.DetailNews.item);
    const isLoaded = useSelector((state)=>state.DetailNews.isLoaded);

    console.log(news)
    const emptyArr = [1, 2, 3, 4]

    React.useEffect(()=>{
        dispatch(fetchDetailNews(id));
    },[dispatch])
    return (
        <>
            {isLoaded === true ? <PostContent news={news}/> : ''}
        </>


    )
}
export default Post;