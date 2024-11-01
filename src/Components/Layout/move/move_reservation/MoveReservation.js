import React from 'react';
import './MoveReservation.css';
import Layout from '../move_layout/MoveLayout';
import JapanAddressApi from '../move_api/move_japanAddressApi'
import { Link } from 'react-router-dom';

const Reservation = () => {

    const { searchValue, address, error, handleInputChange, handleSearchClick } = JapanAddressApi();

    const days = Array.from({ length: 31 }, (_, index) => index + 1);

    return (
        <Layout>
            <div className='reservation_top'>
                <div className="reservation_container">
                    <header>
                        <h1>お客様情報のご入力</h1>
                    </header>
                    <div className="reservation_form_group">
                        {/* <label htmlFor="name"> */}
                        <div className='reservation_labeltext'>
                            <span className='reservation_Stars'>*&nbsp;</span>お名前（漢字） お入力ください。
                        </div>
                        <input type="text" id="name" className="reservation_input" placeholder='例：引越太郎' />
                        {/* </label> */}
                    </div>
                    <div className="reservation_form_group">
                        {/* <label htmlFor="furigana"> */}
                        <div className='reservation_labeltext'>
                            <span className='reservation_Stars'>*&nbsp;</span>
                            フリガナ</div>
                        <input type="text" id="furigana" className="reservation_input" placeholder='例：ヒッコシタロウ' />
                        {/* </label> */}
                    </div>
                    <div className="reservation_form_group">
                        {/* <label htmlFor="phone"> */}
                        <div className='reservation_labeltext'>
                            <span className='reservation_Stars'>*&nbsp;</span>
                            ご連絡先電話番号（携帯）</div>
                        <input type="tel" id="phone" className="reservation_input" placeholder='例：09012345678 （数字のみで入力してください）' />
                        {/* </label> */}
                    </div>
                    <div className="reservation_form_group">
                        <div className='reservation_labeltext'>ご連絡先電話番号（固定電話）</div>
                        <input type="tel" id="phoneHome" className="reservation_input" placeholder='例：06112345678' />
                    </div>
                    <div className="reservation_form_group">
                        <div className='reservation_labeltext'>
                            <span className='reservation_Stars'>*&nbsp;</span>
                            メールアドレス</div>
                        <input type="email" id="email" className="reservation_input" placeholder='例：suen000918@gmail.com' />
                    </div>

                    <hr></hr>
                    <div className="reservation_formSection">
                        <span className='reservation_Stars'>*&nbsp;</span><h2>住所情報</h2>
                        <div className="reservation_postalcode">
                            <h4>現在お住まいのご住所</h4>
                            <label className='reservation_addlabel'>郵便番号</label>
                            <input
                                className="reservation_search"
                                type="text"
                                placeholder="郵便番号を入力"
                                value={searchValue}
                                onChange={handleInputChange}
                            />
                            <button className="reservation_search-btn" onClick={handleSearchClick}>
                                郵便番号検索
                            </button>
                            {error && <p className="reservation_error-message">{error}</p>}
                        </div>
                        <div className="reservation_formGroup">
                            <label>道路名住所</label>
                            <p className="reservation_address_text">
                                {address && <span className='reservation_InvisibleText'>{address}</span>}
                                <span className='reservation_InvisibleText1'>Invisible Text</span>
                            </p>
                        </div>
                        <div className="reservation_formGroup1">
                            <label className='reservation_xiangqing'>詳細住所</label>
                            <input type="text" className="reservation_input1" />
                        </div>
                        <div className='reservation_movingadd'>
                            <h4>引越先のご住所</h4>
                            <input className='reservation_moving_address' placeholder='例：大阪府堺市'></input>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="reservation_roomType">
                        <label htmlFor="roomType">現在のお住まいの間取り</label>
                        <select id="roomType" className="reservation_select">
                            <option value="undefined">お選びください</option>
                            <option value="1K">1K</option>
                            <option value="1DK">1DK</option>
                            <option value="1DK">2DK</option>
                            <option value="1DK">3DK</option>
                            <option value="1DK">4DK</option>
                            <option value="1DK">1LDK</option>
                            <option value="1DK">2LDK</option>
                            <option value="1DK">3LDK</option>
                            <option value="1DK">4LDK</option>
                        </select>
                    </div>
                    <div className="reservation_dateformgroup">
                        <label htmlFor="moveDate"><span className='reservation_Stars'>*&nbsp;</span>お引越し予定日</label>
                        <div className="reservation_datepicker">
                            <input type="month" id="moveDate" className="reservation_dateinput" />
                            <select id="move_day" className="reservation_moveday">
                                <option value="undefined">未定</option>
                                {days.map(day => (
                                    <option key={day} value={day}>
                                        {day}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <p className="reservation_datenote">※予定がおわかりになっているときはできるだけご記載ください<br />※お引越し予定日はお見積もり後日から3か月以内でお願いします。</p>
                    </div>
                    <div className='reservationcheck_formgroup'>
                    <button className='reservation_button'><Link to='' className='reservation_link_notunderline'>前戻り</Link></button>
                    <button className="reservation_button1"><Link to='/MoveMain/MoveReservationCheck' className='reservation_link_notunderline'>次へ</Link></button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Reservation;
