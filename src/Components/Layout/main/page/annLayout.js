import './css/announcement.css';
import AnnComponents from './components/announcement.js';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const AnnLayout = () => {
    const [ann, setAnn] = useState([]);

    async function AnnInfo() {
        try {
            const response = await axios.get('http://localhost:8080/api/ann/view');
            // 성공 시
            console.log(response.data); // 응답 데이터 확인
            setAnn(response.data.announcements);
            console.log(ann);
          } catch (error) {
            // 실패 시
            console.error(error);
          }
    }
    useEffect(() => {
        AnnInfo();
    }, []); // 빈 배열 []은 컴포넌트 마운트 시 한 번만 실행됨

    return<>
    <div className="Ann">
    <div className="Ann_Header">
        <p className="Ann_Header_1"><span className="Ann_Header_1_purple">RAKU</span>의 <span className='Ann_Header_1_purple'>RAKURAKU</span> 뉴스</p>
        <p className="Ann_Header_2">RUKU의 새로운 기능과 서비스를 소개해드립니다.</p>
    </div>
    <div className="Ann_Main">
        {ann.map((v)=> {
                return(
                    <AnnComponents
                        title={v.title}
                        img={v.img}
                        content={v.content}
                        date={v.borndate}
                    />
                )
            })
            }    
    </div>
    <div className="Ann_Number">

    </div>
    </div>
    </>

}

export default AnnLayout;