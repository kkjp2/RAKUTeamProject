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
];

// 로컬 스토리지에 저장
localStorage.setItem('houseDetailsList', JSON.stringify(houseDetailsList));
