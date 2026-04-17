import { useLoaderData } from "react-router";


const AppDetails = () => {
const appDeta =useLoaderData();
console.log(appDeta);
    return (
        <div>
            <h1>{appDeta?.title}</h1>
            <p>{appDeta?.description}</p>
        </div>
    );
};

export default AppDetails;