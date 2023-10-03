import Card from "../UI/Card"

const Product = ({ id, image, name, category, desc, link }) => {
    return (
        <>
            <Card className="product">
                <div className="product_image">
                    <img src={image} alt={ name } />
                </div>
                <h3>{name}</h3>
                <h4>{category}</h4>
                <p>{desc}</p>
                {/*<a href={ link } className="button" key={ id }>More Details</a>*/}
            </Card>
        </>
    )
};

export default Product