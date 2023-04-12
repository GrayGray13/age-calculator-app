import './App.scss';
import './styles/font.scss';
import Footer from "./components/footer.jsx";
import DateCard from "./components/dateCard/dateCard.jsx";


function App() {

    return (
        <div className="App">
            <div className="container d-flex vh-100 align-items-center">
                <div className="row justify-content-center">
                    <DateCard/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default App
