const videoEl =document.getElementById('video')
const button =document.getElementById('button')


//Prompt to select media stream , pass to video elment then play

async function selectMediaStream(params) {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()  
        videoEl.srcObject = mediaStream
        videoEl.onloadedmetadata = () => {
            videoEl.play()

        }
    } catch (error) {
        //catch Error Here
        console.log('Error karan', error)
    }
    
}

button.addEventListener('click', async () => {
    //Disable button
    button.disabled = true
    //start p in p 
    await videoEl.requestPictureInPicture()
    //reset Button
    button.disabled = false

})

//on load

selectMediaStream()