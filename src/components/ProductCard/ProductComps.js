import { styled } from "styled-components";

export const ProductCard = styled.div`
background-color:white;
height:500px;
width:250px;
display:flex;
border-radius:5px;
flex-direction:column;
justify-content:center;
align-items:center;
overflow:hidden;
@media screen and (max-width: 720px) {
    width:200px;
  }
`
export const ProductImg = styled.img`
width:100%;
height:100%;
object-fit:contain;
`
export const ProductTitle = styled.p`
font-size:1.5rem;
margin:0;
padding:3px;
text-align:center;
@media screen and (max-width: 720px) {
    font-size:1.2rem;
  }
`
export const ProductDesc = styled.p`
text-align:center;
margin:0;
`
export const ProductRating = styled.div`
text-align:center;
margin:0;

`
export const ProductPrice = styled.p`
text-align:center;
margin:0;

`
export const ProductButton = styled.button`
padding: 10px 30px;
border-radius:5px;
border:none;
background-color:blue;
margin-bottom:10px;
`

export const ProductDataDiv = styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:10px;
`
