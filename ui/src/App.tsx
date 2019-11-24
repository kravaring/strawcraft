import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

const loadData = async () => {
    const response = await fetch('/api/items');
    const items = await response.json();
    console.log(items);
};

const App: React.FC = () => {
    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            </header>
        </div>
    );
}

export default App;
