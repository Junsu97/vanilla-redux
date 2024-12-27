import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Detail from "./routes/Detail.tsx";
import Home from "./routes/Home.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/:id" element={<Detail/>}/>
            </Routes>
        </Router>
    )
}

export default App
