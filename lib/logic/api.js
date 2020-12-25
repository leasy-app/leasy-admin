import useSWR, {mutate} from 'swr';
import { fetcher } from './fetcher';
import { asyncForeach } from './util';

const BASE = 'https://calm-hamlet-80940.herokuapp.com/polls';

export function useCategories() {
    const { data, error } = useSWR(`${BASE}/Categories`, fetcher)
    return {
      cats: data,
      isLoading: !error && !data,
      isError: error
    }
}

export function imageAddr(p){
    p = p ? p: "";
    return p.startsWith("cimg-") ? "https://calm-hamlet-80940.herokuapp.com/polls/download?dis=" + p : undefined
}

export function usePosts() {
    const { data, error } = useSWR(`${BASE}/Posts`, async (args) => {
        let x = await fetcher(args);
        if(x.length){
            await asyncForeach(x, async p => {
                let rx = await getProfile(p.Writer_id);
                if(rx && rx.length === 2){
                    p.authorPhoto = rx[0];
                    p.authorName = rx[1];
                }
            });
        }
        return x;
    })
    return {
      posts: data,
      isLoading: !error && !data,
      isError: error
    }
}

export function useCourses() {
    const { data, error } = useSWR(`${BASE}/GetCourse`, async (args) => {
        let x = await fetcher(args);
        // if(x.length){
        //     await asyncForeach(x, async p => {
        //         let rx = await getProfile(p.Writer_id);
        //         if(rx && rx.length === 2){
        //             p.authorPhoto = rx[0];
        //             p.authorName = rx[1];
        //         }
        //     });
        // }
        return x;
    })
    return {
      courses: data,
      isLoading: !error && !data,
      isError: error
    }
}

export function useUsers(){
    const { data, error } = useSWR(`${BASE}/getUser`, fetcher)
    return {
      users: data,
      isLoading: !error && !data,
      isError: error
    }
}

export async function getProfile(username){
    let result  = await fetcher(`${BASE}/getUser?username=${username}`);
    if(result && result[0]){
        return [result[0].photo, result[0].name];
    }
    return [];
}

export async function addCategory(name, photo) {
    let result = await fetcher(`${BASE}/AddCategorie?name=${name}&photo=${photo}`);
    if(result.valu){
        mutate(`${BASE}/Categories`);
    }
    return result.valu;
}
export async function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);
    let fname = `cimg-${new Date().getTime().toString()}`;
    formData.append('description', fname);
    const options = {
        method: 'POST',
        body: formData,
    };
    let res = await (await fetch(`${BASE}/upload1`, options)).json();
    return {ok: res.valu, fname};
}
export async function login(user, pass) {
    const formData = new FormData();
    formData.append('Id', user);
    formData.append('pas', pass);
    const options = {
        method: 'POST',
        body: formData,
    };
    let res = await (await fetch(`${BASE}/AdminLogin`, options)).json();
    return res.valu;
}