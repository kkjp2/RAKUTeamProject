import React from 'react';
import './MoveReservation.css';
import Layout from '../move_layout/MoveLayout';
import { Link } from 'react-router-dom';

const ReservationCheck = () => {

    return (
        <Layout>
            <div className='reservation_top'>
                <div className="reservation_container">
                    <header>
                        <h1>お客様情報のご入力</h1>
                    </header>
                    <div className="reservation_form_group">
                        <div className='reservation_labeltext'>
                            お名前（漢字） お入力ください。
                        </div>
                        <span type="text" id="name" className="reservationcheck_input" />
                    </div>
                    <div className="reservation_form_group">
                        <div className='reservation_labeltext'>
                            フリガナ</div>
                        <span type="text" id="furigana" className="reservationcheck_input" />
                    </div>
                    <div className="reservation_form_group">
                        <div className='reservation_labeltext'>
                            ご連絡先電話番号（携帯）</div>
                        <span type="tel" id="phone" className="reservationcheck_input" />
                    </div>
                    <div className="reservation_form_group">
                        <div className='reservation_labeltext'>ご連絡先電話番号（固定電話）</div>
                        <span type="tel" id="phoneHome" className="reservationcheck_input" />
                    </div>
                    <div className="reservation_form_group">
                        <div className='reservation_labeltext'>
                            メールアドレス</div>
                        <span type="email" id="email" className="reservationcheck_input" />
                    </div>
                    <hr></hr>
                    <div className="reservation_formSection">
                        <h2>住所情報</h2>
                        <h4>現在お住まいのご住所</h4>
                        <div className="reservationcheck_formgroup">
                            <label className='reservation_addlabel'>郵便番号</label>
                            <span type="" id="" className="reservationcheck_gettext" />
                        </div>
                        <div className="reservationcheck_formgroup">
                            <label>道路名住所</label>
                            <span className='reservationcheck_gettext' />
                        </div>
                        <div className="reservationcheck_formgroup">
                            <label className='reservation_xiangqing'>詳細住所</label>
                            <span type="text" className="reservationcheck_gettext" />
                        </div>
                        <div className='reservationcheck_formgroup'>
                            <label>引越先のご住所</label>
                            <span className='reservationcheck_gettext' />
                        </div>
                    </div>
                    <div className="reservationcheck_formgroup">
                        <label htmlFor="roomType">現在のお住まいの間取り</label>
                        <span className='reservationcheck_gettext' />
                    </div>
                    <div className="reservationcheck_formgroup">
                        <label htmlFor="moveDate">お引越し予定日</label>
                        <span className='reservationcheck_gettext' />
                    </div>
                    <div className='reservationcheck_formgroup_button'>
                        <button className='reservation_button'><Link to='/MoveMain/MoveReservation' className='reservation_link_notunderline'>前戻り</Link></button>
                        <button className="reservation_button1">次へ</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ReservationCheck;
