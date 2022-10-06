export type LocalGithubUser = {
    login: string,
    id: number,
    avatar: string,
    name: string,
    company: string,
    blog: string,
    location: string,
    bio: string,
    repos: string,
    followers: number,
    following: number,
    created: string
}

export type GithubUser = {
    login: string,
    id: number,
    avatar_url: string,
    name: string,
    company: string,
    blog: string,
    location: string,
    bio: string,
    public_repos: string,
    followers: number,
    following: number,
    created_at: string
}

export type GithubError = {
    message: string,
    documentation_url: string
}