export const forceReloadPage = (time = 3000) => {
    setTimeout(() => {
        window.location.reload()
    }, time)
}