import { GithubUser } from './github-user.interface';
export interface GithubUsersResp { // es propio de la respuesta de github
    total_count: number;
    incomplete_results: boolean;
    items: GithubUser[];
}
