import { useState } from "react"
import { FilterDiv, FilterLabel, FilterPair, FilterRange, FiltersLi, FiltersUl, InputLabel } from "./FilterCops"
import { CategoryDetails, CategoryHeading, CategoryDiv, CategoryProductsDiv, CategorySortDiv, FilterAndProductContainer, FiltersDiv, MainContainer, ProductContainer, Filters, SortDiv, SelectSort } from "./ProductComps"
import bagData from "../../data/bags"
import { ProductCard } from "../ProductCard/ProductComps"
import Product from "../ProductCard"
const Products = () => {

    const [maxPrice, setMaxPrice] = useState()

    const updateValue = (e) => {
        setMaxPrice(e.target.value)
    }

    return (
        <MainContainer >
            {/* container for filters, category, sort and products */}
            <FilterAndProductContainer>
                <FiltersDiv>
                    <FiltersUl>
                        <FiltersLi>
                            <FilterLabel>Color</FilterLabel>
                            <FilterDiv >
                                <FilterPair>
                                    <input type="checkbox" name="white" />
                                    <InputLabel>white</InputLabel>
                                </FilterPair>
                                <FilterPair>
                                    <input type="checkbox" name="black" />
                                    <InputLabel>black</InputLabel>
                                </FilterPair>
                                <FilterPair>
                                    <input type="checkbox" name="pink" />
                                    <InputLabel>pink</InputLabel>
                                </FilterPair>
                            </FilterDiv>

                        </FiltersLi>
                        <FiltersLi>
                            <FilterDiv >
                                <FilterLabel>Max Price </FilterLabel>
                                <FilterLabel> {maxPrice || 50} </FilterLabel>
                                <FilterRange type="range" min="1" max="100"  onChange={updateValue}></FilterRange>
                            </FilterDiv>
                        </FiltersLi>

                    </FiltersUl>
                </FiltersDiv>
                {/* container for category titles and sort menu */}
                <CategoryProductsDiv>
                    {/* category */}
                    <CategorySortDiv>
                        <CategoryDiv>
                            <CategoryHeading>
                                Bags
                            </CategoryHeading>
                            <CategoryDetails>
                                17 items
                            </CategoryDetails>
                        </CategoryDiv>
                        <SortDiv>
                            <FilterLabel>Sort by:</FilterLabel>
                            <SelectSort>
                                <option> A-Z</option>
                                <option> Z-A</option>
                                <option> Price </option>
                                <option> Price </option>
                            </SelectSort>
                        </SortDiv>
                    </CategorySortDiv>
                    {/* Products */}
                    {bagData.map((item,index) => {
                        return(
<Product name={item.name} image={item.image} description={item.description} price={item.price} rating={item.rating} />)
                        })}
                     
                    <ProductContainer>

                    </ProductContainer>
                </CategoryProductsDiv>
            </FilterAndProductContainer>
        </MainContainer>
    )
}
export default Products