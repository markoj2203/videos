import axios from 'axios';

const KEY = 'AIzaSyCfWQ74WXGf5ErVncpLLPj2fpnWgulmuTo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3' 
});