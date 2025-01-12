

// the api we use crops an image in flight. We want to crop it down so devices with slower networks don't have to
// take forever to load it

const getCroppedImageUrl = (url: string) => {
    const target = 'media/'

    // target.length grabs the value of the 'media/' and appends it io/ (play around by adding a number instead of target.length)
    const index = url.indexOf(target) + target.length;
    // notes for logic to refer back to
    // console.log("url", url)
    //
    // console.log("beginning to index", url.slice(0,index)) // https://media.rawg.io/media/
    // console.log("after index", url.slice(index)) // games/942/9424d6bb763dc38d9378b488603c87fa.jpg
    // // every indiv character (ex: https 'h' is 0, 't' is 1 etc.) is an index
    // // `media/` becomes an index of itself at 22
    // console.log("index of target", url.indexOf(target))
    // console.log("target length", target.length)
    //
    // console.log("url index", index)
    // console.log("url slice:", url.slice(index))

    return url.slice(0,index) + 'crop/600/400/' + url.slice(index)
}

export default getCroppedImageUrl;