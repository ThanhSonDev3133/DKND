import * as React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logoVitaorga.png";
import Swal from "sweetalert2";

export default function Auth() {
  const [key, setKey] = React.useState({ keyWord: "" });
  const navigator = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setKey({
      ...key,
      [name]: value,
    });
    console.log(key);
  };
  const handleLogin = () => {
    if (key.keyWord === "test") {
      localStorage.setItem("keyWord", key.keyWord);
      navigator("/quantri");
      Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
        },
        buttonsStyling: false,
      }).fire({
        title: "",
        html: `<span style="color: #27ae60">Xác thực thành công</span>`,
        icon: "success",
        confirmButtonText: 'Xác Nhận',
      });
    } else {
        Swal.mixin({
            customClass: {
              confirmButton: "btn btn-danger",
            },
            buttonsStyling: false,
          }).fire({
            title: "",
            html: `<span style="color:red">Mã xác thực không chính xác</span>`,
            icon: "error",
            confirmButtonText: 'Xác Nhận',
          });
    }
  };
  return (
    <section className="form-sign-in-up">
      <div className="img-logo">
        <img src={logo} alt="" srcset="" />
      </div>
      <div className="form-sign-in">
        <form onSubmit={handleLogin}>
          <div className="form-group ">
            <label htmlFor="sign-in-username">
              Mã Xác Thực <span className="text-danger"> *</span>
            </label>
            <div className="form-input">
              <input
                type="text"
                name="keyWord"
                id="keyWord"
                onChange={handleChange}
                value={key.keyWord}
                className="form-control"
                placeholder="Mã xác thực"
              />
            </div>
          </div>
          <div className="remember-login">
          </div>
          <button type="button" className="btn" onClick={handleLogin}>
            Kiểm tra
          </button>
        </form>
      </div>
    </section>
  );
}
