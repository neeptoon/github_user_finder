import {UserStat} from '../UserStat';

import {LocalGithubUser} from '../../types';

import {UserTitle} from '../UserTitle';

import styles from './UserCard.module.scss';

interface UserCardProps extends LocalGithubUser { }

export const UserCard = (props: UserCardProps) => (
    <div className={styles.userCard}>
        <img
            className={styles.avatar}
            src={props.avatar}
            alt={props.login}
        />
        <UserTitle
            name={props.name}
            created={props.created}
            login={props.login}
        />
        <p className={`${styles.bio} ${props.bio ? '' : `${styles.empty}`}`}>
            {props.bio || 'This profile has no bio'}
        </p>

        <UserStat
            repos={props.repos}
            followers={props.followers}
            following={props.following}
        />
    </div>
);
