import { useEffect } from "react"
import { useNavigate } from 'react-router';


function Home() {
    let navigate = useNavigate();
    // useEffect(() => {
    //     // if(!localStorage.getItem("user_token")){

    //         navigate("/")
    //     // }
    
    // }, [])


    return (<>
        <h1>Welcome to Our Company</h1>
        <h2>Web Site Main Ingredients:</h2>

        <p>Pages (HTML)</p>
        <p>Style Sheets (CSS)</p>
        <p>Computer Code (JavaScript)</p>
        <p>Live Data (Files and Databases)</p>
    </>)
}
export default Home