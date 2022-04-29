import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Page1 from "./Pages/Page1";

export default function RouterBasic(){
    return(
        <BrowserRouter>
            <div>
                <h1>Mon Router</h1>
                <ul>
                    <li><Link to="/Page1">Page 1 </Link></li>
                </ul>

                <Routes>
                    <Route path="/Page1" element={<Page1></Page1>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}