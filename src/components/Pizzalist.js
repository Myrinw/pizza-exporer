import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectPizzasWithFavourites, selectUser, totalPizzas } from '../store/selector';



export default function PizzaList() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const pizzaNumber = useSelector(totalPizzas);
    const pizzaList = useSelector(selectPizzasWithFavourites);


    const pizzaSort = pizzaList.sort((a, b) => b.bought - a.bought);

    const pizzamap = pizzaSort.map(piz => {
        function toggle() {
            dispatch({
                type: "TOGGLE_FAVOURITE_PIZZA",
                payload: piz.id,
            })
        }
        return <li key={piz.id}>
            {piz.name},
                {piz.description},
                {piz.bought}
            <button onClick={toggle}> {piz.isFavourite ? "favourite!" : "not favourite!"} </button>
        </li>
    });


    return (
        <div>
            <h1>Pizza Explorer</h1>
            <p>
                Welcome back, <strong>{user.name}</strong>! Your favorite pizzas:
            </p>
            <p>number of pizzas: {pizzaNumber}</p>
            <ul>
                {pizzamap}
            </ul>
            <p>TODO: the list of pizzas</p>
        </div>
    );
}