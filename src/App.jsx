import Feedback from './components/Feedback';
import ListExample from './components/ListExample';
import './App.css';
import Goal from './components/Goal';

const App = () => {
    return (
        <div className='App'>
            <ListExample />
            <Feedback />
            <Goal />
        </div>
    );
};
export default App;
