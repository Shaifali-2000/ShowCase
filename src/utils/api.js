import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN = import.meta.env.VITE_APP_TOKEN;
const headers={
    Authorization: "bearer " + TOKEN,
};
 const fetchDataFromApi =async (url, params)=>{
    try{

        const {response} = await axios.get(BASE_URL+url, {
            headers: headers,
            params: params
        })
        return response;
    }
    catch(error){
        console.log(error);
        return error;
    }
}

export default fetchDataFromApi;


