import React, {useEffect} from 'react';
import './App.css';
import { Layout } from './components/Layout';

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
            </header>
            <Layout />
        </div>
    );
}

export default App;
