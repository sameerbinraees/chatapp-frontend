import io from 'socket.io-client';
import './App.css';
import logo from './logo.svg';

function App() {
    const socket = io('http://localhost:9000');

    const dummy = () => {
        socket.emit("disconnect")

    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
            </header>
        </div>
    );
}

export default App;
