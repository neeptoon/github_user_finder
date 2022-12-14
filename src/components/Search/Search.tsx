import React from 'react';

import {ReactComponent as SearchIcon} from 'assets/icon-search.svg';

import {Button} from '../Button';

import styles from './Search.module.scss';

interface SearchProps {
    hasError: boolean,
    onSubmit: (text: string) => void

}

type FormFields = {
    userName: HTMLInputElement
}

export const Search = ({hasError, onSubmit}: SearchProps) => {
    const handleSubmit = (evt: React.FormEvent<HTMLFormElement  & FormFields>) => {
        evt.preventDefault();
        const text = evt.currentTarget.userName.value;

        if (text.trim()) {
            onSubmit(text);
            evt.currentTarget.reset();
        }
    };
    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <div className={styles.search}>
                <label htmlFor="search">
                    <span className="visually-hidden">Введите имя разработчика</span>
                    <SearchIcon/>
                </label>
                <input
                    className={styles.textField}
                    id="search"
                    name="userName"
                    type="text"
                    placeholder="Search Github username...."
                />
                {hasError && <p className={styles.error}>there is no user</p>}
                <Button>Search!!</Button>
            </div>
        </form>
    );
};
