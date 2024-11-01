import CompanyLayout from './companyLayout.js';
import { AiOutlinePicture } from "react-icons/ai";
import './css/companyMap.css';

const CompanyMap =() => {

    return <>
    <CompanyLayout>
        <div className="CompanyMap">
            <div className="CompanyMap_Header">
                <p className="CompanyMap_Title">오시는 길</p>
            </div>
            <div className="CompanyMap_Main">
                <div className="CompanyMap_Map">
                    <AiOutlinePicture  className="CompanyMap_Img"/> 
                </div>
                <table className="CompanyMap_Table">
                    <tr>
                        <th>
                            영업시간
                        </th>
                        <td>
                        09:30～19:00
                        </td>
                    </tr>
                    <tr>
                        <th>
                            정기휴일
                        </th>
                        <td>
                        연중 무휴 (분·정월 제외)
                        </td>
                    </tr>
                    <tr>
                        <th>
                            회사 주소
                        </th>
                        <td>
                        〒603-8053 교토부 교토시 기타구 카미가모이와가가키우치마치 98-2
                        </td>
                    </tr>
                    <tr>
                        <th>
                            전화번호/FAX
                        </th>
                        <td>
                        075-708-1711/075-708-1722
                        </td>
                    </tr>
                </table>
            </div>

        </div>

    </CompanyLayout>
    </>
}

export default CompanyMap;