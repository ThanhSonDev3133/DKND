// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Header from "../../HOCs/Header";
// import createAction from "../../Redux/Action";
// import { getData } from "../../Redux/Action/user";
// import { GETDATA } from "../../Redux/Containts";
// import img from "../../assets/img/logoVitaorga.png";
// import img1 from "../../assets/img/Background-header.png";
// import img2 from "../../assets/img/Section.png";
// import "./index.css";
// export default function Learning_Page() {
//   // const { data } = useSelector((state) => state.userReducer);
//   // const dispatch = useDispatch();
//   // const form = {
//   //   idReference: 0,
//   //   ten: "string",
//   // };
//   // const handledata = () => {
//   //   return data.map((item, index) => {
//   //     return <p key={index}>{item.ten}</p>;
//   //   });
//   // };
//   // useEffect(() => {
//   //   console.log(data);
//   //   dispatch(getData(form));
//   // }, [dispatch]);

//   return (
//     <div className="home_page ">
//       <header>
//         <div className="header_top">
//           <div className="header_left">
//             <img src={img} alt="" />
//           </div>
//           <div className="header_right">
//             <button className="btn ">
//               Apply now <i class="fa fa-arrow-down"></i>
//             </button>
//           </div>
//         </div>
//         <div className="header_banner">
//           <div className="banner_img">
//             <div className="banner_left"></div>
//             <div className="banner_right">
//               <span></span>
//               <img src={img1} alt="" />
//             </div>
//           </div>
//           <div className="banner_text">
//             <div className="text-wellcome">
//               <h1>Wellcome to</h1>
//               <h1>VitaOrga</h1>
//             </div>
//             <div className="text-info">
//               We partner with scientists, engineers and operators to build
//               deeptech startups that slash emissions, remove carbon, and cool
//               the planet.
//             </div>
//             <button className="btn ">
//               Apply now <i class="fa fa-arrow-down"></i>
//             </button>
//           </div>
//         </div>
//       </header>
//       <div className="body">
//         <div className="body_section">
//           <div className="section_text">
//             <p>
//               "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
//               consectetur, adipisci velit..."
//             </p>
//           </div>
//           <div className="section_img">
//             <img src="" alt="" />
//             <p>Name</p>
//             <p>Function</p>
//           </div>
//         </div>
//         <div className="body_content">
//           <div className="content_section">
//             <div className="content_params">
//               <div className="body_text">
//                 <h2>Why do we use it?</h2>
//                 <p>
//                   It is a long established fact that a reader will be distracted
//                   by the readable content of a page when looking at its layout.
//                 </p>
//               </div>
//             </div>
//             <div className="content_params">
//               <div className="body_text">
//                 <h2>Why do we use it?</h2>
//                 <p>
//                   It is a long established fact that a reader will be distracted
//                   by the readable content of a page when looking at its layout.
//                 </p>
//               </div>
//               <div className="body_img">
//                 <img src="" alt="" />
//               </div>
//             </div>
//           </div>
//           <div className="content_section">
//             <div className="content_params">
//               <div className="body_text">
//                 <h2>Why do we use it?</h2>
//                 <p>
//                   It is a long established fact that a reader will be distracted
//                   by the readable content of a page when looking at its layout.
//                 </p>
//               </div>
//               <div className="body_img">
//                 <img src="" alt="" />
//               </div>
//             </div>
//             <div className="content_params">
//               <div className="body_text">
//                 <h2>Why do we use it?</h2>
//                 <p>
//                   It is a long established fact that a reader will be distracted
//                   by the readable content of a page when looking at its layout.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="content_section">
//             <div className="content_params">
//               <div className="body_text">
//                 <h2>Why do we use it?</h2>
//                 <p>
//                   It is a long established fact that a reader will be distracted
//                   by the readable content of a page when looking at its layout.
//                 </p>
//               </div>
//             </div>
//             <div className="content_params">
//               <div className="body_text">
//                 <h2>Why do we use it?</h2>
//                 <p>
//                   It is a long established fact that a reader will be distracted
//                   by the readable content of a page when looking at its layout.
//                 </p>
//               </div>
//               <div className="body_img">
//                 <img src="" alt="" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="body_icon">
//           <img src="" alt="" />
//         </div>
//         <div className="body_ourStore container-fluid">
//           <div className="row">
//             <div className="col-4">
//               <p>Our locations</p>
//               <h2>Visit our stores</h2>
//               <p>Find us at these locations</p>
//             </div>
//             <div className="col-4">
//               <div className="text_name">
//                 <h3>Melbourne</h3>
//                 <p>100 Flinders Street</p>
//                 <p>Melbourne VIC 3000 AU</p>
//               </div>
//               <div className="text_name">
//                 <h3>Melbourne</h3>
//                 <p>100 Flinders Street</p>
//                 <p>Melbourne VIC 3000 AU</p>
//               </div>
//               <div className="text_name">
//                 <h3>Melbourne</h3>
//                 <p>100 Flinders Street</p>
//                 <p>Melbourne VIC 3000 AU</p>
//               </div>
//             </div>
//             <div className="col-4">
//               <div className="text_name">
//                 <h3>Melbourne</h3>
//                 <p>100 Flinders Street</p>
//                 <p>Melbourne VIC 3000 AU</p>
//               </div>
//               <div className="text_name">
//                 <h3>Melbourne</h3>
//                 <p>100 Flinders Street</p>
//                 <p>Melbourne VIC 3000 AU</p>
//               </div>
//               <div className="text_name">
//                 <h3>Melbourne</h3>
//                 <p>100 Flinders Street</p>
//                 <p>Melbourne VIC 3000 AU</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="contactUs container-fluid">
//           <div className="row">
//             <div className="col-8">
//               <img src="" alt="" />
//             </div>
//             <div className="col-4">
//               <h2>Contact us</h2>
//               <form action="">
//                 <div className="form-group">
//                   <label htmlFor="">
//                     Name <span className="text-danger">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Enter your name"
//                     className="form-control"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="">
//                     Email <span className="text-danger">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Enter your name"
//                     className="form-control"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="">
//                     Phone number <span className="text-danger">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Enter your name"
//                     className="form-control"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="">
//                     Message <span className="text-danger">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Enter your name"
//                     className="form-control"
//                   />
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       <footer className="container-fluid">
//         <div className="row">
//           <div className="footer_left col-4">
//             <div className="footer_text">
//               <div className="img_logo">
//                 <img src={img} alt="" />
//               </div>
//               <div className="text">
//                 <p>
//                   Design amazing digital experiences that create more happy in
//                   the world.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="footer_right col-8">
//             <div className="row">
//               <div className="col-3">
//                 <h3>Product</h3>
//                 <span>Overview</span>
//                 <span>Overview</span>
//                 <span>Overview</span>
//                 <span>Overview</span>
//                 <span>Overview</span>
//                 <span>Overview</span>
//               </div>
//               <div className="col-3">
//                 <h3>Product</h3>
//                 <span>Overview</span>
//                 <span>Overview</span>
//                 <span>Overview</span>
//                 <span>Overview</span>
//                 <span>Overview</span>
//                 <span>Overview</span>
//               </div>
//               <div className="col-3 ">
//                 <h3>Product</h3>
//                 <span>Overview</span>
//                 <span>Overview</span>
//                 <span>Overview</span>
//                 <span>Overview</span>
//                 <span>Overview</span>
//                 <span>Overview</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
