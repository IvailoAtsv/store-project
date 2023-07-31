import { useEffect, useReducer, useState } from "react"
import { FilterDiv, FilterForm, FilterLabel, FilterPair, FilterRange, FilterSubmit, FilterTitle, FiltersHeading, FiltersLi, FiltersUl, HideFiltersBtn, InputLabel } from "./FilterCops"
import { CategoryDetails, CategoryHeading, CategoryDiv, CategoryProductsDiv, CategorySortDiv, FilterAndProductContainer, FiltersDiv, MainContainer, ProductContainer, Filters, SortDiv, SelectSort, ShowFilters } from "./ProductComps"
import Product from "../ProductCard"
import { FaTimes } from 'react-icons/fa';

const Products = ({ data, category }) => {

    const [highest, setHighest] = useState()
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [uniqueColors, setUniqueColors] = useState([])
    const toggleFilters = () => {
        setIsFilterOpen(!isFilterOpen)
        console.log(isFilterOpen);
    }

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0)
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(data.sort((a, b) => a.name.localeCompare(b.name)))
    }, [category])


    //set a max price for filtering
    useEffect(() => {
        // Initialize the maxPrice variable with the price of the first product
        let maxPrice = parseFloat(data[0].price);

        // Loop through the array to find the maximum price
        for (const product of data) {
            const price = parseFloat(product.price);
            if (price > maxPrice) {
                maxPrice = price;
            }
        }
        setHighest(maxPrice + 0.01)
    }, [category])
    useEffect(() => {
        // Initialize a Set to store the UNIQUE colors
        const currentUniqueColors = new Set();

        // Loop through the array and add each color to the Set
        for (const product of data) {
            currentUniqueColors.add(product.color);
        }

        // Convert the Set back to an array if necessary
        const currentUniqueColorsArray = Array.from(currentUniqueColors);
        setUniqueColors([...currentUniqueColors])
    }, [category])


    const [maxPrice, setMaxPrice] = useState()

    const itemsFound = items.length;

    const sortItems = (e) => {
        if (e.target.value === 'A-Z') {
            setItems(prev => prev.sort((a, b) => a.name.localeCompare(b.name)))
            forceUpdate()
        }
        if (e.target.value === 'Z-A') {
            setItems(prev => prev.sort((a, b) => b.name.localeCompare(a.name)))
            forceUpdate()
        }
        if (e.target.value === 'Lowest') {
            setItems(prev => prev.sort((a, b) => a.price - b.price))
            forceUpdate()
        }
        if (e.target.value === 'Highest') {
            setItems(prev => prev.sort((a, b) => b.price - a.price))
            forceUpdate()
        }
    }


    const onFilter = (e) => {

        e.preventDefault()

        const formData = new FormData(e.currentTarget.parentElement)
        const dataArray = [...formData]
        const fullData = Object.fromEntries(dataArray);
        let currentFilters = []

        if (fullData.brown || fullData.white || fullData.blue) {

            if (fullData.brown) {
                currentFilters.push('brown')
            }
            if (fullData.white) {
                currentFilters.push('white')
            }
            if (fullData.blue) {
                currentFilters.push('blue')
            }
            setItems(data.filter((x) => currentFilters.includes(x.color)))

            currentFilters = []
        } else {
            setItems([...data])
        }
        if (fullData.price && fullData.price != 100) {
            setItems(prev => prev.filter(x => Number(x.price) < Number(maxPrice)))
        }
    }
    const updateValue = (e) => {
        setMaxPrice(Number(e.target.value))
    }

    return (
        <MainContainer >
            {/* container for filters, category, sort and products */}
            <FilterAndProductContainer>
                <FiltersDiv isFilterOpen={isFilterOpen}>
                    <FiltersUl>
                        <FiltersHeading>
                            <HideFiltersBtn onClick={toggleFilters}><FaTimes /></HideFiltersBtn>
                            <FilterTitle style={{ fontWeight: "bold", fontSize: '2.5rem' }}>Filters</FilterTitle>
                        </FiltersHeading>

                        <FilterForm>
                            <FiltersLi>
                                <FilterDiv >
                                <FilterLabel>Color</FilterLabel>

                                    {
                                        uniqueColors.map(color => {
                                            return (
                                                <FilterPair>
                                                    <input type="checkbox" name={color} />
                                                    <InputLabel>{color}</InputLabel>
                                                </FilterPair>
                                            )
                                        })
                                    }
                                </FilterDiv>

                            </FiltersLi>
                            <FiltersLi>
                                <FilterDiv >
                                    <FilterLabel>Max Price </FilterLabel>
                                    <FilterLabel> {maxPrice || highest} </FilterLabel>
                                    <FilterRange name="price" type="range" min="1" max={highest} defaultValue="100" onChange={updateValue}></FilterRange>
                                </FilterDiv>
                            </FiltersLi>
                            <FilterSubmit type="submit" value="Filter" onClick={(e) => onFilter(e)} />
                        </FilterForm>
                    </FiltersUl>
                </FiltersDiv>
                {/* container for category titles and sort menu */}
                <CategoryProductsDiv>
                    {/* category */}
                    <CategorySortDiv>
                        <CategoryDiv>
                            <CategoryHeading>
                                Showing {itemsFound} items in {category}
                            </CategoryHeading>
                        </CategoryDiv>

                        <SortDiv>
                            <FilterLabel>Sort by:</FilterLabel>
                            <SelectSort onChange={(e) => sortItems(e)}>
                                <option> A-Z </option>
                                <option> Z-A </option>
                                <option> Lowest </option>
                                <option> Highest </option>
                            </SelectSort>
                            <ShowFilters onClick={toggleFilters}>Filters</ShowFilters>
                        </SortDiv>
                    </CategorySortDiv>
                    {/* Products */}

                    <ProductContainer>
                        {items.length
                            ? items.map((item, index) => {
                                return (
                                    <Product
                                        key={index}
                                        name={item.name}
                                        image={item.image}
                                        description={item.description}
                                        price={item.price}
                                        rating={item.rating}
                                    />)
                            })
                            : <h1>No items found!</h1>}
                    </ProductContainer>
                </CategoryProductsDiv>
            </FilterAndProductContainer>
        </MainContainer>
    )
}
export default Products