import Feedback from './components/Feedback';
import ListExample from './components/ListExample';
import './App.css';
import Goal from './components/Goal';
import EffectExample from './components/EffectExample';
import ReducerExample from './components/ReducerExample';
import RefExample from './components/RefExample';
import ElementTree from './components/ElementTree';
import LiveOrders from './components/LiveOrders';
import ConfirmationDialog from './components/ConfirmationDialog';
import Buttons from './components/Buttons';
import CursorPosition from './components/CursorPosition';
import RenderProps from './components/RenderProps';
import ForTest from './components/ForTest';

const App = () => {
  return (
    <div className="App">
      <ListExample />
      <Feedback />
      <Goal />
      <EffectExample />
      <ReducerExample />
      <RefExample />
      <ElementTree />
      <LiveOrders />
      <ConfirmationDialog />
      <Buttons />
      <CursorPosition />
      <RenderProps />
      <ForTest />
    </div>
  );
};
export default App;
