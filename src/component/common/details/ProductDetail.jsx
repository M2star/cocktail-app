import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSingleCocktails } from '../../../redux/featcherFile/CocktailSlicer'
import { useDispatch, useSelector } from "react-redux";

// import './style.css'


const ProductDetails = () => {
  const navigate = useNavigate()

  const [modifendCocktail, setmodifendCocktail] = useState([]);
  const { loading, cocktail } = useSelector((state) => ({ ...state.app }));
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchSingleCocktails({ id }));
  }, [dispatch, id]);

  useEffect(() => {
    if (cocktail.length > 0) {
      const {
        strDrink: name,
        strDrinkThumb: img,
        strAlcoholic: info,
        strCategory: category,
        strInstructions: instructions,
        strGlass: glass,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = cocktail[0];
      
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      const newCocktail = {
        name,
        img,
        info,
        category,
        glass,
        ingredients,
        instructions,

      };
      setmodifendCocktail(newCocktail);
    } else {
      setmodifendCocktail(null);
    }
  }, [id, cocktail]);

  if (!modifendCocktail) {
    return <h2>No Cocktail Details</h2>;
  } else {
    const { name, img, info, category, glass, instructions, ingredients } = modifendCocktail;
    return (
      <>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <div>
            
            <div className="container">
              <div className="row ">
                <div className="col">
                  <img src={img} alt={name} height={300} width={400} />
                </div>
                <div className="col">
                  <h2>Name : {name}</h2>
                  <p className="category">Category : {category}</p>
                  <p>Info : {info}</p>
                  <p>Glass : {glass}</p>
                  <p>intruction : {instructions}</p>
                  <p>Ingredients : {ingredients + ","}</p>
                </div>
              </div>
            </div>
            <div className="btn">
              <button onClick={() => navigate('/')} className='btn-info'>
                <i className='fas fa-long-arrow-alt-right'></i>Go Back
              </button>

            </div>
        
          </div>
        )}
      </>
    );
  }
};

export default ProductDetails;
