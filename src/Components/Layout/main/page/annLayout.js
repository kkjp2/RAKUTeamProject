import './css/announcement.css';
import AnnComponents from './components/announcement.js';

const AnnLayout = () => {

    return<>
    <div className="Ann">
    <div className="Ann_Header">
        <p className="Ann_Header_1"><span className="Ann_Header_1_purple">RAKU</span>의 <span className='Ann_Header_1_purple'>RAKURAKU</span> 뉴스</p>
        <p className="Ann_Header_2">RUKU의 새로운 기능과 서비스를 소개해드립니다.</p>
    </div>
    <div className="Ann_Main">
        {/* {todos.map((v)=> {
                return(
                    <AnnComponents
                        title={v.title}
                        img={v.img}
                        content={v.content}
                        date={v.date}
                    />
                )
            })
            }     */}
    </div>
    <div className="Ann_Number">

    </div>
    </div>
    </>

}

export default AnnLayout;