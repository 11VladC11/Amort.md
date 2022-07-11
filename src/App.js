import Navigation from "./components/navigation/navigation.component";
import PreviewPage from "./components/preview-page/preview-page.component";
import WhyUs from "./components/why-us-page/why-us.component";

function App() {
  return (
    <div className="App">
		<Navigation/>
		<PreviewPage/>
		<WhyUs/>
    </div>
  );
}

export default App;
