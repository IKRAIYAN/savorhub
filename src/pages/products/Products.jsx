import "./products.css"
import { products } from "../../data"
import Product from "../../components/Product"

const Products = () => {
    return (
      <>
            <section className="products">
                <div className="container products_container">
                    {
                        products.map(({ id, image, name, category, desc }) => {
                          return <Product key={id} image={image} name={name} category={category} desc={desc} />
                        })
                    }
                </div>
            </section>
      </>
    );
}

export default Products