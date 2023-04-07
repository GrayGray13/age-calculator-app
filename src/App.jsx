import './App.scss';
import './styles/font.scss';
import Footer from "./components/footer.jsx";
import DateCard from "./components/dateCard/dateCard.jsx";


function App() {

    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <h1 className="text-center">Age Calculator</h1>

                    <DateCard/>

                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default App
