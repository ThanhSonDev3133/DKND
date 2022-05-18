import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./Page/Admin";
import Auth from "./Page/Auth";
import PageNotFound from "./Page/PageNotFound";
import SignUp from "./Page/SignUp";
import Term from "./Page/Term";

function App() {
  return (
    <Router>
      <Suspense>
        <Routes>
          {/* <Route exact path="/" element={<Learning_Page />} /> */}
          <Route exact path="/" element={<SignUp />} />
          <Route exact path="/dieukhoan" element={<Term />} />
          <Route exact path="/xacthuc" element={<Auth />} />
          <Route exact path="/quantri" element={<Admin />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
