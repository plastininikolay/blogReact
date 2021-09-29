import React from "react";
import SelectedPosts from "../Components/RegisteredUser/SelectedPosts/SelectedPosts";
import PersonalInfo from "../Components/RegisteredUser/PersonalInfo/PersonalInfo";
import {fetchNews} from "../Store/Actions/ShortNews";
import {useDispatch} from "react-redux";

function PersonalAccount() {
    const dispatch = useDispatch();
    React.useEffect(()=>{
        dispatch(fetchNews());
    },[dispatch])
    return (
        <>
            <SelectedPosts/>
            <PersonalInfo/>
        </>
    )
}

export default PersonalAccount;