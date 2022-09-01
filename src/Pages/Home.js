import React from "react";
import { useSelector } from "react-redux/es/exports";
const Home = () => {
    const data = useSelector(state => state)
    return(
        <div>
            <h1>Test</h1>
            <h1>{data.dataReducer.data}</h1>
        </div>
    )
}
export default Home