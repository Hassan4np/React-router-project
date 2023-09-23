
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Opps data not found</h1>
            <p>
                {error.statusText || error.message}                
            </p>
            {
                <Link to={"/"}><button>Go Home</button></Link>
            }
        </div>
    );
};

export default Error;