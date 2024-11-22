// 가상 매물 데이터 배열
const houseDetailsList = [
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
    shikikin: '1.7万엔',
    views: 1250,
    recommendations: 75,
    tag: ['주거용,', '리모델링,', '역세권']
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
    shikikin: '4.0万엔',
    views: 2500,
    recommendations: 180,
    tag: ['상업용,', '최신식,', '역세권']
  },
  {
    name: '東京タワーレジデンス',
    address: '東京都港区芝公園4丁目2-8',
    ymd: '2020/03/12',
    size: '45㎡',
    rent: '15.0万엔',
    type: 'RC(철근 콘크리트)',
    floors: '지상 12층',
    concierge: 'sato_takashi',
    reikin: 2,
    prvusage: '주거용',
    conciergecoment: '도쿄 타워 근처의 현대적인 아파트로, 도심 전망을 자랑합니다.',
    dpsin: '다층',
    buildNum: '5',
    sell: 1,
    shikikin: '3.0万엔',
    views: 3800,
    recommendations: 220,
    tag: ['주거용,', '도시뷰,', '고층']
  },
  {
    name: '大阪グランドタワー',
    address: '大阪府大阪市北区大淀南1-3-1',
    ymd: '2018/06/15',
    size: '60㎡',
    rent: '13.0万엔',
    type: 'SRC(철골 철근 콘크리트)',
    floors: '지상 20층',
    concierge: 'yamada_ken',
    reikin: 1,
    prvusage: '주거용',
    conciergecoment: '오사카 중심부에 위치한 고급 아파트로, 편리한 교통망을 자랑합니다.',
    dpsin: '다층',
    buildNum: '10',
    sell: 1,
    shikikin: '2.0万엔',
    views: 2750,
    recommendations: 150,
    tag: ['주거용,', '고급,', '교통편리']
  },
  {
    name: '名古屋スカイレジデンス',
    address: '愛知県名古屋市中区栄3丁目20-20',
    ymd: '2019/09/25',
    size: '35㎡',
    rent: '9.5万엔',
    type: 'RC(철근 콘크리트)',
    floors: '지상 15층',
    concierge: 'matsui_akira',
    reikin: 1,
    prvusage: '주거용',
    conciergecoment: '나고야 시내 중심에 위치한 아파트로, 상업지역과의 접근성이 좋습니다.',
    dpsin: '다층',
    buildNum: '7',
    sell: 1,
    shikikin: '1.5万엔',
    views: 3200,
    recommendations: 160,
    tag: ['주거용,', '중심가,', '나고야']
  },
  {
    name: '札幌パークタワー',
    address: '北海道札幌市中央区大通西1丁目1-1',
    ymd: '2016/11/18',
    size: '50㎡',
    rent: '10.0万엔',
    type: 'RC(철근 콘크리트)',
    floors: '지상 18층',
    concierge: 'takeda_shinji',
    reikin: 1,
    prvusage: '주거용',
    conciergecoment: '삿포로의 유명한 공원 옆에 위치한 아파트로, 자연과 조화를 이룹니다.',
    dpsin: '다층',
    buildNum: '9',
    sell: 0,
    shikikin: '2.0万엔',
    views: 1500,
    recommendations: 90,
    tag: ['주거용,', '자연,', '공원근처']
  },
  {
    name: '秋田レジデンス',
    address: '秋田県秋田市山王1丁目2-3',
    ymd: '2015/08/22',
    size: '25㎡',
    rent: '6.0万엔',
    type: 'RC(철근 콘크리트)',
    floors: '지상 5층',
    concierge: 'tanaka_jun',
    reikin: 0,
    prvusage: '주거용',
    conciergecoment: '아키타 중심부에 위치한 경제적인 아파트입니다.',
    dpsin: '다층',
    buildNum: '2',
    sell: 0,
    shikikin: '1.0万엔',
    views: 800,
    recommendations: 50,
    tag: ['주거용,', '저가,', '중심가']
  },
  {
    name: '広島リバービュータワー',
    address: '広島県広島市中区紙屋町2丁目3-5',
    ymd: '2021/05/01',
    size: '40㎡',
    rent: '12.0万엔',
    type: 'SRC(철골 철근 콘크리트)',
    floors: '지상 14층',
    concierge: 'yoshida_koji',
    reikin: 2,
    prvusage: '주거용',
    conciergecoment: '히로시마 강변에 위치한 고급 아파트로, 멋진 경관을 제공합니다.',
    dpsin: '다층',
    buildNum: '6',
    sell: 1,
    shikikin: '3.0万엔',
    views: 2900,
    recommendations: 140,
    tag: ['주거용,', '고급,', '강변뷰']
  },
  {
    name: '山梨マウンテンビュー',
    address: '山梨県甲府市丸の内3丁目10-7',
    ymd: '2017/07/12',
    size: '70㎡',
    rent: '11.0万엔',
    type: 'RC(철근 콘크리트)',
    floors: '지상 8층',
    concierge: 'sakamoto_taro',
    reikin: 1,
    prvusage: '주거용',
    conciergecoment: '야마나시에서 산을 바라보며 생활할 수 있는 쾌적한 빌라형 아파트입니다.',
    dpsin: '단층',
    buildNum: '4',
    sell: 1,
    shikikin: '2.0万엔',
    views: 2300,
    recommendations: 120,
    tag: ['주거용,', '산뷰,', '쾌적']
  }
];

// 로컬 스토리지에서 매물 정보를 불러오는 함수
const loadHouseDetails = () => {
  try {
    // 로컬 스토리지 초기화
    localStorage.clear();

    // houseDetailsList를 로컬 스토리지에 저장
    localStorage.setItem('houseDetailsList', JSON.stringify(houseDetailsList));
    console.log('기본 데이터를 로컬 스토리지에 저장했습니다.');

    // 저장한 데이터를 반환
    return houseDetailsList;
  } catch (error) {
    console.error('로컬 스토리지 처리 중 오류 발생:', error);
    return []; // 에러가 발생하면 빈 배열 반환
  }
};

// 로컬 스토리지 초기화 함수 (필요시 호출)
const clearLocalStorage = () => {
  localStorage.clear();
  console.log("로컬 스토리지가 초기화되었습니다.");
};

export { loadHouseDetails, clearLocalStorage };


