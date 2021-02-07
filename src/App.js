import { BrowserRouter as Router } from 'react-router-dom';
import { Body } from './Body';
import Routes from './Routes';

function App() {
    return (
        <Router>
            <Routes />
            <Body />
        </Router>
    );
}

export default App;
