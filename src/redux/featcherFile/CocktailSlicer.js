import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCocktails = createAsyncThunk("cocktails/fetchCocktails", async () => {
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=').then((res) => res.json());
}
);


export const fetchSearchCocktails = createAsyncThunk("cocktails/fetchCocktails", async ({ searchText }) => {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`).then((res) => res.json());
}
);

export const fetchSingleChocktails = createAsyncThunk(
    'cocktails/fetchSingleChocktails',
    async({id}) =>{
        return fetch (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then((res)=>res.json())
    }
)

export const fetchAlcohol = createAsyncThunk(
    'cocktails/fetchSingleCocktails',
    async({category}) =>{
        return fetch (`www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`).then((res)=>res.json())
    }
)



const cocktailSlice = createSlice({
    name: 'cocktails',
    initialState: {
        laoding: false,
        cocktails: [],
        error: null,
        cocktail: [],
    },

    extraReducers: {
        [fetchCocktails.pending]: (state, action) => {
            state.laoding = true;
        },
        [fetchCocktails.fulfilled]: (state, action) => {
            state.laoding = false;
            state.cocktails = action.payload.drinks

        },
        [fetchCocktails.rejected]: (state, action) => {
            state.laoding = false;
            state.cocktails = action.paylaod

        },

        [fetchSingleChocktails.pending]:(state ,action) =>{
            state.loading = true
        },
        [fetchSingleChocktails.fulfilled]:(state,action) =>{
            state.loading =false;
            state.cocktail = action.payload.drinks  
        },
        [fetchSingleChocktails.rejected]:(state,action) =>{
            state.loading =false;
            state.cocktail = action.paylaod
        },






        [fetchSearchCocktails.pending]: (state, action) => {
            state.loading = true
        },
        [fetchSearchCocktails.fulfilled]: (state, action) => {
            state.loading = false;
            state.cocktails = action.payload.drinks
        },
        [fetchSearchCocktails.rejected]: (state, action) => {
            state.loading = false;
            state.cocktails = action.paylaod
        },


        [fetchAlcohol.pending]: (state, action) => {
            state.loading = true
        },
        [fetchAlcohol.fulfilled]: (state, action) => {
            state.loading = false;
            state.alcohole = action.payload.drinks
        },
        [fetchAlcohol.rejected]: (state, action) => {
            state.loading = false;
            state.alcohole= action.paylaod
        },

    }
});


export default cocktailSlice.reducer