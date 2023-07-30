import { styled } from "styled-components";

export const FiltersUl = styled.ul`
  width:80%;
  height:100%;
  list-style-type:none;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:1rem;
  padding:0;
  margin-top:70px;
`
export const FiltersLi = styled.li`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
gap:.5rem;
background-color:white;
width:100%;
padding:3rem;
height:200px;
`
export const FilterLabel = styled.label`
font-size:2rem;
text-align:center;
`
export const InputLabel = styled.label`
font-size:1.2rem;
width:100%;
`
export const FilterDiv = styled.div`
width:100%;
display: flex;
  flex-direction: column;
  width:100%;
  gap:1rem;
  margin:0 ;
  align-items:center;
  justify-content:center;
 
`
export const FilterPair = styled.div`
display: flex;
width:100%;
align-items:basline;
justify-content:justify;
  @media screen and (max-width: 910px) {
    justify-content:center;
  }
`
export const FilterRange = styled.input`
width:100%;
@media screen and (max-width: 910px) {
  width:100%;
    }
`
export const FilterForm = styled.form`
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
`
export const FilterSubmit = styled.input`
padding:10px 70px;
background-color:blue;
border:none;
margin-top:10px;
width:100%;
border-radius:5px;
  @media screen and (max-width: 910px) {
    padding:10px 40px;
    width:60%;
  }
`