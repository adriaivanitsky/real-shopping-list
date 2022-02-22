import Shopping from './views/Shopping';
import './App.css';
import { ItemsProvider } from './context/ItemsContext';
import Header from './components/Header';

export default function App() {
  return (
    <ItemsProvider>
      <Header />
      <Shopping />
    </ItemsProvider>
  );
}
