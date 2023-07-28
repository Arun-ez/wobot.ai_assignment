import { Home } from '../pages/Home';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className="App">
      <Home />
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: "#fff",
            color: "black"
          }
        }}
      />
    </div>
  );
}

export { App };
