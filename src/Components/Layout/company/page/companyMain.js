import CompanyLayout from './companyLayout.js';
import './css/companyMain.css';
import { AiOutlinePicture } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { LiaFaxSolid } from "react-icons/lia";

const companyMain = () => {

    return<>
    <CompanyLayout>
    <div className="Company_Main_Content_Main">
    <div className="Company_Main_Content_Main_1">
    <div className="Company_Main_Content_Main_1_Title">
        <AiOutlinePicture  className="Company_Main_Content_Main_1_Img"/>
    </div>
    <div className="Company_Main_Content_Main_1_Content">
        <p className="Company_Main_Content_Main_1_Content_Title">회사소개</p>
        <p className="Company_Main_Content_Main_1_Content_Text">지하철 카라스마선 「기타야마」에서 도보 1분. 키즈 스페이스도 갖춘 밝고 깨끗한 점내에서 천천히 객실을 찾을 수 있습니다. 활기 넘치는 스탭이 여러분의 내점을 기다리고 있습니다.</p>
        <table className="Company_Main_Content_Main_1_Content_Table">
            <tr>
                <th>영업 시간</th>
                <td>09:30～19:00</td>
            </tr>
            <tr>
                <th>정기 휴일</th>
                <td>연중 무휴 (분·정월 제외)</td>
            </tr>
            <tr>
                <th>회사 주소</th>
                <td>	
                〒603-8053 교토부 교토시 기타구 카미가모이와가가키우치마치 98-2</td>
            </tr>
            <tr>
                <th>면허 번호</th>
                <td>교토부 지사(11) 제6353호</td>
            </tr>
        </table>
    </div>
    </div>
    <div className='Company_Main_Content_Main_2'>
        <p className='Company_Main_Content_Main_2_Title'>온라인 대응 가능</p>
        <div className='Company_Main_Content_Main_2_Box'>
        <div className='Company_Main_Content_Main_2_Box1'>
            <table className='Company_Main_Content_Main_2_Table'>
                <tr>
                    <th>영업 시간</th>
                    <td>09:30～19:00</td>
                </tr>
                <tr>
                    <th>정기 휴일</th>
                    <td>연중 무휴 (분·정월 제외)</td>
                </tr>
            </table>
        </div>
        <div className='Company_Main_Content_Main_2_Box2'>
        <button className="Company_Main_Content_Main_2_Box2_Btn">
            <IoIosMail className="Company_Main_Content_Main_2_Box2_Btn_Img"/>
            <p className="Company_Main_Content_Main_2_Box2_Btn_Content_1">희망하시는 조건을 알려주세요</p>
            <p className="Company_Main_Content_Main_2_Box2_Btn_Content_2"> 이메일로 문의</p>
            </button>
        <div className="Company_Main_Content_Main_2_Box2_Content1">
            <p className="Company_Main_Content_Main_2_Box2_Content1_Title">임대 문의</p>
            <FaPhoneAlt className="Company_Main_Content_Main_2_Box2_Content1_Img"/>
            <p className="Company_Main_Content_Main_2_Box2_Content1_Number1">0037-633-67891</p>
            <p className="Company_Main_Content_Main_2_Box2_Content1_Number2">문의 번호(6자리) 000001</p>
            <p className="Company_Main_Content_Main_2_Box2_Content1_Text1">고객의 전화번호는 부동산 회사에 통보되지 않습니다.</p>
            <p className="Company_Main_Content_Main_2_Box2_Content1_Text2">임대 문의 이외의 분은 삼가 해주십시오.</p>
        </div>
        <div className='Company_Main_Content_Main_2_Box2_Content2'>
            <p className='Company_Main_Content_Main_2_Box2_Content2_Text'>임대 이외의 전화</p>
            <p className='Company_Main_Content_Main_2_Box2_Content2_Title1'>부동산 회사의 전화번호</p>
            <FaPhoneAlt className="Company_Main_Content_Main_2_Box2_Content2_Img1"/>
            <p className='Company_Main_Content_Main_2_Box2_Content2_Number1'>075-708-1711</p>
            <p className='Company_Main_Content_Main_2_Box2_Content2_Title2'>부동산 회사의 팩스번호</p>
            <LiaFaxSolid  className="Company_Main_Content_Main_2_Box2_Content2_Img2"/>
            <p className='Company_Main_Content_Main_2_Box2_Content2_Number2'>075-708-1722</p>

        </div>
        </div>
        </div>
    </div>
    </div>
    </CompanyLayout>
    </>
}

export default companyMain;
