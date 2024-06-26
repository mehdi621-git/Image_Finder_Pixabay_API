import Header from "./components/header";
import Input from "./components/input";
import Main from "./context";
import Image from "./components/dataimage";
import Crum from "./components/crum";
import Load from "./components/load"

const App=()=>{

  return <>
  <Main>
  
  <Header></Header>
  <Input></Input>
  <Load></Load>
  <Image></Image>
  
  <Crum></Crum>
  
  
  </Main>
  </>
}
export default App;