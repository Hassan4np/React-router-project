import { Link } from "react-router-dom";


const User = ({user}) => {
    const {email,name,username,id}=user;
    return (
        <div className="border rounded mt-5 p-5 space-y-2 bg-gray-300">
            <h3>Name: {name}</h3>
            <h3>UserName: {username}</h3>
            <h3>Email: {email}</h3>
            <Link to={`/user/${id}`}><button>Detais me</button></Link>
        </div>
    );
};

export default User;