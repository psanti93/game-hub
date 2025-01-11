

// the api we use crops an image in flight. We want to crop it down so devices with slower networks don't have to
// take forever to load it

const getCroppedImageUrl = (url: string) => {
    // console.log("url", url)
    const target = 'media/'

    const index = url.indexOf(target) + target.length
    // notes for logic to refer back to
    // console.log("beginning to index", url.slice(0,index))
    // console.log("after index", url.slice(index))
    // console.log("target index", url.indexOf(target))
    // console.log("target length", target.length)
    //
    // console.log("url index", index)
    // console.log("url slice:", url.slice(index))

    return url.slice(0,index) + 'crop/600/400/' + url.slice(index)
}

export default getCroppedImageUrl;