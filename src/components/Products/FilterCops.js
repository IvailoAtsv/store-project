import { styled } from "styled-components";

export const FiltersUl = styled.ul`
  width:80%;
  height:100%;
  list-style-type:none;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
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
background-color:rgba(255,255,255,.90);
width:100%;
padding:1rem;
border-radius:5%;
height:200px;
width:150px;

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
gap:1rem;
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
background-color:blue;
border:none;
margin-top:10px;
min-width:150px;
padding:10px 0;
border-radius:5px;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 910px) {
    padding:10px 40px;
    width:60%;
  }
`
export const FilterTitle = styled.p`
font-size:2.4rem;
font-weight:550;
display:none;
@media screen and (max-width: 910px) {
  display:block;
    }
`
export const HideFiltersBtn = styled.button`
background-color:transparent;
font-size:2rem;
margin-top:10px;
display:none;
border-radius:50%;
border:none;
cursor:pointer;
:hover{
  transition:0.5s;
  
}
  @media screen and (max-width: 910px) {
    display:block;
  }

`
export const FiltersHeading = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`