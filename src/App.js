import './App.css';
import Convertor from './Convertor';
import Map1 from './Map1';

import { BrowserRouter } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='App'>
          <Convertor />
          <Map1 />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;


// import GoogleApiWrapper from './Map';
// import GoogleMap from './GoogleMap';