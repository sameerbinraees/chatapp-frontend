import io from 'socket.io-client';
import './App.css';
import logo from './logo.svg';

function App() {
    const socket = io('http://localhost:9000');

    const dummy = () => {
        console.log("hi");
        socket.emit("disconnect")

    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p onClick={dummy}>Click</p>
            </header>
        </div>
    );
}

export default App;
