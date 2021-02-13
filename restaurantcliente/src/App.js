import { Routes, Route } from 'react-router';
import Menu from './components/paginas/Menu';
import NuevoPlatillo from './components/paginas/NuevoPlatillo';

import Ordenes from './components/paginas/Ordenes'
import Sidebar from './components/ui/Sidebar';

import firebase, { FirebaseContext } from './firebase'

function App() {
  return (
    <FirebaseContext.Provider
      value={{firebase}}
    >
      <div className="md:flex min-h-screen">
        <Sidebar />

        <div className="md:w-3/5 xl:w-4/5 p-6">
          <Routes>
            <Route path="/ordenes" element={<Ordenes />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/nuevo-platillo" element={<NuevoPlatillo />} />
          </Routes>
        </div>
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;
