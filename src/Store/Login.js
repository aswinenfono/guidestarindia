import axios from "axios";
import { baseApi } from "../Config";

export const fetchData = async (EndPoint, postData, method) => {
    try {
        const response = await axios[method](`${baseApi}/${EndPoint}`, postData);
        if (response?.data.status_code === 200 && response?.data?.token) {
            settingToken(response?.data)
        }
        return response.data; // Ensure you're returning response.data
    } catch (error) {
        throw error; // Ensure you're throwing the error
    }
};

const settingToken = (data) => {
    const loginData = {
        token: data?.token
    }
    localStorage.setItem("loginData", JSON.stringify(loginData))
}