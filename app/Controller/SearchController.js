
import Request from "../Http/Request";
import { ApiRoutes } from "../Routes/ApiRoutes";

export const SearchController = {
    get: async function () {
        const response = await Request.get({
            url: ApiRoutes.helloWorld,
            method: 'GET',
            data: null
        });
        console.log(response);
        return 0;
    }
};