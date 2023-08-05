import Charts from "./components/Charts";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SpecialOffer from "./components/SpecialOffer";
import Stats from "./components/Stats";
import TopProducts from "./components/TopProducts";

const App = () => {
  return (
    <div className='min-h-screen p-8 flex gap-10 overflow-hidden'>
      <Sidebar />
      <div className='flex-1 h-full'>
        <Header />
        <div className='flex flex-col gap-6 h-full'>
          <Stats />
          <Charts />
          <div className='flex gap-6'>
            <TopProducts />
            <SpecialOffer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
