import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {removeCar} from "../Redux/store/index";

const CarList= ()=>{

    const dispatch=useDispatch()

    const cars= useSelector(({cars:{cars,searchTerm}})=>{
        return cars.filter((car)=> car.name.toLowerCase().includes(searchTerm.toLowerCase()))
    })
    
    const handleCarDelete=(car)=>{
        dispatch(removeCar(car.id))
    }

    const renderedCars = cars.map((car)=>{
        return(
            <div key={car.id} className="flex w-2/3 justify-between mx-5 py-2 items-center border-b shadow-md">
                <p className="font-semibold text-xl">{car.name} - ${car.cost}</p>
                <button onClick={()=>handleCarDelete(car)} className="p-2 border-2 bg-red-500 text-white font-semibold">Delete</button>
            </div>
        )
    })

    return(
        <div className="border block mx-10 w-1/2 my-5">
            {renderedCars }
        </div>
    )
}

export default CarList;