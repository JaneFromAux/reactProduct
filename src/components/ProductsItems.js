const ProductsItems = (props) => {
    return (
        <section>
            <img src={props.url} alt="productExample" />
            <h4>{props.name}</h4>
            <h3>{props.price}</h3>
        </section>
    );
}

export default ProductsItems;