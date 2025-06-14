import { api } from "../Lib/axios"
import { useQuery } from '@tanstack/react-query';

export type User = {
    id : number,
    name : string,
    email: string,
}


const fetchUsers = async() : Promise<User[]> => {
    const response = await api.get<User[]>('/users');
    console.log(response);
    console.log(response.data)
    return response.data;
}


export const useUsers = () => {
    return useQuery<User[], Error>({
        queryKey : ['users'],
        queryFn : fetchUsers
    })
}