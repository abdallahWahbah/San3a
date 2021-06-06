import tutorialsModel from '../models/tutorialsModel';
import * as tutorialsView from '../views/tutorialsView';

export const getTutorialsAsync = async () =>
{
    let tutorialsObject = new tutorialsModel();

    try
    {
        await tutorialsObject.getTutorials();

        // get tutorials from the model
        let tutorials = tutorialsObject.results;
        console.log(tutorials);

        tutorials.forEach(current =>
        {
            tutorialsView.renderTutorial(current); 
        });
        
        handleSearch(tutorials);

        return tutorials;
    }
    catch(error)
    {
        console.log(error);
    }

}
getTutorialsAsync();


// handle clicking on video to move to video_show page
let search = document.querySelector(".Tutorials__videos__section--js");
if(search)
{
    search.addEventListener("click", (e) =>
    {
        let id = e.target.closest(".discription_video").dataset.itemid;
        location.href = `video_show.html?id=${id}`;
        console.log(id, typeof(id));
    });
}



// handle search and filter
let handleSearch = (tutorials) =>
{
    let filteredTutorials = [];
    [".tutorials__page--search", ".tutorials__page--filter"].forEach(current =>
    {
        document.querySelector(current).addEventListener("click", (e) =>
        {
            e.preventDefault();

            let input = document.querySelector(".tutorials__search--input-js").value;
            console.log(input);
            if(input !== "")
            {
                tutorials.forEach(current =>
                {
                    if(current.title.includes(input))
                    {
                        filteredTutorials.push(current);
                        tutorialsView.clearTutrialList();
                        filteredTutorials.forEach(cur =>
                        {
                            tutorialsView.renderTutorial(cur); 
                        });
                    }  
                })
            }

        })
    });
}