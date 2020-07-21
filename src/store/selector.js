

export const selectPizzasWithFavourites = state => {
    const pizzasWithFavourites = state.pizzas.map(pizza => ({
        ...pizza,
        isFavourite: state.user.favourites.includes(pizza.id),

    }));
    return pizzasWithFavourites
}
export const selectUser = state => {
    return state.user;
};
export const totalPizzas = state => {
    return state.pizzas.length;
}
