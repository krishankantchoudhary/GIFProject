import Random from "./components/Random";
import Text from "./components/Text";

function App() {
  return (
  <div className="flex flex-col background h-screen w-full items-center">
    <h1 className="text-3xl bg-white mt-[40px] w-11/12 font-bold rounded-[5px] pt-2 pb-2 text-center">RANDOM GIFS</h1>
    <div className="flex flex-col w-full items-center">
      <Random></Random>
      <Text></Text>
    </div>
  </div>
  );
}

export default App;
