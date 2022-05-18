import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";
import logo from "../../assets/img/logoVitaorga.png";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import {  signup } from "../../Redux/Action/user";
import isEmpty from "validator/lib/isEmpty"
export default function SignUp() {
  const regex = /^((0[3|8|9|7|5])+([0-9]{8}))|((84[3|8|9|7|5])+([0-9]{8}))$/;
  const [userLogin, setuserLogin] = useState({
    hoTen: "",
    soDienThoai: "",
    email: "",
    diaChi: "",
  });
  const [validationMsg, setValidationMsg] = useState('')
  const dispatch = useDispatch()
  
  const validateAll = (e) =>{
    const msg = {};
    if (isEmpty(userLogin.hoTen)){
      msg.hoTen = 'Vui lòng nhập họ tên!'
    }
    
    if (isEmpty(userLogin.soDienThoai)){
      msg.soDienThoai = 'Vui lòng nhập số điện thoại!'
    }
    else if(!regex.test(userLogin.soDienThoai)){
      msg.soDienThoai = 'Số điện thoại không đúng định dạng!'
    }
    
    setValidationMsg(msg)
    if (Object.keys(msg).length > 0) return false
    return true
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setuserLogin({
      ...userLogin,
      [name]: value,
    });
  };

  
  const handleLogin = (event) => {
    event.preventDefault();
    const isValid = validateAll()
    if(!isValid) return

    dispatch(signup(userLogin))
  };
  
  return (
    <section className="form-sign-in-up">
      <div className="img-logo">
        <img src={logo} alt="" srcset="" />
      </div>
      <div className="form-sign-in">
        <form onSubmit={handleLogin}>
          <div className="text-login ">
            <span >Đăng ký nhận thông tin</span>
          </div>
          <div className="form-group ">
            <label htmlFor="sign-in-username">
              Họ tên <span className="text-danger"> *</span>
            </label>
            <div className="form-input">
              <i class="fa fa-user"></i>
              <input
                type="text"
                name="hoTen"
                id="hoTen"
                onChange={handleChange}
                value={userLogin.hoTen}
                className="form-control"
                placeholder="Họ tên"
              />
            </div>
              <p className="text-danger">{validationMsg.hoTen}</p>
          </div>
          <div className="form-group">
            <label htmlFor="sign-in-pass">
              Số điện thoại<span className="text-danger"> *</span>
            </label>
            <div className="form-input">
              <i className="fa fa-lock "></i>
              <input
                name="soDienThoai"
                type="text"
                id="soDienThoai"
                onChange={handleChange}
                value={userLogin.soDienThoai}
                className="form-control"
                placeHolder="Số điện thoại "
              />
            </div>
            <p className="text-danger">{validationMsg.soDienThoai}</p>
          </div>
          <div className="form-group">
            <label htmlFor="sign-in-pass">Email</label>
            <div className="form-input">
              <i class="fa fa-envelope mt-3"></i>
              <input
                name="email"
                type="text"
                id="email"
                onChange={handleChange}
                value={userLogin.email}
                className="form-control"
                placeHolder="Email "
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="sign-in-pass">Địa chỉ</label>
            <div className="form-input">
              <i class="fa fa-address-book"></i>
              <input
                name="diaChi"
                type="text"
                id="diaChi"
                onChange={handleChange}
                value={userLogin.diaChi}
                className="form-control"
                placeHolder="Địa chỉ "
              />
            </div>
          </div>
          <div className="remember-login">
            <div className="remember">
              <input type="checkbox" name="" id="" defaultChecked required />
              <span>Tôi đồng ý điều khoản</span>
            </div>
            <div className="ask-remember">
              <i></i>
              <NavLink to='/dieukhoan' className="term" >
                Điều khoản
              </NavLink>
            </div>
          </div>
          <button type="button" className="btn" onClick={handleLogin}>
            Đăng ký
          </button>
        </form>
      </div>
       
    </section>
  );
}
