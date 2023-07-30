import { styled } from "styled-components";

export const MainContainer = styled.div`
width:90%;
margin:100px;
display:flex;
justify-content:center;
align-items:center;
@media screen and (max-width: 910px) {
  width:100%;
  margin:0;
margin-top:100px;
}
`

export const FilterAndProductContainer = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:flex-start;
margin:1rem;
justify-content:center;
`

export const FiltersDiv = styled.div`
min-width:20%;
height:100%;
@media screen and (max-width: 910px) {
    display:none;
  }
`


export const CategoryProductsDiv = styled.div`
width:100%;
height:100%;
`
export const CategoryHeading = styled.p`
font-size:2rem;
margin:0;
`
export const CategoryDetails = styled.h2`
font-size:1rem;
`

export const CategoryDiv = styled.div`
width: 50%;
display:flex;
flex-direction:column;
border-radius:10px;
align-items:center;
justify-content:center;
transition:0.3s;
@media screen and (max-width: 910px) {
    width:100%;

  }
`

export const SortDiv = styled.div`
width:50%;
background-color:transparent;
border-radius:10px;
display:flex;
align-items:center;
justify-content:center;
    transition:0.3s;
    gap:1rem;
@media screen and (max-width: 910px) {
    width:100%;
    padding:1rem 0;

  }
`
export const SelectSort = styled.select`
width:10rem;
height:2rem;
border:none;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
`

export const CategorySortDiv = styled.div`
width:100%;
height:auto;
display:flex;
gap:1rem;
flex-direction:row;
justify-content:center;
align-items:center;
margin-top:1rem;
@media screen and (max-width: 910px) {
flex-direction:column;
  }
`
export const ShowFilters = styled.button`
display:none;
padding:9px 20px;
border:none;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
border-radius:5px;
cursor:pointer;
background-color:white;
@media screen and (max-width: 910px) {
  display:block;
    }
`

export const ProductContainer = styled.div`
width:100%;
margin-top:1rem;
display: flex;
flex-wrap:wrap;
gap:1.5rem;
justify-content:center;
align-items:center;
`