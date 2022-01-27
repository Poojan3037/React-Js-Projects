
import React, { useState, useEffect } from "react";
import Meal from "./Meal";
import './MealList.css'
import { useSelector, useDispatch } from "react-redux";
import { getMeals } from "../../reducers/fetchMealSlice";

const MealList = () => {

    const mealList = useSelector(state => state.meal.mealList);
    const loading = useSelector(state => state.meal.loading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMeals());
    }, [])

    return (
        <>
            <div className="meal-list-container">
                <div className="meal-list">
                    {
                        loading && mealList.length === 0 && <p>Loading...</p>
                    }
                    {
                        mealList.length > 0 && mealList.map((item) => {
                            return <Meal key={item.id} item={item} />
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default MealList;