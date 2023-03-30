import {createSlice,nanoid} from '@reduxjs/toolkit'

const carsListSlice = createSlice({
    name:'cars',
    initialState:{
        searchTerm:'',
        cars:[]
    },
    reducers:{
        changeSearchTerm(state,action){
            state.searchTerm=action.payload
        },
        addCar(state,action){
            state.cars.push({
                id: nanoid(),
                name:action.payload.name,
                cost:action.payload.cost
            })
        },
        removeCar(state,action){
            const updated =state.cars.filter((car)=>{
                return car.id!==action.payload;
            })
            state.cars=updated;
        }
    }
})

export const { addCar, removeCar, changeSearchTerm}=carsListSlice.actions;
export const carsReducer= carsListSlice.reducer;