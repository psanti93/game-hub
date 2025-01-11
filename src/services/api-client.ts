import axios  from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
            key: '3bb6f121068042bfa25c1a12f000e8fc'
    }
})