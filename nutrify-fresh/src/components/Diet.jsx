import { useEffect, useRef, useState } from "react"
import { UserContext } from "../contexts/UserContext"
import { useContext } from "react"
import Header from './Header'

export default function Diet()
{

    let loggedData = useContext(UserContext)
    const [items,setItems] = useState([]);

    const [date,setDate] = useState(new Date())

    let [total,setTotal] = useState({
        totalCaloreis:0,
        totalProtein:0,
        totalCarbs:0,
        totalFats:0,
        totalFiber:0
    })


    useEffect(()=>{

        fetch(`http://localhost:8000/track/${loggedData.loggedUser.userid}/${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`,{
            method:"GET",
            headers:{
                "Authorization":`Bearer ${loggedData.loggedUser.token}`
            }
        })
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setItems(data);
        })
        .catch((err)=>{
            console.log(err);
        })

    },[date])


    useEffect(()=>{
        calculateTotal();
    },[items])


    function calculateTotal()
    {



        let totalCopy = {
            totalCaloreis:0,
            totalProtein:0,
            totalCarbs:0,
            totalFats:0,
            totalFiber:0
        };

        items.forEach((item)=>{
            totalCopy.totalCaloreis += item.details.calories;
            totalCopy.totalProtein += item.details.protein;
            totalCopy.totalCarbs += item.details.carbohydrates;
            totalCopy.totalFats += item.details.fat;
            totalCopy.totalFiber += item.details.fiber;

        })

        setTotal(totalCopy);


    }

    return (
        <section className="container diet-container">

                <Header/>


                <input type="date" onChange={(event)=>{
                 setDate(new Date(event.target.value));
                }}/>



                {
                    items.map((item)=>{

                       
                        return (
                            <div className="item" key={item._id}>

                                <h3>{item.foodId.name} ( {item.details.calories} Kcal for {item.quantity}g )</h3>

                                <p>Protein {item.details.protein}g, Carbs {item.details.carbohydrates}g, Fats {item.details.fat}g, Fiber {item.details.fiber}g</p>

                            </div>
                        )
                    })
                }


        <div className="item">

            <h3>  {total.totalCaloreis} Kcal </h3>

            <p>Protein {total.totalProtein}g, Carbs {total.totalCarbs}g, Fats {total.totalFats}g, Fiber {total.totalFiber}g</p>

        </div>


                





        </section>
    )

}