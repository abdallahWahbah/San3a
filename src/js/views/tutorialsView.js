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

    let sites = ["https://media.istockphoto.com/videos/view-of-knitting-with-white-yarn-video-id1213159875",
                "https://media.istockphoto.com/videos/young-woman-on-white-bed-knitting-in-bedroom-video-id1213148776",
                "https://media.istockphoto.com/videos/little-boy-playing-plastic-blocks-toy-on-sofa-video-id1167335085",
                "https://media.istockphoto.com/videos/street-artists-and-painters-at-work-video-id510111674",
                "https://media.istockphoto.com/videos/installing-wall-tile-video-id531909616",
                "https://media.istockphoto.com/videos/young-woman-embroider-cotton-video-id1062562278",
                "https://media.istockphoto.com/videos/closeup-little-girl-using-pottery-wheel-at-atelier-video-id918938220",
                "https://media.istockphoto.com/videos/sculptor-video-id645543606"];
    const randomIndex = Math.floor(Math.random() * sites.length);
    // console.log(randomIndex, sites[randomIndex]);

    let markup = 
    `
        <div class="video__container" >
            <video id="myVideo" class = "video__container--video" controls>
                <source src="${sites[randomIndex]}" type="video/mp4">
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