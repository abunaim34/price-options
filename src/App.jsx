
import './App.css'
import LineChart from './Components/LineChart/LineChart'
// import Daisynav from './Components/DaisyNav/Daisynav'
import NavBar from './Components/NavBar/NavBar'
import Phones from './Components/Phones/Phones'
import PriceOptions from './PriceOptions/PriceOptions'

function App() {

  return (
    <>
      {/* <Daisynav></Daisynav> */}
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
