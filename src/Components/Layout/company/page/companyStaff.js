import './css/companyStaff.css'
import CompanyLayout from './companyLayout.js';
import Staff from './components/staff.js';


const CompanyStaff = () => {
    const todos = [
        {
          id: 1,
          name: "가나다",
          number: 10,
          age: "30",
          sex: "1",
          content: "만나서 반갑습니다. 혀 켄타로(제츠 켄타로우)라고 합니다.뭔가 고민하는 방 찾기. 태어나 자라도 교토이므로 모르는 것이 있으면 부담없이 무엇이든 상담해 주세요!매일 정진 해 가기 때문에, 아무쪼록 잘 부탁드립니다.여러분의 내점 기다리고 있습니다"
        },
        {
            id: 2,
            name: "가다다",
            number: 2,
            age: "20",
            sex: "0",
            content: "항상 완벽한 일처리"
        },
      ];
    return <>
    <CompanyLayout>
    <div className='CompanyStaff'>
        <div className="CompanyStaff_Header">
            <p className="CompanyStaff_Title">직원 소개</p>
            <p className="CompanyStaff_Text">이 점포에는 3명의 직원이 등록되어 있습니다.</p>
        </div>
        <div className="CompanyStaff_Content">
            {todos.map((v)=> {
                return(
                    <Staff
                        name={v.name}
                        number={v.number}
                        age={v.age}
                        sex={v.sex}
                        content={v.content}
                    />
                )
            })
            }
        </div>


    </div>

    </CompanyLayout>

    </>
}

export default CompanyStaff;