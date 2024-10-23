import { useState } from 'react';
import Navigation from './components/main/Navigation';
import Content from './components/main/Content';

const App = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
      <Content isAdmin={isAdmin} />
    </div>
  );
};

export default App;
