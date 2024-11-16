import { Provider } from 'inversify-react';

import { container } from './inversify.config';
import Auth from './pages/Auth/Auth';

function App() {
  return (
    <Provider container={container}>
      <Auth />
    </Provider>
  );
}

export default App;
