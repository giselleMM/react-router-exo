import {Routes, Route, Link} from "react-router-dom";
import More from "./More";

export default function Page1(){
    return(
        <div>
            <h1>Page 1 </h1>
            <ul>
                <li><Link to="/Encore"> Encore</Link></li>
            </ul>
            <Routes>
                <Route path="/Encore" element={<More></More>}/>
            </Routes>
        </div>
    )
}