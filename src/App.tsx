import {Container} from 'components/Container';
import {Header} from 'components/Header';

import {useState} from 'react';

import {Search} from './components/Search';
import {UserCard} from './components/UserCard';

import {defaultUser} from './mock';
import {GithubError, GithubUser, LocalGithubUser} from './types';
import {isGithubUser} from './utils/typeGuards';
import {reMapUser} from './utils/reMapUser';

const BASE_URL = 'https://api.github.com/users/';


function App() {
    const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);

    const fetchUser = async (userName: string) => {
        const response = await fetch(`${BASE_URL}${userName}`);
        const user = await response.json() as GithubUser | GithubError;
        isGithubUser(user) ? setUser(reMapUser(user)) : setUser(null);
    };
    return (
        <Container>
            <Header/>
            <Search hasError={!user} onSubmit={fetchUser}/>
            {user && <UserCard {...user}/>}
        </Container>
    );
}

export default App;
