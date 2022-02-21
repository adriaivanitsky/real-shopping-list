import Shopping from './views/Shopping';
import './App.css';
import { ItemsProvider } from './context/ItemsContext';

export default function App() {
  return (
    <ItemsProvider>
      <Shopping />
    </ItemsProvider>
  );
}
