import React, { useState } from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap
} from './FilterComponents';
import { FilterDiv, FilterForm, FilterLabel, FilterPair, FilterRange, FilterSubmit, FiltersLi, FiltersUl, InputLabel } from "../Products/FilterCops"

const Filters = ({ isFilterOpen, toggleFilters}) => {

  const [maxPrice, setMaxPrice] = useState()
  

  const onFilter = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget.parentElement)
    const dataArray = [...formData]
    const objData = Object.fromEntries(dataArray);
    const fullData = { ...objData }
    console.log(fullData);
}

const updateValue = (e) => {
    setMaxPrice(e.target.value)
}


  return (
    <SidebarContainer isFilterOpen={isFilterOpen} onClick={toggleFilters}>
      <Icon onClick={toggleFilters}>
        <CloseIcon />
      </Icon>
      <FilterForm>
        <FiltersLi>
          <FilterDiv >
            <FilterLabel>Color</FilterLabel>
            <FilterPair>
              <input type="checkbox" name="blue" />
              <InputLabel>blue</InputLabel>
            </FilterPair>
            <FilterPair>
              <input type="checkbox" name="white" />
              <InputLabel>white</InputLabel>
            </FilterPair>
            <FilterPair>
              <input type="checkbox" name="brown" />
              <InputLabel>brown</InputLabel>
            </FilterPair>
          </FilterDiv>

        </FiltersLi>
        <FiltersLi>
          <FilterDiv >
            <FilterLabel>Max Price </FilterLabel>
            <FilterLabel> {maxPrice || 100} </FilterLabel>
            <FilterRange name="price" type="range" min="1" max="100" defaultValue="100" onChange={updateValue}></FilterRange>
          </FilterDiv>
        </FiltersLi>
        <FilterSubmit type="submit" value="Filter" onClick={(e) => {
          toggleFilters()
          onFilter(e)}
         } />
      </FilterForm>
      <SideBtnWrap>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Filters;
