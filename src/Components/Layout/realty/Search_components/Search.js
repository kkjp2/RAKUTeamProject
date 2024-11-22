const Search = (searchQuery) => {
    // 로컬 스토리지에서 houseDetailsList 가져오기
    const houseDetailsList = JSON.parse(localStorage.getItem('houseDetailsList')) || [];
    
    // 검색어로 필터링
    return houseDetailsList.filter(property =>
      property.name.includes(searchQuery) || property.address.includes(searchQuery) 
    );
  };
  
  export default Search;
  