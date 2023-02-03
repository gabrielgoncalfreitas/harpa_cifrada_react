import { env } from "../../env";

export const ApiRoutes = {
    helloWorld: env.API_URL + 'hello-world',
    getAllSongs: env.API_URL + 'getAllSongs',
};