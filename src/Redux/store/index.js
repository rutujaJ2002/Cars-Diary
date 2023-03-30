import { configureStore } from "@reduxjs/toolkit";

import {
    carsReducer,
    addCar,
    removeCar,
    changeSearchTerm
} from "../slices/CarsListSlice";

import {
    carCreationReducer,
    changeName,
    changeCost
} from "../slices/CarCreationSlice";

const store=configureStore({
    reducer:{
        cars:carsReducer,
        forms: carCreationReducer
    }
})

export {
    store, 
    changeName,
    changeCost,
    addCar,
    removeCar,
    changeSearchTerm
};