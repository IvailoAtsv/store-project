import { ProductCard, ProductDesc, ProductImg, ProductTitle, ProductRating, ProductPrice } from "./ProductComps"

const Product = ({ image, name, description, price, rating }) => {

    return (
        <ProductCard>
            <ProductImg src={image} />
            <ProductTitle> {name} </ProductTitle>
            <ProductDesc> {description} </ProductDesc>
            <ProductPrice> {price} BGN </ProductPrice>
            <ProductRating> {rating} </ProductRating>
        </ProductCard>
    )
}
export default Product