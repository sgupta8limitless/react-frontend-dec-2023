import { useEffect, useState } from "react"


function Products(){

   

    //1. By Default useEffect is called for every render and rerender
    //2. if you pass a second param as a blank array it will be only called for first render
    //3. if you pass variables in dependency array - 
    //useeffect will still be called for first render-
    // it will also be called if the value of the variable in the dependency array changes changes 
    //4. You can have multiple useEffects in a single component
    
    // useEffect(()=>{
    //     console.log("Component Mounted");

    //     return ()=>{
    //         console.log("Component gone");
    //     }

    // },[price])

    let [products,setProducts] = useState([]);

    useEffect(()=>{

        fetch('https://fakestoreapi.com/products')
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
           setProducts(data);
        })
        .catch((err)=>{
            console.log(err);
        })

    },[])



  return (
    <div className="products">

        {
            products.map((product,index)=>{

                return (
                    <div className="product" key={product.id}>
                        <div className="image-wrapper">
                            <img className="p-image" src={product.image} alt="product" />
                        </div>
                        <h1 className="p-title">{product.title}</h1>
                        <h3>{product.price}</h3>
                    </div>
                )

            })
        }
       
    </div>
  )
}

export default Products
