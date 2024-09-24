import './css/myPageEdit.css'
import { Link, useNavigate } from 'react-router-dom';

const MyPageEdit =() => {
    const navigate = useNavigate();
    const goToMainPage = () => {
        navigate(`/`);
    }
    return<>
    <div className="MyPage_Edit">
        <div className="MyPage_Edit_Title">
            <p>사용자 수정</p></div>
        <div className="MyPage_Edit_Data">
            <div className="MyPage_Edit_Data_Title">
                <p>사용자 정보</p>
            </div>
            <div className="MyPage_Edit_Data_Main">
                <div className="MyPage_Edit_Data_Main">
                    <p className="MyPage_Edit_Data_Main_Title">닉네임</p>
                    <div className="MyPage_Edit_Data_Main_Main">
                        <span className="MyPage_Edit_Data_Main_Main_Content">
                            <p>test</p>
                        </span>
                        <span className="MyPage_Edit_Data_Main_Main_Btn">
                        <Link to='/MyPage/Edit/Nickname'>
                            <button>변경</button>
                            </Link>
                        </span>
                    </div>
                <div className="MyPage_Edit_Data_Main">
                <p className="MyPage_Edit_Data_Main_Title">이메일</p>
                    <div className="MyPage_Edit_Data_Main_Main">
                        <span className="MyPage_Edit_Data_Main_Main_Content">
                            <p>test@gmail.com</p>
                        </span>
                        <span className="MyPage_Edit_Data_Main_Main_Btn">
                        <Link to='/MyPage/Edit/Email'>
                            <button>변경</button>
                            </Link>
                        </span>
                    </div>
                </div>
                <div className="MyPage_Edit_Data_Main">
                <p className="MyPage_Edit_Data_Main_Title">비밀번호</p>
                    <div className="MyPage_Edit_Data_Main_Main">
                        <span className="MyPage_Edit_Data_Main_Main_Content">
                            <p>*********</p>
                        </span>
                        <span className="MyPage_Edit_Data_Main_Main_Btn">
                            <button>변경</button>
                        </span>
                    </div>
                </div>
                <div className="MyPage_Edit_Data_Main">
                <p className="MyPage_Edit_Data_Main_Title">지역</p>
                    <div className="MyPage_Edit_Data_Main_Main">
                        <span className="MyPage_Edit_Data_Main_Main_Content">
                            <p>규슈</p>
                        </span>
                        <span className="MyPage_Edit_Data_Main_Main_Btn">
                            <button>변경</button>
                        </span>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="MyPage_Edit_MainPageBtn">
            <button className="MyPage_Edit_MainPageBtn_Btn" onClick={goToMainPage}>메인페이지 돌아가기</button>
        </div>
        <div className="MyPage_Edit_Delete">
            <div className="MyPage_Edit_Data_Title">
                <p>계정 삭제</p>
            </div>
            <div className="MyPage_Edit_Delete_Main">
                <p className="MyPage_Edit_Delete_Content">계정을 삭제하면 저장된 데이터 등이 사라지고 일부 기능을 사용할 수 없게 됩니다. 삭제한 데이터는 되돌릴 수 없습니다.</p>
                <p className="MyPage_Edit_Delete_Click">계정 삭제</p>
            </div>
        </div>
    </div>
    </>
}

export default MyPageEdit;