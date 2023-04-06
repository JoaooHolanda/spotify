import { Route, Routes } from 'react-router-dom';


import Faq from './components/FAQ/Faq'

function App() {
    return (
        <div className="App">
            <Routes>
            
                <Route path="/Faq" element={<Faq />} />
            </Routes>
        </div>
    );
}

export default App;
