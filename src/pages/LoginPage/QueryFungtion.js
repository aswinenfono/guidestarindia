// import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
// import { api } from '../../Config';
import { fetchData } from '../../Store/Login';



export const CallQuery = ({ EndPoint, postData, enabled, method }) => {
    return useQuery({
        queryKey: ['userData', EndPoint, postData],
        queryFn: () => fetchData(EndPoint, postData, method),
        enabled: enabled,
    });
};

// export const useLoginMutation = () => {
//     return useMutation({
//         mutationFn: ({ EndPoint, postData, method }) => {
//             console.log(EndPoint, postData, method)
//             fetchData(EndPoint, postData, method)
//         }
//     });
// };