export let renderTutorial = (tutorial) =>
{
    // let markup = 
    // `
    //     <div class="video__container" >
    //         <video id="myVideo" class = "video__container--video" controls>
    //             <source src="${tutorial.video_url}" type="video/mp4">
    //             Your browser does not support the video tag.
    //         </video>
    //         <div class="discription_video" data-itemid = ${tutorial.id}>
    //             <p>${tutorial.title}</p>
    //         </div>
    //     </div>
    // `;

    let markup = 
    `
        <div class="video__container" >
            <video id="myVideo" class = "video__container--video" controls>
                <source src="https://media.istockphoto.com/videos/young-woman-on-white-bed-knitting-in-bedroom-video-id1213148776" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="discription_video" data-itemid = ${tutorial.id}>
                <p>${tutorial.title}</p>
            </div>
        </div>
    `;
    document.querySelector(".Tutorials__videos__section").insertAdjacentHTML("beforeend", markup);
}
export let clearTutrialList = () =>
{
    document.querySelector(".Tutorials__videos__section").innerHTML="";
}