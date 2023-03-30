import React from "react";
import { useDispatch ,useSelector} from "react-redux";
import {addCar, changeCost, changeName} from "../Redux/store/index";

const CarForm= ()=>{

    const dispatch=useDispatch();
    const {name,cost} =useSelector((state)=>{
        return {
            name: state.forms.name,
            cost :state.forms.cost
        }
    })

    const handleNameChange=(e)=>{
        dispatch(changeName(e.target.value))
    }

    const handleCostChange=(e)=>{
        const carCost = parseInt(e.target.value)||0
        dispatch(changeCost(carCost))
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addCar({name,cost}))
        // dispatch(changeCost(0))
        // dispatch(changeName(""));
    }

    return(
        <div>
            <h4 className="text-3xl font-bold text-blue-600 m-2">Add Car</h4>
            <hr className="my-3"/>
                <form onSubmit={handleSubmit} className="my-5">
                    <div className="flex gap-5 w-full">
                        <div className="flex items-center">
                            <label htmlFor="name" className="font-semibold text-2xl mx-2">Name:</label>
                            <input type="text" value={name} onChange={handleNameChange} className=" border-2 p-2 my-2 text-xl"/>
                        </div>
                        <div className="flex items-center">
                            <label htmlFor="name" className="font-semibold text-2xl mx-2">Price:</label>
                            <input type="number" value={cost || ''} onChange={handleCostChange} className=" border-2 p-2 my-2 text-xl"/>
                        </div>
                        <div className="flex items-center">
                            <button className="border-2 border-black p-2 bg-gray-700 text-white" >Submit</button>
                        </div>
                    </div>
                </form>
                <hr/>
        </div>
    )
}

export default CarForm;