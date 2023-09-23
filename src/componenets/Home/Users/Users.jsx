import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h3>All Data: {users.length}</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"> 
                {
                    users.map((user,idx)=><User key={idx} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;