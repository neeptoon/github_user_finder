import {Container} from "components/Container";
import {Header} from "components/Header";
import {Search} from "./components/Search";


function App() {
  return (
    <Container>
        <Header/>
        <Search onSubmit={() => {}}/>

    </Container>
  );
}

export default App;
