import axios from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { api } from '../../Config';

const fetchData = async (EndPoint, postData, method) => {
    console.log("postData>>>>", postData);
    const response = await axios[method](`${api}/${EndPoint}`, postData);
    return response
};

export const CallQuery = ({ EndPoint, postData, enabled, method }) => {
    return useQuery({
        queryKey: ['userData', EndPoint, postData],
        queryFn: () => fetchData(EndPoint, postData, method),
        enabled: enabled,
    });
};

export const useLoginMutation = () => {
    return useMutation({
        mutationFn: ({ EndPoint, postData, method }) => {
            console.log(EndPoint, postData, method)
            fetchData(EndPoint, postData, method)
        }
    });
};