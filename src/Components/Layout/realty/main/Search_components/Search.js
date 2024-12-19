import { getAllHouseDetails } from '../../Building details_components/components/Build_Data';

const Search = async (query) => {
  try {
    const allHouses = await getAllHouseDetails();

    // 검색어에 기반한 필터링
    const filteredResults = allHouses.filter((house) => {
      const searchTerm = query.toLowerCase();
      return (
        house.name.toLowerCase().includes(searchTerm) ||
        house.address.toLowerCase().includes(searchTerm) ||
        house.fullAddress.toLowerCase().includes(searchTerm) ||
        house.prefecture.toLowerCase().includes(searchTerm)
      );
    });

    return filteredResults;
  } catch (error) {
    console.error("검색 실패:", error);
    return [];
  }
};

export default Search;
