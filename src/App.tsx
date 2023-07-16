import Routing from '@oxford/routing';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@oxford/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routing />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
