
import React from 'react'
import { IoIosStarOutline } from "react-icons/io";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { IoStar } from "react-icons/io5";   
import { AiOutlinePicture } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
const ToDoList = ({id,name, money, address, content}) => {
    
    return (
        <div className="Favorites_Main_Content_1">
        <div className="Favorites_Main_Content_1_Box">
            <div className="Favorites_Main_Content_1_Star">
            <IoIosStarOutline className='Favorites_Main_Content_1_Star1' id='Favorites_Main_Content_1_Star1' onClick={BtnClick} />
            <IoStar className='Favorites_Main_Content_1_Star2' id='Favorites_Main_Content_1_Star2' onClick={BtnClick}/>
            </div>
            <div className="Favorites_Main_Content_1_Checkbox">
                <input type="checkbox" className="Favorite_Main_Content_1_Checkbox_Chx" id={id} />
                <label for={id}/>
            </div>
            <div className="Favorites_Main_Content_1_Main">
                <p className="Favorites_Main_Content_1_Main_Title_1">아파트</p>
                <p className="Favorites_Main_Content_1_Main_Title_2">{name}</p>
                {/* <img className="Favorites_Main_Content_1_Main_Img"/>
                 */}
                 {<AiOutlinePicture  className="Favorites_Main_Content_1_Main_Img"/>}

                <p className="Favorites_Main_Content_1_Main_Rent">{money}만엔</p>
                <p className="Favorites_Main_Content_1_Main_Location">{address}</p>
            </div>
            <div className="Favorites_Main_Content_1_Text">
                <p className="Favorites_Main_Content_1_Text_Arrangement_1">배치</p>
                <p className="Favorites_Main_Content_1_Text_Arrangement_2">{content}</p>
                <p className="Favorites_Main_Content_1_Text_Width_1">너비</p>
                <p className="Favorites_Main_Content_1_Text_Width_2">24.9m</p>
                <p className="Favorites_Main_Content_1_Text_Years_1">축년수</p>
                <p className="Favorites_Main_Content_1_Text_Years_1">신축</p>
            </div>
            <div className="Favorites_Main_Content_1_Btn">
                <button className="Favorites_Main_Content_1_Btn1"><IoIosMail className="Favorites_Main_Content_1_Btn1_Img" />메일문의</button>
            </div>
        </div>
    </div>
    )
  }
  
  function BtnClick() {
    const star1 = document.getElementById('Favorites_Main_Content_1_Star1');
    const star2 = document.getElementById('Favorites_Main_Content_1_Star2');

    if(star2.style.display === 'none') {
        star2.style.display = 'block';
        star1.style.display = 'none';
    }else{
        star2.style.display = 'none';
        star1.style.display = 'block';
    }
}

  export default ToDoList;