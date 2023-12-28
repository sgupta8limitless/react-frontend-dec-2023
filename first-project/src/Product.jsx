function Product(props)
{

    

    console.log(props);

    let {name,price,specs,category} = props;

    return (
       <div className="product">

                <h3>{name}</h3>
                <h4>{price}</h4>
                <h4>{specs.ram}</h4>
                <h3>{category[1]}</h3>

       </div>
    )
}


export default Product;

