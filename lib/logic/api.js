import useSWR, {mutate} from 'swr';
import { fetcher } from './fetcher';

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
    const { data, error } = useSWR(`${BASE}/Posts`, fetcher)
    return {
      posts: data,
      isLoading: !error && !data,
      isError: error
    }
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