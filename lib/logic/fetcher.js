export let fetcher = (...args) => fetch(...args).then(res => {
    return res.json()
})
