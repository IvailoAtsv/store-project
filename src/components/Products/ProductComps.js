import { styled } from "styled-components";

export const MainContainer = styled.div`
margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
max-width:1600px;
width:100%;
height:100vh;
margin:100px 0;
display:flex;
overflow:hidden;
`

export const FilterAndProductContainer = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:flex-start;
align-items:center;
margin:1rem;
`

export const FiltersDiv = styled.div`
min-width:15%;
height:100%;
overflow:hidden;
@media screen and (max-width: 800px) {
    display:none;
  }
`


export const CategoryProductsDiv = styled.div`
width:100%;
height:100%;
`
export const CategoryHeading = styled.h1`
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
background-color:#dcdcdc;
border-radius:10px;
align-items:center;
justify-content:center;
transition:0.3s;
@media screen and (max-width: 800px) {
    width:100%;

  }
`

export const SortDiv = styled.div`
width:50%;
background-color:#dcdcdc;
border-radius:10px;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
padding:1rem;
    transition:0.3s;
    gap:1rem;
@media screen and (max-width: 800px) {
    width:100%;
    padding:1rem 0;

  }
`
export const SelectSort = styled.select`
width:10rem;
margin-top:0.5rem;
height:2rem;
border:none;
border-radius: 2px;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
`

export const CategorySortDiv = styled.div`
width:100%;
height:auto;
display:flex;
gap:1rem;
justify-content:center;
margin-top:1rem;
@media screen and (max-width: 800px) {
    flex-direction:column;
  }
`

export const ProductContainer = styled.div`
width:100%;
height:100%;
`
