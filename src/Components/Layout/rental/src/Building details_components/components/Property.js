import React, { useEffect } from 'react';

function PropertyDetail({ property }) {
  // 매물 데이터를 로컬 스토리지에 저장
  useEffect(() => {
    if (property) {
      localStorage.setItem('recentProperty', JSON.stringify({
        image: property.image,
        rent: property.rent,
        area: property.area,
        tag: property.tag
      }));
    }
  }, [property]);

  return (
    <div>
      <img src={property.image} alt="매물 사진" />
      <p>월세: {property.rent}</p>
      <p>면적: {property.area}</p>
      <p>태그: {property.tag}</p>
    </div>
  );
}

export default PropertyDetail;
