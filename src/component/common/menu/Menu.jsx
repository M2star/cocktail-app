import React, { useMemo } from 'react'
import { fetchCocktails } from '../../../redux/featcherFile/CocktailSlicer'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { useState } from 'react';
import MenuItem from "./menuItem/MenuItem"
import'./menu.css'




const Menu = () => {
  const [modified, setModified] = useState([])
  

  const [selectedCategory, setSelectedCategory] = useState();

  const { loading, cocktails, error } = useSelector((state) => ({ ...state.app, }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCocktails());
  }, [dispatch]);



  useEffect(() => {
    if (cocktails) {
      const newCocktail = cocktails.map((item) => {
        const { idDrink, strCategory, strAlcoholic, strDrinkThumb, strGlass, strDrink } = item;
        return {
          id: idDrink,
          info: strAlcoholic,
          img: strDrinkThumb,
          glass: strGlass,
          name: strDrink,
          categories: strCategory
        }
      })
      setModified(newCocktail)

    }
    else {
      setModified([])
    }
  }, [cocktails]);



  function getFilteredList() {

    if (!selectedCategory) {
      return modified;
    }

    return modified.filter((item) => item.categories === selectedCategory || item.info === selectedCategory)

  }
  var filteredList = useMemo(getFilteredList, [selectedCategory, modified]);


  if (loading) {
    return (<h3>Loading...</h3>)
  }
  if (!cocktails) {
    <Menu >
      <h2>Not this cocktail are present</h2>
    </Menu>

  }

  if (error) {
    return (<p>{error.massage}</p>)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    // dispatch ()
  }
  return (
    <div>

    
      <div className="filter-container">
        <div className='filter-title'>Filter by Category:</div>
        <div>
          <select
            name="category-list"
            id="category-list"
            className='shadow p-3 mb-2 bg-body rounded'
            onChange={handleCategoryChange}>
            <option value="">All</option>
            <option value='Ordinary Drink'>Ordinary Drink</option>
            <option value='Cocktail'>Cocktail</option>
            <option value='Alcoholic'>Alcoholic</option>
            <option value='Optional alcohol'>Optional alcohol</option>
          </select>
        </div>
      </div>
    
      <div className="sport-list ">
      </div>
      {filteredList.map((item) => (
        

          <MenuItem  key={item.id}
          id={item.id}
    img={item.img}
    name={item.name}
    glass={item.glass}
    info={item.info}
    /> 
          
         
      
        ))}
        
          </div>
  );
}
export default Menu