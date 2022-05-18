import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo, searchUser } from "../../Redux/Action/user";
import createAction from "../../Redux/Action";
import { DETAIL_USER, SET_SEARCH, UPDATE_USER } from "../../Redux/Containts";
import { Button } from "@mui/material";
import DetailUser from "../../Component/Admin/Detail";
import UpDateUser from "../../Component/Admin/Update";

const headCells = [
  {
    id: "taiKhoan",
    numeric: false,
    disablePadding: true,
    label: "Tài Khoản",
  },
  {
    id: "hoTen",
    numeric: true,
    disablePadding: false,
    label: "Họ Tên",
  },
  {
    id: "chucNang",
    numeric: true,
    disablePadding: false,
    label: "Chức Năng",
  },
];

export default function Admin() {
  const userInfo = useSelector((state) => state.userReducer.fetchUserList);
  const isSearch = useSelector((state) => state.userReducer.isSearch);
  const [page, setPage] = React.useState(1);
  const [pageSize] = React.useState(10);
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const refContainer = useRef(React.createRef());
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(userInfo.items.map((item) => item.taiKhoan));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e) => {
    e.preventDefault()
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  const handleUpdateUser = () => {
    dispatch(createAction(UPDATE_USER, true));
  };

  const openDetailUser = () => {
    dispatch(createAction(DETAIL_USER, true));
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (refContainer.current.value) {
      dispatch(searchUser(refContainer.current.value, page, pageSize));
      dispatch(createAction(SET_SEARCH, true));
    } else {
      dispatch(fetchUserInfo(page, pageSize));
      dispatch(createAction(SET_SEARCH, false));
    }
  };
  const handleCancelSearch = (event) => {
    event.preventDefault();
    dispatch(createAction(SET_SEARCH, false));
    dispatch(fetchUserInfo(page, pageSize));
    refContainer.current.value = null;
  };

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    if (isSearch) {
      dispatch(searchUser(refContainer.current.value, page, pageSize));
    } else {
      dispatch(fetchUserInfo(page, pageSize));
    }
  }, [page, pageSize, dispatch, isSearch]);

  const token = localStorage.getItem("keyWord");
  useEffect(() => {
    if (!token) {
      navigator("/xacthuc");
      Swal.mixin({
        customClass: {
          confirmButton: "btn btn-danger",
        },
        buttonsStyling: false,
      }).fire({
        title: "",
        html: `<span style="color:red">Vui lòng xác thực để vào trang quản trị</span>`,
        icon: "error",
        confirmButtonText: "Xác Nhận",
      });
    }
  }, [token]);

  const handleDeleleteAll = () => {
    console.log('isCheck', isCheck);
  };
  return (
    <div className="admin-tab">
      <Toolbar className="nav-search">
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
          className="text-success text-first"
        >
          Danh sách đăng ký
        </Typography>
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
          className="text-success text-second"
        >
          Danh sách
        </Typography>
        <div className="form-search d-flex">
          <div className="form-input d-flex ">
            <input
              type="text"
              name="keyword"
              id="keyword"
              placeholder="Tìm kiếm tên "
              ref={refContainer}
            />
          </div>
          <div className="form-input d-flex">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Tìm kiếm số điện thoại"
            />
            {isSearch ? (
              <button className="btn btn-danger" onClick={handleCancelSearch}>
                <span>Hủy</span>
              </button>
            ) : null}
            <button className="btn btn-success ml-1" onClick={handleSearch}>
              <i class="fa fa-search"></i>
              <span>Tìm kiếm</span>
            </button>
          </div>
        </div>
      </Toolbar>
      <Box className="box-admin">
        <Paper>
          <TableContainer>
            <button
              className="btn btn-danger"
              onClick={() => handleDeleleteAll()}
            >
              Delete
            </button>

            <Table aria-labelledby="tableTitle">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox
                      type="checkbox"
                      name="selectAll"
                      id="selectAll"
                      onChange={handleSelectAll}
                      checked={isCheckAll}
                    />
                  </TableCell>
                  {headCells.map((headCell) => (
                    <TableCell>
                      <TableSortLabel>{headCell.label}</TableSortLabel>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {userInfo.items?.map((row, index) => {
                  return (
                    <TableRow>
                      <TableCell>
                        <Checkbox
                          key={row.taiKhoan}
                          type="checkbox"
                          name={row.hoTen}
                          id={row.taiKhoan}
                          onChange={handleClick}
                          checked={isCheck.includes(row.taiKhoan)}
                        />
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        {row.taiKhoan}
                      </TableCell>
                      <TableCell align="left">{row.hoTen}</TableCell>
                      <TableCell className="contact" align="left">
                        <i
                          class="las la-edit"
                          onClick={() => {
                            handleUpdateUser();
                          }}
                        ></i>
                        <i
                          class="las la-exclamation-circle"
                          onClick={() => {
                            openDetailUser();
                          }}
                        ></i>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <Stack spacing={2} className="pagination-form">
            <Pagination
              count={userInfo.totalPages}
              page={page}
              onChange={handleChangePage}
              className="pagination"
              shape="rounded"
            />
          </Stack>
        </Paper>
      </Box>

      <UpDateUser />
      <DetailUser />
    </div>
  );
}
