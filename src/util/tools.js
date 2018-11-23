export const isEmptyByObj = (obj) => {
    for (const i in obj) {
        return true
    }
    return false
}