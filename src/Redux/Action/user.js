import axios from "axios";
import Swal from "sweetalert2";
import createAction from ".";
import { DOMAIN } from "../../Service/Domain";
import { FETCH_USER_LIST, GETDATA, SEARCH_USER, SIGNUP } from "../Containts";

export const signup = (form) => {
  return async (dispatch) => {
    try {
      Swal.fire({
        title: "Waiting ...",
        text: "Đang xử lý ...",
        icon: "info",
        showConfirmButton: false,
        allowOutsideClick: false,
      });
      await axios({
        url: `${DOMAIN}Web/DangKyThongTinWebsite`,
        method: "POST",
        data: form,
      })
        .then((res) => {
          if (res.data.isSuccess === true) {
            dispatch(createAction(SIGNUP, true));
            Swal.mixin({
              customClass: {
                confirmButton: "btn btn-success",
              },
              buttonsStyling: false,
            }).fire({
              title: "",
              html: `<span style="color: #27ae60">Thực hiện thành công</span>`,
              icon: "success",
              confirmButtonText: 'Xác Nhận',
            });
            setTimeout(() => {
              window.location.reload()
            }, 1700);
          } else {
            Swal.mixin({
              customClass: {
                confirmButton: "btn btn-danger",
              },
              buttonsStyling: false,
            }).fire({
              title: "",
              html: `<span style="color:red">${res.data.message}</span>`,
              icon: "error",
              confirmButtonText: 'Xác Nhận',
            });
            // setTimeout(() => {
            //   window.location.reload()
            // }, 1700);
          }
        })
        .catch((err) => {
          console.log(err);
          Swal.fire("", `${err.data.message}`, "error");
        });
    } catch (err) {
      console.log("err", err);
    }
  };
};
export const getData = (form) => {
  return async (dispatch) => {
    try {
      await axios({
        url: "https://demoorder.truedata.vn/api/Vitaorga/GetDanhMucCuaHang",
        method: "POST",
        data: form,
      })
        .then((res) => {
          console.log(res.data.data);
          dispatch(createAction(GETDATA, res.data.data));
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchUserInfo = (page, pageSize) => {
  return async (dispatch) => {
      try {
          await axios({
              url:
                  `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soTrang=${page}&soPhanTuTrenTrang=${pageSize}`,
              method: "GET",
          }).then(res => {
              dispatch(createAction(FETCH_USER_LIST, res.data))
              console.log(res.data.items);
          }).catch(err => {
              console.log(err);
          })

      } catch (err) {
          console.log(err);
      }
  };
};
export const searchUser = (keyword, page, pageSize) => {
  return async (dispatch) => {
      try {
          await axios({
              url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDungPhanTrang?MaNhom=GP01&tuKhoa=${keyword}&soTrang=${page}&soPhanTuTrenTrang=${pageSize}`,
              method: 'GET'
          }).then((res) => {
              dispatch(createAction(SEARCH_USER, res.data))
          }).catch(err => {
              Swal.fire({
                  title: 'Oops !!!',
                  text: `${err.response?.data} !!!`,
                  icon: 'error',
                  allowOutsideClick: false
              })
          })
      } catch (err) {
          // console.log(err);
      }
  }
}
