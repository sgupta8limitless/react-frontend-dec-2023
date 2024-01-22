import { useEffect, useState } from "react"

export default function Food(props)
{

    const [quantity,setQuantity] = useState(100);
    const [food,setFood] = useState({});
    const [foodInitial,setFoodInital] = useState({});
    

    useEffect(()=>{
       setFood(props.food);
       setFoodInital(props.food);
    },[props.food])


    function handleInput(event)
    {
        setQuantity(Number(event.target.value));
    }
  

    function calculateMacros()
    {
        

            let copyFood = {...food};

            copyFood.protein = (foodInitial.protein*quantity)/100;
            copyFood.carbohydrates = (foodInitial.carbohydrates*quantity)/100;
            copyFood.fat = (foodInitial.fat*quantity)/100;
            copyFood.fiber = (foodInitial.fiber*quantity)/100;
            copyFood.calories = (foodInitial.calories*quantity)/100;

            console.log(copyFood);

            setFood(copyFood);

           
        
        
    }

    return (
        <div className="food">

            <div className="food-img">
                <img className="food-image" src={food.imageUrl}/>
            </div>

            <h3>{food.name} ({food.calories} Kcal for {quantity}G)</h3>

            <div className="nutrient">
                <p className="n-title">Protein</p>
                <p className="n-value">{food.protein}g</p>
            </div>

            <div className="nutrient">
                <p className="n-title">Carbs</p>
                <p className="n-value">{food.carbohydrates}g</p>
            </div>

            <div className="nutrient">
                <p className="n-title">Fat</p>
                <p className="n-value">{food.fat}g</p>
            </div>

            <div className="nutrient">
                <p className="n-title">Fibre</p>
                <p className="n-value">{food.fiber}g</p>
            </div>

            <input type="number" onChange={handleInput}
             className="inp" placeholder="Quantity in Gms"/>

             <button onClick={calculateMacros}>Calculate</button>

            <button className="btn">Track This Food</button>



        </div>
    )
}