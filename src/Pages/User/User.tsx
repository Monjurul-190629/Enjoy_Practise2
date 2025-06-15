import React from 'react';
import { useUsers } from '../../hooks/useUsers';
import { useUserStore } from '../../store/useUserStore';
import { useUpdateAnother } from '../../store/useUpdateAnother';
import { Button } from "@/Components/ui/button"
import MyTable from '@/Components/Table/MyTable';

const User: React.FC = () => {
    const { data: users, isLoading, isError } = useUsers();

    const selectedUser = useUserStore((state) => state.selectedUser);
    const setSelectedUser = useUserStore((state) => state.setSelectedUser);

    // useAnotherUpdate
    const name = useUpdateAnother((state) => state.Name);
    const updateName = useUpdateAnother((state) => state.updateName);

    if (isLoading) return <p>Loading users...</p>;
    if (isError) return <p>Error loading users</p>;
    return (
        <div>
            <ul className='text-center py-10'>
                <div className='font-semibold text-xl'>
                    User List
                </div>
                {
                    users?.map((user) => 
                    <li key = {user.id} onClick={() => setSelectedUser(user)} className='text-[16px] cursor-pointer hover:text-blue-500'>

                        {user.name}
                      
                    </li>)
                }
            </ul>

            <div className='text-center py-5'>
                <div className='font-semibold text-xl'>
                    Selected User
                </div>
                {
                    selectedUser && 
                    <div className='flex flex-col'>
                       <div><span className='font-semibold'>Name : </span> {selectedUser.name}</div>
                       <div><span className='font-semibold'>Email : </span> {selectedUser.email}</div>     
                    </div>
                }
            </div>
            {/* Another for practise */}
            <div className='text-center py-5'>
                <input type = "text" value = {name} placeholder='Enter any Name' onChange={e => updateName(e.target.value)} />
                <br/><br/>
                <p> So the typed name is : {name}</p>
            </div>
            
            <Button className='border-2 border-gray-400'>Hello</Button>

            <h2 className="font-bold text-2xl underline text-center">User Table : </h2>
            <MyTable/>

        </div>
    );
};

export default User;