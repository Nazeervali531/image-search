import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID kJvJCiTo8qYdvJlluw_Sr3UARJB3wChedabbxS-WPdg'
    }

});