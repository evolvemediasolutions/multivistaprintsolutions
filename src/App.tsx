/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { Sustainability } from "./pages/Sustainability";
import { Industries } from "./pages/Industries";
import { Careers } from "./pages/Careers";
import { Contact } from "./pages/Contact";
import { Infrastructure } from "./pages/Infrastructure";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="infrastructure" element={<Infrastructure />} />
          <Route path="sustainability" element={<Sustainability />} />
          <Route path="markets" element={<Industries />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
