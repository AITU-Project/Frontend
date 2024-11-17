import { Provider } from 'inversify-react';

import { container } from './inversify.config';
import Registration from './pages/Registration/Registration';

function App() {
  return (
    <Provider container={container}>
      <Registration />
    </Provider>
  );
}

export default App;
