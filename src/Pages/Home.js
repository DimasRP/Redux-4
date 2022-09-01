import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getData } from "../Redux/actions/dataAction";
import { useEffect } from "react";
import dataReducer from "../Redux/reducers/dataReducer";

const Home = () => {
    // const data = useSelector(state => state)
    const {dataReducer} = useSelector((state) => state)
    const dispatch = useDispatch()
    console.log("data reducer", dataReducer);
    useEffect(()=> {
        dispatch(getData())
    },[])
    return(
        <div>
            <h1>Test</h1>
            {/* <h1>{data.dataReducer.data}</h1> */}
            {
                dataReducer.data.map((item) =>(
                    <>
                    <img src={item.avatar}/>
                    <p>{item.first_name}</p>
                    </>
                ))
            }
        </div>
    )
}
export default Home