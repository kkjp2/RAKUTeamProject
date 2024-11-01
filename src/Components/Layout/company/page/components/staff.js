import { AiOutlinePicture } from "react-icons/ai";
import '../css/companyStaff.css';

const Staff = ({name,number,age,sex,content}) => {
        if(sex === "1"){
            sex = "남성";
        }else{
            sex = "여성";
        }
    return<>
     <div className="CompanyStaff_Content_Main">
                <div className='CompanyStaff_Content_Main_1'>
                <AiOutlinePicture  className="CompanyStaff_Content_Img"/>
                <p className="CompanyStaff_Content_Title1">{name}</p>
                <p className="CompanyStaff_Content_exp">업계경험 {number}년</p>
                </div>
                <div className='CompanyStaff_Content_Main_2'>
                <p className="CompanyStaff_Content_Title2">직원 소개</p>
                <table className="CompanyStaff_Content_Table">
                    <tr>
                        <th>성별</th>
                        <td>:{sex}</td>
                    </tr>
                    <tr>
                        <th>나이</th>
                        <td>:{age}</td>
                    </tr>
                </table>
                <p className="CompanyStaff_Content_Text">{content}</p>
                </div>
            </div>
    </>
}

export default Staff;