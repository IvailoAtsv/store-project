import { styled } from "styled-components";

export const FiltersUl = styled.ul`
width:100%;
list-style-type:none;
display:flex;
flex-direction:column;
align-items:center;
gap:1rem;
padding:0;
`
export const FiltersLi = styled.li`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
gap:.5rem;
background-color:#dcdcdc;
width:80%;
border-radius:10%;
padding:3rem 1rem;
height:150px;
`
export const FilterLabel = styled.label`
font-size:2rem;
text-align:center;
`
export const InputLabel = styled.label`
font-size:1.2rem;

`
export const FilterDiv = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  gap:0.5rem;
  margin:0 ;
`
export const FilterPair = styled.div`
display: flex;
width:100%;
align-items:basline;
justify-content:justify;
`
export const FilterRange = styled.input`
width:100%;

`