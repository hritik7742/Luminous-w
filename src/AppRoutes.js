// import React from "react";
// import { Routes, Route } from "react-router-dom";

// import Index from "./pages/Index.js";


// const AppRoutes = () => {
//     return (
//         <Routes>
//             <Route exact path="/" element={<Index/>} />
//             <Route exact path="/index" element={<Index />} />
//         </Routes>
//     );
// };

// export default AppRoutes;

import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Epgrid7_yCRVMJpH from '../src/components/Epgrid7_yCRVMJpH'; // Import the product list page component
import Epoverview1_8DfZz6C2 from '../src/components/Epoverview1_8DfZz6C2'; // Import the product detail page component
import Index from './pages/Index.js';

const AppRoutes = () => {
    return (
        
        <Routes>
            {/* Define a route for the Index page */}
            <Route exact path="/" element={<Index />} />
            <Route path="/index" element={<Index />} />

            {/* Define a route for the product list page */}
            <Route path="/products" element={<Epgrid7_yCRVMJpH />} />

            {/* Define a route for the product detail page */}
            <Route path="/product/:id" element={<Epoverview1_8DfZz6C2 />} />

        </Routes>
      
    );
};

export default AppRoutes;

