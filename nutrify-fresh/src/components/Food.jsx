import { useEffect, useState } from "react"
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

export default function Food(props)
{

    const [eatenQuantity,setEatenQuantity] = useState(100);
    const [food,setFood] = useState({});
    const [foodInitial,setFoodInital] = useState({});
    let loggedData = useContext(UserContext);


    

    useEffect(()=>{
       setFood(props.food);
       setFoodInital(props.food);

       console.log(loggedData);
       
    },[props.food])

  
    function calculateMacros(event)
    {


            if(event.target.value.length!=0)
            {
                let quantity = Number(event.target.value);
                setEatenQuantity(quantity);

                let copyFood = {...food};

                copyFood.protein = (foodInitial.protein*quantity)/100;
                copyFood.carbohydrates = (foodInitial.carbohydrates*quantity)/100;
                copyFood.fat = (foodInitial.fat*quantity)/100;
                copyFood.fiber = (foodInitial.fiber*quantity)/100;
                copyFood.calories = (foodInitial.calories*quantity)/100;

                setFood(copyFood);
            }

            

        
    }


    function trackFoodItem()
    {
        let trackedItem = {
            userId:loggedData.loggedUser.userid,
            foodId:food._id,
            details:{
                protein:food.protein,
                carbohydrates:food.carbohydrates,
                fat:food.fat,
                fiber:food.fiber,
                calories:food.calories
            },
            quantity:eatenQuantity
        }


        console.log(trackedItem);

        fetch("http://localhost:8000/track",{
            method:"POST",
            body:JSON.stringify(trackedItem),
            headers:{
                "Authorization":`Bearer ${loggedData.loggedUser.token}`,
                "Content-Type":"application/json"
            }
        })
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
        })
        .catch((err)=>{
            console.log(err);
        })


    }

    return (
        <div className="food">

            <div className="food-img">
                <img className="food-image" src={food.imageUrl}/>
            </div>

            <h3>{food.name} ({food.calories} Kcal for {eatenQuantity}G)</h3>

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


            <div className="track-control">

                <input type="number" onChange={calculateMacros}
                className="inp" placeholder="Quantity in Gms"/>

                <button className="btn" onClick={trackFoodItem}>Track</button>


            </div>

            

            




        </div>
    )
}