import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    console.log(user)
    const {name,phone,website} = user;
    return (
        <div>
            <h1> User Detaisl</h1>
            <div className=" border rounded-md bg-slate-400 mt-4 space-y-3 p-5">
                <h3>Name: {name}</h3>
                <h3>Phome: {phone}</h3>
                <h3>Webside: {website}</h3>
            </div>
        </div>
    );
};

export default UserDetails;