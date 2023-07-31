import { ProductCard, ProductDesc, ProductImg, ProductTitle, ProductRating, ProductPrice, ProductButton, ProductDataDiv, Discounted, DiscDiv } from "./ProductComps"
import { FaStar } from 'react-icons/fa'
const Product = ({ image, name, description, price, rating, discounted }) => {

    const addToCart = (e) => {

    }

    return (
        <ProductCard>
            <ProductImg src={image} />
            <ProductDataDiv>
                <ProductTitle className="name"> {name} </ProductTitle>
                <ProductRating> {[...Array(5)].map((star, index) => {

                    return (
                        <label>
                            <input
                                type="radio"
                                name="rating"
                                value={rating}
                            />
                            <FaStar key={index} color={rating > index
                                ? "#ffc107" : "#e4e5e9"}
                                size="25"
                            />
                        </label>
                    )
                })} </ProductRating>
                <ProductDesc> {description} </ProductDesc>
                {discounted
                    ? <DiscDiv><Discounted> {price} BGN </Discounted><ProductPrice> {discounted} BGN </ProductPrice></DiscDiv>
                    : <ProductPrice> {price} BGN </ProductPrice>
                }
                <ProductButton onClick={(e) => alert(`${e.currentTarget.parentElement.querySelector('.name').innerHTML} added to cart`)}>Add to cart </ProductButton>
            </ProductDataDiv>
        </ProductCard>
    )
}
export default Product