export let renderVideo = (video) =>
{
    // let markup =
    // `
    //     <video id="myVideo" class="video__container--video" controls>
    //         <source src="${video.video_url}">
    //         Your browser does not support the video tag.
    //     </video>
    // `;

    let markup =
    `
        <video id="myVideo" class="video__container--video" controls>
            <source src="https://media.istockphoto.com/videos/young-woman-on-white-bed-knitting-in-bedroom-video-id1213148776">
            Your browser does not support the video tag.
        </video>
    `;
    document.querySelector(".video").insertAdjacentHTML("afterbegin", markup);
};
export let renderDescription = (video) =>
{
    let markup =
    `   
        <p class="video__description--paragraph">${video.description}</p>
    `;
    document.querySelector(".text__video").insertAdjacentHTML("afterbegin", markup);
};

export let renderRelatedVideo = (video) =>
{
    // let markup= 
    // `
    //     <div class="video__container" >
    //         <video id="myVideo" class = "video__container--video" controls>
    //             <source src="${video.video_url}">
    //             Your browser does not support the video tag.
    //         </video>
    //         <div class="discription_video" data-itemid = ${video.id}>
    //             <p>${video.title}</p>
    //         </div>
    //     </div>
    // `;

    let markup= 
    `
        <div class="video__container" >
            <video id="myVideo" class = "video__container--video" controls>
                <source src="https://media.istockphoto.com/videos/young-woman-on-white-bed-knitting-in-bedroom-video-id1213148776">
                Your browser does not support the video tag.
            </video>
            <div class="discription_video" data-itemid = ${video.id}>
                <p>${video.title}</p>
            </div>
        </div>
    `;
    document.querySelector(".video__show--related-js").insertAdjacentHTML("afterbegin", markup);
}

export let clearRelated =() =>
{
    document.querySelector(".video__show--related-js").innerHTML="";
}