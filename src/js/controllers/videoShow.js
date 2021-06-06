import videoShowModel from '../models/videoShowModel';
import tutorialsModel from '../models/tutorialsModel';
import * as videoShowView from '../views/videoShowView';
import * as tutorials from './tutorials';

let videos = [], filteredTutorials=[];
const getVideoAsync = async () =>
{
    const videoID = new URLSearchParams(location.href.split('?')[1]).get('id');

    let videoObject = new videoShowModel(videoID);

    try
    {
        await videoObject.getVideo();

        // get tutorials from the model
        let video = videoObject.results;
        console.log(video);
        
        // preview the video and its description
        videoShowView.renderVideo(video);
        videoShowView.renderDescription(video);

        // deal with related products
        RelatedProducts(video);

    }
    catch(error)
    {
        console.log(error);
    }

}
getVideoAsync();

let RelatedProducts = async(video) =>
{
    getVideos(video);
}

export const getVideos = async (video) =>
{
    let tutorialsObject = new tutorialsModel();

    try
    {
        await tutorialsObject.getTutorials();

        // get tutorials from the model
        videos = tutorialsObject.results;
        console.log(videos);

        videos.forEach(current =>
        {
            if(current.title.includes(video.title))
            {
                filteredTutorials.push(current);
            }  
        })
        if(filteredTutorials.length !== 0)
        {
            videoShowView.clearRelated();
            filteredTutorials.forEach(cur =>
            {
                videoShowView.renderRelatedVideo(cur); 
            });
        }

    }
    catch(error)
    {
        console.log(error);
    }
}


// handle clicking on video to move to video_show page
let search = document.querySelector(".video__show--related-js");
if(search)
{
    search.addEventListener("click", (e) =>
    {
        let id = e.target.closest(".discription_video").dataset.itemid;
        location.href = `video_show.html?id=${id}`;
        console.log(id, typeof(id));
    });
}