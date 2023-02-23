export const lstore = {
    clear: () => localStorage.clear(),
    remove: key => localStorage.removeItem(key),
    key: index => localStorage.key(index),
    includes: key => localStorage.getItem(key) !== null,
    get length() { return localStorage.length },
    get(key) {
        const data = localStorage.getItem(key)
        return data ? JSON.parse(data) : null
    },
    set: (key, value) => localStorage.setItem(key, JSON.stringify(value))
}

export const sstore = {
    clear: () => sessionStorage.clear(),
    remove: key => sessionStorage.removeItem(key),
    key: index => sessionStorage.key(index),
    includes: key => sessionStorage.getItem(key) !== null,
    get length() { return sessionStorage.length },
    get(key) {
        const data = sessionStorage.getItem(key)
        return data ? JSON.parse(data) : null
    },
    set: (key, value) => sessionStorage.setItem(key, JSON.stringify(value))
}