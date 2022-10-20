import "./App.css";
import { Provider } from "react-redux";
import store from "./components/context/store/store";
import { createStore } from "redux";
import MainScreen from "./components/screens/MainScreen";
import allReducers from "./components/context/reducers";
import { BrowserRouter } from "react-router-dom";

function App() {
    const myStore = createStore(allReducers);
    return (
        <div className="App">
            <Provider store={myStore}>
                <BrowserRouter>
                    <MainScreen />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
