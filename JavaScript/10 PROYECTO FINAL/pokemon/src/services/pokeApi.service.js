import { axiosUtil } from "../utils/axios";

export const getAll = async () => {
    const optionsRequest = {
        method: "GET",
        url: "https://pokeapi.co/api/v2/pokemon/"
    };
    return await axiosUtil(optionsRequest);
}