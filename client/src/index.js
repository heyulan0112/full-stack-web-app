import { render } from "react-dom";
import {BrowserRouter, Routes, Route,} from "react-router-dom";

import './index.css';

import App from "./App";
import Register from "./routes/Register";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Test from "./routes/Test";
import Employee from "./routes/Employee";
import SearchCars from "./routes/SearchCars";

const rootElement = document.getElementById("root");
render(<BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="home" element={<Home />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="employee" element={<Employee />} />
            </Route>
            <Route path="test" element={<Test />} />
            <Route path="search-cars" element={<SearchCars />} />

        </Routes>
    </BrowserRouter>,
     rootElement);