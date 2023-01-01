import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories } from "./components";
import heroapi, { popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data'

function App() {

  return (
    <>
      <Navbar />
      <Cart />
      <main className="flex flex-col gap-16 relative">
        <Hero {...heroapi} />
        <Sales {...popularsales} />
        <FlexContent {...highlight} />
        <Sales {...toprateslaes} />
        <FlexContent {...sneaker} />
        <Stories {...story} />
      </main>
      <Footer {...footerAPI}/>
    </>
  );
}

export default App;
