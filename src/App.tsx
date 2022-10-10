import {Container} from 'components/Container';
import {Header} from 'components/Header';

import {Search} from './components/Search';
import {UserCard} from './components/UserCard';


function App() {
    return (
        <Container>
            <Header/>
            <Search onSubmit={() => {}}/>
            <UserCard/>

        </Container>
    );
}

export default App;
