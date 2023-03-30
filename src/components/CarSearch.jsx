import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../Redux/store";

const CarSearch= ()=>{

    const dispatch=useDispatch();

    const searchTerm = useSelector((state)=>{
        return state.cars.searchTerm;
    })

    const handleSearchTermChange=(e)=>{
        dispatch(changeSearchTerm(e.target.value))
    }

    return(
        <div className="flex w-full justify-between px-2 my-5 items-center">
            <h3 className="font-semibold text-2xl">My Cars</h3>
            <div className="flex gap-1 items-center">
                <label className="text-xl">Search:</label>
                <input type="text" value={searchTerm} onChange={handleSearchTermChange} className="border p-1" placeholder="Search for cars here..."/>
            </div>
        </div>
    )
}

export default CarSearch;