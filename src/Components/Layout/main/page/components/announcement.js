

import React from 'react'
const Announcement = ({title, img, content, date}) => {

    const ImageDisplay = () => 
        {
            const imagePath = img.split("upload-dir\\")[1].replace(/\\/g, "/"); // Windows 경로 처리
        const imageUrl = `http://localhost:8080/api/images/${imagePath}`;
            return(
            <div>
                <img src={imageUrl} alt={title}  className="Announcement_Main_Content_1_img"/>
            </div>
            ) 
        }
    
    return (
        <div className="Announcement_Main_Content_1">
        <div className="Announcement_Main_Content_1_Box">
           <p className="Announcement_Main_Content_1_title">{title}</p>
           <ImageDisplay />
           <p className="Announcement_Main_Content_1_content">{content}</p>
           <p className="Announcement_Main_Content_1_date">{date}</p>
        </div>
    </div>
    )
  }

  export default Announcement;