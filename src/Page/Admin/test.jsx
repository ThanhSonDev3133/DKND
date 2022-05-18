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

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "left" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel active={orderBy === headCell.id}>
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

// EnhancedTableHead.propTypes = {
//   onSelectAllClick: PropTypes.func.isRequired,
// };

// const EnhancedTableToolbar = (props) => {
//   const { numSelected } = props;
// };

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };
export default function Admin() {
  const [selected, setSelected] = React.useState([]);
  const userInfo = useSelector((state) => state.userReducer.fetchUserList);
  const isSearch = useSelector((state) => state.userReducer.isSearch);
  const [page, setPage] = React.useState(1);
  const [pageSize] = React.useState(10);
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const refContainer = useRef(React.createRef());
  const [arrId, setArrId] = useState([]);

  const handleUpdateUser = () => {
    dispatch(createAction(UPDATE_USER, true));
  };

  const openDetailUser = () => {
    dispatch(createAction(DETAIL_USER, true));
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = userInfo.items.map((n) => n.taiKhoan);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, taiKhoan) => {
    const selectedIndex = selected.indexOf(taiKhoan);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, taiKhoan);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };
  const isSelected = (taiKhoan) => selected.indexOf(taiKhoan) !== -1;

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
  // const handleDeleleteAll = () => {
  //   let arr = []
  //   console.log("arrid", arrId);
  //   arr.push(arrId, ...arrId);
  //   console.log("arrIds", arr);
  // };
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
          {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
          <TableContainer>
            {/* <button
              className="btn btn-danger"
              // onClick={() => handleDeleleteAll()}
            >
              Delete
            </button> */}

            <Table aria-labelledby="tableTitle">
              <EnhancedTableHead
                numSelected={selected.length}
                onSelectAllClick={handleSelectAllClick}
                rowCount={userInfo.count}
              />
              <TableBody>
                {userInfo.items?.map((row, index) => {
                  const isItemSelected = isSelected(row.taiKhoan);
                  return (
                    <TableRow
                      hover
                      onClick={(event) => {
                        handleClick(event, row.taiKhoan);
                        //setArrId([row.taiKhoan])
                      }}
                      role="checkbox"
                      tabIndex={-1}
                      key={row.taiKhoan}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          // value={row.taiKhoan}
                          // name="taiKhoan"
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
