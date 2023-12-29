function Country(props)
{
    return (
        <div className="country">

            <h1>{props.name}</h1>
            <h3>{props.capital}</h3>
            <p>{props.pop}</p>

        </div>
    )
}

export default Country;