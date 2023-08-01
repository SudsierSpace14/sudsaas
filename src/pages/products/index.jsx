import { Fragment } from "react"
import ProductCard from "src/products/components/Card"
import supabase from 'supabase'

export default function ProductsPage({ products }) {
    // console.log(products)
    return (
        <Fragment>
            <div className="section bg-blue">
                <div className="container">
                    <div className="section-intro">
                        <h1>Latest Products</h1>
                    </div>
                </div>
            </div>

            <div className="section small">
                <div className="container">
                    <ul className="product-card-grid">
                        {products.map(product => (
                            <ProductCard product={product} key={product.slug}/>
                        ))}
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}


export async function getStaticProps() {
    const { data: products, error } = await supabase.from("product").select("*")

    return {
        props: {
            products
        }
    }
}
