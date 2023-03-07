import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes , useLocation  } from 'react-router-dom';
import ReactLoading from "react-loading";

import { AnimatePresence } from "framer-motion";

// import Home from './components/Home/Home';
// import SideBar from './components/SideBar/SideBar';

// import Services from './components/Services/Services';
// import Works from './components/Works/Works';
// import About from './components/About/About';
// import Contact from './components/Contact/Contact';
// import OneProject from './components/OneProject/OneProject';

const LazyHome = React.lazy(()=> import('./components/Home/Home'));
const LazyServices = React.lazy(()=> import('./components/Services/Services'));
const LazyWorks = React.lazy(()=> import('./components/Works/Works'));
const LazyAbout = React.lazy(()=> import('./components/About/About'));
const LazyContact = React.lazy(()=> import('./components/Contact/Contact'));
const LazyOneProject = React.lazy(()=> import('./components/OneProject/OneProject'));

function App() {

  const loadingMarkup = (
    <div className='d-flex justify-content-center align-items-center bg-dark' style={{ height:"100vh" }}>
      <div>
      <ReactLoading type="spin" color="#435aff"
          height={100} width={50} />
      </div>
  </div>
  )

  // const location = useLocation();

  return ( <>


    
    <BrowserRouter>
        <Routes>

          <Route exact path="/" element={
            <React.Suspense fallback={loadingMarkup}>
              <LazyHome/>
            </React.Suspense>
          } />

          <Route exact path="/home" element={
            <React.Suspense fallback={loadingMarkup}>
              <LazyHome/>
            </React.Suspense>
          } />

          <Route exact path="/services" element={
            <React.Suspense fallback={loadingMarkup}>
              <LazyServices/>
            </React.Suspense>
          } />

          <Route exact path="/works" element={
            <React.Suspense fallback={loadingMarkup}>
              <LazyWorks/>
            </React.Suspense>
          } />

          <Route exact path="/about" element={
            <React.Suspense fallback={loadingMarkup}>
              <LazyAbout/>
            </React.Suspense>
          } />

          <Route exact path="/contact" element={
            <React.Suspense fallback={loadingMarkup}>
              <LazyContact/>
            </React.Suspense>
          } />

          <Route exact path="/oneProject" element={
            <React.Suspense fallback={loadingMarkup}>
              <LazyOneProject/>
            </React.Suspense>
          } />

          {/* <Route exact path="/" element={<Home/>} /> */}
          {/* <Route exact path="/home" element={<Home/>} /> */}
          {/* <Route exact path="/sideBar" element={<SideBar/>} /> */}
          {/* <Route exact path="/services" element={<Services/>} /> */}
          {/* <Route exact path="/works" element={<Works/>} /> */}
          {/* <Route exact path="/about" element={<About/>} /> */}
          {/* <Route exact path="/contact" element={<Contact/>} /> */}
          {/* <Route exact path="/oneProject" element={<OneProject/>} /> */}
        {/* </Routes> */}

        </Routes>
  </BrowserRouter>
  </>
 
  );
}

export default App;
