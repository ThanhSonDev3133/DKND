import React from "react";
import img1 from "../../assets/img/Image1.png";
import "./index.css";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  
};

export default function Term() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="term-section">
      <div className="term-header">
        <p>Current as of 20 Jan 2022</p>
        <h2>Privacy Policy</h2>
        <p>
          Your privacy is important to us at VitaOrga. We respect your privacy
          regarding any information we may collect from you across our website.
        </p>
      </div>
      <div className="term-content">
        <p>
          Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
          suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
          montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere
          vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien
          varius id. Eget quis mi enim, leo lacinia pharetra, semper.
        </p>
        <p>
          Eget in volutpat mollis at volutpat lectus velit, sed auctor.
          Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at.
          Suscipit tristique risus, at donec. In turpis vel et quam imperdiet.
          Ipsum molestie aliquet sodales id est ac volutpat.
        </p>
        <h3>What information do we collect?</h3>
        <p>
          Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
          odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis
          mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
          Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
          commodo consectetur convallis risus.
        </p>
        <p>
          Sed condimentum enim dignissim adipiscing faucibus consequat, urna.
          Viverra purus et erat auctor aliquam. Risus, volutpat vulputate
          posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat
          donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum
          quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra,
          porttitor.
        </p>
        <p>
          Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris
          id. Non pellentesque congue eget consectetur turpis. Sapien, dictum
          molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis
          velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh
          orci.
        </p>
        <div className="term-img">
          <img id="" src={img1} alt="Northern Lights, Norway" onClick={handleOpen}/>
        </div>
        <p>This is an image</p>
      </div>
      <div className="term-content">
        <h3>What information do we collect?</h3>
        <p>
          Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
          odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis
          mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
          Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
          commodo consectetur convallis risus. Sed condimentum enim dignissim
          adipiscing faucibus consequat, urna.
        </p>
        <p>
          Viverra purus et erat auctor aliquam. Risus, volutpat vulputate
          posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat
          donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum
          quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra,
          porttitor.
        </p>
        <p>
          Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris
          id. Non pellentesque congue eget consectetur turpis. Sapien, dictum
          molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis
          velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh
          orci.
        </p>
        <div className="term-img">
          <img id="" src={img1} alt="Northern Lights, Norway" onClick={handleOpen}/>
        </div>
        <p>This is an image</p>
      </div>
      <div className="term-content">
        <h3>What information do we collect?</h3>
        <p>
          Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
          odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis
          mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
          Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
          commodo consectetur convallis risus. Sed condimentum enim dignissim
          adipiscing faucibus consequat, urna.
        </p>
        <p>
          Viverra purus et erat auctor aliquam. Risus, volutpat vulputate
          posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat
          donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum
          quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra,
          porttitor. Ipsum sit mattis nulla quam nulla. Gravida id gravida ac
          enim mauris id.
        </p>
        <p>
          Non pellentesque congue eget consectetur turpis. Sapien, dictum
          molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis
          velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh
          orci.
        </p>
        <div className="term-img">
          <img id="" src={img1} alt="Northern Lights, Norway" onClick={handleOpen}/>
        </div>
        <p>This is an image</p>
      </div>
      <div className="term-content">
        <h3>What information do we collect?</h3>
        <p>
          Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
          odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis
          mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
          Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
          commodo consectetur convallis risus. Dolor lacus, eget nunc lectus in
          tellus, pharetra, porttitor.
        </p>
        <p>
          Sed condimentum enim dignissim adipiscing faucibus consequat, urna.
          Viverra purus et erat auctor aliquam. Risus, volutpat vulputate
          posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat
          donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum
          quam lorem id.
        </p>
        <p>
          Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris
          id. Non pellentesque congue eget consectetur turpis. Sapien, dictum
          molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis
          velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh
          orci.
        </p>
        <div className="term-img">
          <img id="" src={img1} alt="Northern Lights, Norway" onClick={handleOpen}/>
        </div>
        <p>This is an image</p>
      </div>
      <div className="btn-footer mb-5 text-center">
      <Button variant="outlined" color="success"><a href="/">Quay lại trang đăng ký</a></Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: '85%' ,height: '85%'}}>
        <img id="" src={img1} alt="Northern Lights, Norway" width='100%' height='100%' />
        </Box>
      </Modal>
    </div>
  );
}
