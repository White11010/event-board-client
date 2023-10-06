import './App.css'
import {EbButton} from "./shared/ui/eb-button";

function App() {
  const onFirstButtonClick = () => {
    console.log(1)
  }
  const onSecondButtonClick = () => {
    console.log(2)
  }

  return (
    <>
      <div>
        <EbButton onClick={onFirstButtonClick}>Test</EbButton>
        <EbButton onClick={onSecondButtonClick} type={"secondary"}>Test 2</EbButton>
      </div>
    </>
  )
}

export default App
