import './App.css';
import Convertor from './Convertor';
import Map from './Map';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='App'>
          <Convertor />
          <Map />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
