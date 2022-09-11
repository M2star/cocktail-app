import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSingleChocktails } from '../../../redux/featcherFile/CocktailSlicer'
import { useDispatch, useSelector } from "react-redux";


import './style.css'
import Profile from "../../../page/profile/index";


const ProductDetails = () => {
  const navigate = useNavigate()

  const [modifendCocktail, setmodifendCocktail] = useState([]);
  const { loading, cocktail } = useSelector((state) => ({ ...state.app }));
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchSingleChocktails({ id }));
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
            <Profile />
            <div className="card text-white bg-dark mb-3" >
              <div className="card-header"><img src={img} alt="" /></div>
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{category}</p>
                <p className="card-text">{info}</p>
                <p className="card-text">{glass}</p>
                <p className="card-text">{instructions}</p>
                <p className="card-text">{ingredients}</p>
              </div>
            <div className="btn">
              <button onClick={() => navigate('/')} className='btn bg-primary d-flex d-lg-flex'>
                <i className='fas fa-long-arrow-alt-right'></i>Go Back
              </button>

            </div>
            </div>


          </div>
        )}
      </>
    );
  }
};

export default ProductDetails;
