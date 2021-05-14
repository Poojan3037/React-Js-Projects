import React from 'react'

import { useParams, Link, NavLink } from 'react-router-dom'

export default function SingleCocktail() {
    const { id } = useParams()
    const [loading, setLoading] = React.useState(false)
    const [cocktail, setCocktail] = React.useState(null)

    React.useEffect(() => {
        setLoading(true)
        async function getCocktail() {
            try {
                const response = await fetch(
                    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
                )
                const data = await response.json()
                if (data.drinks) {
                    const {
                        strDrink: name,
                        strDrinkThumb: image,
                        strAlcoholic: info,
                        strCategory: category,
                        strGlass: glass,
                        strInstructions: instructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    } = data.drinks[0]
                    const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    ]
                    const newCocktail = {
                        name,
                        image,
                        info,
                        category,
                        glass,
                        instructions,
                        ingredients,
                    }
                    setCocktail(newCocktail)
                } else {
                    setCocktail(null)
                }
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        getCocktail()
    }, [id])



    if (loading) {
        return (
            <>
                <div className="container">
                    <div className="about">
                        <h1>loading....</h1>
                    </div>
                </div>
            </>
        )
    }
    if (!cocktail) {
        return <h2 className='section-title'>no cocktail to display</h2>
    } else {
        const {
            name,
            image,
            category,
            info,
            glass,
            instructions,
            ingredients,
        } = cocktail

        let newIng=ingredients.filter((item)=>item!==null)

        return ( 
            <>
                <div className="container">
                    <div className="show-data">
                        <div className="header">
                            <NavLink to="/" className="btn">Back to home</NavLink>
                        </div>
                        <div className="show-info">
                            <div className="show-img">
                                <img id="img" src={image} alt={name}></img>
                            </div>
                            <div className="show-content">
                                <h3><span className="active-span">Name : </span>{name}</h3>
                                <h3><span className="active-span">Category : </span>{category}</h3>
                                <h3><span className="active-span">Info : </span>{info}</h3>
                                <h3><span className="active-span">Glass : </span>{glass}</h3>
                                <h3><span className="active-span">Instruction : </span>{instructions}</h3>
                                <h3><span className="active-span">Ingredients : </span>{newIng.map((item)=>{
                                    return (
                                        <span>{item} , </span>
                                    );
                                })}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}