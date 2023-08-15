export const forceReloadPage = (time = 1000) => {
    setTimeout(() => {
        window.location.reload()
    }, time)
}