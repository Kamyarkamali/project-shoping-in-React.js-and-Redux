import axios from "axios";

const fetchReqest=()=>{
    return{
        type:"FEATCH_API",
    }
}

const fetcheSucsses=(users)=>{
    return{
        type:"FEACTH_SUCSSES",
        payload:users
    }
}

const fetchFailed=(error)=>{
    return{
        type:"ERROR FILED",
        users:[],
        payload:error
    }
}

const fetchUsers=()=>{
    return (dispatch)=>{
        dispatch(fetchReqest)
        axios.get("https://fakestoreapi.com/products")
        .then(response=>{
            const data=response.data
            dispatch(fetcheSucsses(data))
        })
        .catch(error=>{
            const errmsg=error.message
            dispatch(fetchFailed(errmsg))
        })
    }
}





export default fetchUsers;