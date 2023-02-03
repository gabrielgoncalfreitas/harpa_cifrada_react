import axios from "axios";
import { API_URL } from '@env';

export const SearchController = {
    get: function () {
        console.log(API_URL);
        // axios({
        //     method: 'GET',
        //     url: 'http://localhost:8000/api/get',
        //     responseType: 'stream',
        // }).then(function (response) {
        //     console.log(response.data);
        // });

        return 0;
    }
};