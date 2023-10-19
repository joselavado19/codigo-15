import {  DashBoardBase, Header, SideBar, TabListBase } from "./components";


function App() {
  return (
    <>
      <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
        <SideBar />
        <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8">
          <Header />
          <DashBoardBase/>
        
        </main>
      </div>
    </>
  );
}

export default App;
