import Feedback from './components/Feedback';
import ListExample from './components/ListExample';
import './App.css';
import Goal from './components/Goal';
import EffectExample from './components/EffectExample';
import ReducerExample from './components/ReducerExample';

const App = () => {
    return (
        <div className='App'>
            <ListExample />
            <Feedback />
            <Goal />
            <EffectExample />
            <ReducerExample />
        </div>
    );
};
export default App;
