// src/Building_details_components/components/loadHouseDetails.js

const houseDetailsList = [
    // 위에 제공하신 매물 정보를 그대로 넣습니다.
    {
      name: 'あいうえお',
      address: '福岡県福岡市博多区上呉服町2-31',
      ymd: '2000/04/13',
      size: '18㎡',
      rent: '4.9万엔',
      type: 'RC(철근 콘크리트)',
      floors: '지상 3층',
      concierge: 'yamada_taro',
      reikin: 0,
      prvusage: '주거용',
      conciergecoment: '해당건축물은 오래되었지만 내부 인테리어를 리폼하여 세련해졌고 번화가 근처에 있고 하카타역과 가까워 타지역으로 이동이 편합니다.',
      dpsin: '단층',
      buildNum: '1',
      sell: 0,
      shikikin: '1.7만엔',
    },
    {
      name: 'テンジンタワー',
      address: '福岡県福岡市中央区天神2-1-1',
      ymd: '2015/11/30',
      size: '30㎡',
      rent: '8.5万엔',
      type: 'SRC(철골 철근 콘크리트)',
      floors: '지상 10층',
      concierge: 'nakamura_koichi',
      reikin: 1,
      prvusage: '상업용',
      conciergecoment: '이 건축물은 최근에 완공된 최신식 빌딩으로, 텐진 중심가에 위치해 있으며 다양한 상업시설과 교통이 편리합니다.',
      dpsin: '다층',
      buildNum: '3',
      sell: 1,
      shikikin: '4.0만엔',
    },
    {
      name: '東京タワー',
      address: '東京都港区芝公園4丁目2-8',
      ymd: '1958/12/23',
      size: '100㎡',
      rent: '15.0万엔',
      type: 'RC(철근 콘크리트)',
      floors: '지상 1층',
      concierge: 'suzuki_takeshi',
      reikin: 0,
      prvusage: '관광지',
      tag: '도쿄의 상징',
      conciergecoment: '이 건축물은 도쿄의 상징적인 타워로, 관광명소로 인기가 높으며 아름다운 도시 전경을 제공합니다.',
      dpsin: '단층',
      buildNum: '2',
      sell: 1,
      shikikin: '5.0만엔',
    },
  ];
  
  // 로컬 스토리지에서 데이터 불러오기 및 저장
  const loadHouseDetails = () => {
    const existingData = localStorage.getItem('houseDetailsList');
    
    if (!existingData) {
      // 로컬 스토리지에 데이터가 없으면 기본 데이터를 저장
      localStorage.setItem('houseDetailsList', JSON.stringify(houseDetailsList));
      console.log('기본 데이터가 로컬 스토리지에 저장되었습니다.');
      return houseDetailsList; // 기본 데이터 반환
    } else {
      // 로컬 스토리지에서 데이터를 불러와서 반환
      try {
        const parsedData = JSON.parse(existingData);
        console.log('불러온 매물 정보:', parsedData);
        return parsedData;
      } catch (error) {
        console.error('로컬 스토리지 데이터 파싱 중 오류 발생:', error);
        return []; // 에러 발생 시 빈 배열 반환
      }
    }
  };
  
  export { loadHouseDetails };
  