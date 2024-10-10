import { IoIosStarOutline } from "react-icons/io";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { IoStar } from "react-icons/io5";   
import { AiOutlinePicture } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { Link } from 'react-router-dom';

const Inquiry = ({name, money, address, content}) => {


    return(
        <div className="InquiryDetail_Main_Content_1">
                <div className="InquiryDetail_Main_Content_1_Box">
                    <div className="InquiryDetail_Main_Content_1_Main">
                        <p className="InquiryDetail_Main_Content_1_Main_Title_1">아파트</p>
                        <p className="InquiryDetail_Main_Content_1_Main_Title_2">{name}</p>
                         {<AiOutlinePicture  className="InquiryDetail_Main_Content_1_Main_Img"/>}

                        <p className="InquiryDetail_Main_Content_1_Main_Rent">{money}만엔</p>
                        <p className="InquiryDetail_Main_Content_1_Main_Location">{address}</p>
                    </div>
                    <div className="InquiryDetail_Main_Content_1_Text">
                        <p className="InquiryDetail_Main_Content_1_Text_Arrangement_1">배치</p>
                        <p className="InquiryDetail_Main_Content_1_Text_Arrangement_2">{content}</p>
                        <p className="InquiryDetail_Main_Content_1_Text_Width_1">너비</p>
                        <p className="InquiryDetail_Main_Content_1_Text_Width_2">24.9m</p>
                        <p className="InquiryDetail_Main_Content_1_Text_Years_1">축년수</p>
                        <p className="InquiryDetail_Main_Content_1_Text_Years_1">신축</p>
                    </div>
                    <div className="InquiryDetail_Main_Content_1_Btn">
                        <p className="InquiryDetail_Main_Content_1_Btn1"><IoIosMail className="InquiryDetail_Main_Content_1_Btn1_Img" />메일문의</p>
                    </div>
                </div>
            </div>
    )
}

export default Inquiry;