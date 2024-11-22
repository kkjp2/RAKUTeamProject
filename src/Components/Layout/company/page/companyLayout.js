import { BiBuildings } from "react-icons/bi";
import './css/companyLayout.css';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { TbCircleNumber1Filled } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import { TbCircleNumber2Filled } from "react-icons/tb";
import { TbCircleNumber3Filled } from "react-icons/tb";
import { GoPerson } from "react-icons/go";
import { IoMdArrowDropright } from "react-icons/io";
import { IoIosMail } from "react-icons/io";

const CompanyLayout =(props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const goToCompanyBukken = () => {
        navigate('/realty/company/N01/bukken');
      };
    const goToCompanyStaff = () => {
        navigate('/realty/company/N01/staff');
    };
    const goToCompanyMap = () => {
        navigate('/realty/company/N01/map');
    };
    const goToCompanyMain = () => {
        navigate('/realty/company/N01/main');
    };
    useEffect(() => {
        InformationClick();
    }, [location]); // location이 변경될 때마다 실행
    const InformationClick = () => {
        const pattern1 = /^\/realty\/company\/.*\/main$/;
        const pattern2 = /^\/realty\/company\/.*\/bukken$/;
        const pattern3 = /^\/realty\/company\/.*\/staff$/;
        const pattern4 = /^\/realty\/company\/.*\/map$/;
        const pattern5 = /^\/realty\/company\/.*\/staff\/.*$/;
        const parentDiv = document.getElementById("Company_Main_Nav_Normal");
        if (!parentDiv) return; // parentDiv가 없을 경우를 방어적으로 처리
        const childDivs = parentDiv.getElementsByTagName("div");
        let nowDiv = -1;
        if (pattern1.test(location.pathname)) {
            nowDiv = 0;
        }
        else if (pattern2.test(location.pathname)) {
            nowDiv = 1;
        }
        else if (pattern3.test(location.pathname) || pattern5.test(location.pathname)) {
            nowDiv = 2;
        }
        else if (pattern4.test(location.pathname)){
            nowDiv = 3;
        }
        else {
            console.log('잘못된 경로!');
        }
        for (let i = 0; i<childDivs.length; i++){
            if(i === nowDiv){
            childDivs[i].style.backgroundColor = "white";
            childDivs[i].style.border = "1px solid #CFCFCF";
            // border: 1px solid #565555;
            childDivs[i].style.borderTop = "5px solid #9F4298";
            // border-top: 5px solid #9F4298;
            childDivs[i].style.borderRadius = "5px 5px 0px 0px";
            // border-radius: 5px 5px 0px 0px;
            childDivs[i].onclick = null;
            }
            else{
            childDivs[i].style.border = "1px solid #CFCFCF";
            // border: 1px solid #565555;
            childDivs[i].style.borderRadius = "5px 5px 0px 0px";
            // border-radius: 5px 5px 0px 0px;
            childDivs[i].style.cursor = "pointer";
            // cursor: pointer;
            childDivs[i].addEventListener("mouseover", function() {
                childDivs[i].style.color = "#9F4298";
                // color:#9F4298;
                childDivs[i].style.backgroundColor = "#ffcbfc";
                // background-color: #ffcbfc;
            })
            childDivs[i].addEventListener("mouseout", function () {
                childDivs[i].style.color = ""; // 원래 색상으로 복구
                childDivs[i].style.backgroundColor = ""; // 원래 배경색으로 복구
            });
            }
    
        }
    }
    return<>
    <div className="CompanyMain">
        <div className="Company_Title">
            <div>
                <p className="Company_Title_1">주식회사 교토 라이프 기티야마점</p>
            </div>
            <div className="Company_Title_Under">
                <span>
                <p className="Company_Title_2">교토부</p>
                </span>
                <span>
                <a href="https://www.kyoto-life.co.jp/" className="Company_Title_Btn"><BiBuildings  className="Company_Title_Btn_Img"/>회사홈페이지</a>
                </span>
            </div>
        </div>
        <div className="Company_Main">
        <div className="Company_Main_Nav">
        <div className="Company_Main_Nav_Normal" id="Company_Main_Nav_Normal">
            <div onClick={goToCompanyMain}><p>회사정보</p></div>
            <div onClick={goToCompanyBukken}><p>취급 물건</p></div>
            <div onClick={goToCompanyStaff}><p>직원</p></div>
            <div onClick={goToCompanyMap}><p>오시는 길</p></div>
        </div>
        {/* <div className="Company_Main_Nav_ManagerBtn">
            <button>매물 등록</button>
            <button>직원 등록</button>
            <button>정보 수정</button>
            </div>     */}
        </div>
        <div className="Company_Main_Content">
        {props.children}
        </div>
        <div>
            <button className="Company_Main_Content_Btn">
            <IoIosMail className="Company_Main_Content_Btn_Img"/>
            <p className="Company_Main_Content_Btn_Content_1">희망하시는 조건을 알려주세요</p>
            <p className="Company_Main_Content_Btn_Content_2"> 이메일로 문의</p>
            </button>
        </div>
        </div>

        <div className="Company_Footer">
            <div className="Company_Footer_Title">
                <p>전화로 문의</p>
            </div>
            <div className="Company_Footer_Main">
                    <p className="Company_Footer_Main_Title">문의전화</p>
                    <div className="Company_Footer_Main_1">
                    <TbCircleNumber1Filled className="Company_Footer_Main_1_Title_Img" /><p className="Company_Footer_Main_1_Title">전화 걸기</p>
                    <FaPhoneAlt className="Company_Footer_Main_1_Phone_Img"/><p className="Company_Footer_Main_1_Phone_1">0037-633-67891<p className="Company_Footer_Main_1_Phone_2">(통화 무료)</p></p>
                        <p className="Company_Footer_Main_1_Content">고객의 전화번호는 부동산 회사에 통지되지 않습니다.</p>
                    </div>
                    <IoMdArrowDropright className="Company_Footer_Main_Arrow"/>
                    <div className="Company_Footer_Main_2">
                    <TbCircleNumber2Filled className="Company_Footer_Main_1_Title_Img" /><p className="Company_Footer_Main_1_Title">문의 번호 입력</p>
                    <table className="Company_Footer_Main_1_Number">
                        <tr>
                        <td className="Company_Footer_Main_1_Number_1">번호</td>
                        <td className="Company_Footer_Main_1_Number_1">000001</td>
                        </tr>
                    </table>
                    </div>
                    <IoMdArrowDropright className="Company_Footer_Main_Arrow"/>
                    <div className="Company_Footer_Main_3">
                    <TbCircleNumber3Filled className="Company_Footer_Main_1_Title_Img" />
                    <p className="Company_Footer_Main_1_Title">부동산 회사로 연결</p>
                    
                    <p className="Company_Footer_Main_1_Final_Content"><GoPerson className="Company_Footer_Main_1_Final_Img"/>부동산 회사 직원과 직접 전화로 말할 수 있습니다.</p>


                    </div>

            </div>
            <div className="Company_Footer_Final">
                <p className="Company_Footer_Final_Title">임대 이외의 전화</p>
                <FaPhoneAlt className="Company_Footer_Final_Phone_Img"/>
                <p className="Company_Footer_Final_Content">075-708-1711</p>
            </div>
        </div>
    </div>
    
    </>
}


export default CompanyLayout;