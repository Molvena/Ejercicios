import axios from "axios";

export const axiosUtil = async (optiones) => {
return await axios.request(optiones).then((res) =>res.data);
};
