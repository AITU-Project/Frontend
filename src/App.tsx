import { Provider } from 'inversify-react';

import { container } from './inversify.config';
import Studio from './pages/Studio/Studio';

function App() {
  return (
    <Provider container={container}>
      <Studio />
    </Provider>
  );
}

export default App;
