import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CarValue = ()=>{

    const totalCost = useSelector(({cars:{cars,searchTerm}})=>{
        const filteredCars = cars.filter((car)=>{
            return car.name.toLowerCase().includes(searchTerm.toLowerCase())
        });
        // let cost=0;
        // for(let i of filteredCars){
        //     cost += i.cost
        // }
        // return cost
        return filteredCars.reduce((acc,car)=>{
            return acc+car.cost
        },0);
    })

    return(
        <div className="flex w-full justify-between items-center my-5">
            <p className="text-xl font-semibold">Total cost :</p>
            <h2 className="font-bold text-3xl px-5 py-2 shadow-md">${totalCost}</h2>
        </div>
    )
}

export default CarValue;