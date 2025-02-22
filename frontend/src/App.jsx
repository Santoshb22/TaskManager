import { Container } from "@mui/material"
import Nav from "./components/AppBar"
import {TaskManager} from "./components/TaskManager"

const App = () => {
  
  return (
    <div>
      <Nav/>
      <Container>
        <TaskManager/>
      </Container>
    </div>
  )
}

export default App