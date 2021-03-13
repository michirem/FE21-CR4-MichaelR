let moviesData = JSON.parse(movies);

console.table(moviesData);

// function to build containers
const containerBuilder = (containerType, classes, array_index, id, output_target) => {
    let container = document.createElement(containerType);
    container.setAttribute("id", id + [array_index]);
    container.className = classes;
    console.log(container);
    console.log("Container " + container + " of index " + array_index + " built successfully");
    document.getElementById(output_target).appendChild(container);
};

// function to build elements with text
const elementBuilder = (elementType, classes, content, output_target) => {
    let elementT = document.createElement(elementType); // create element type
    elementT.className = classes; // assign classes
    let elementContent = document.createTextNode(content); // create text node
    elementT.appendChild(elementContent); // append text node
    console.log("Element " + elementType + " built successfully");
    document.getElementById(output_target).appendChild(elementT);
};

// function to build img elements
const imgBuilder = (src, classes, output_target) => {
    let newImg = document.createElement("img");
    newImg.className = classes;
    newImg.src = src;
    console.log(newImg);
    console.log("Img built successfully");
    document.getElementById(output_target).appendChild(newImg);
};

// function to build movie gallery
const movieGallery = array => {
    for (let i = 0; i < array.length; i++){
        let mName = array[i].movie_name;
        let mGenre = array[i].movie_genre;
        let mImage = array[i].movie_img;
        let mDescription = array[i].movie_description;
        let mLikes = array[i].likes;
        const appendix = () => {
            // new movie div
            containerBuilder("div", "col row my-2", i, "movie", "output");
            
            // new movie img
            imgBuilder(`${mImage}`, "col-6", "movie" + i);

            // new info div
            containerBuilder("div", "col-6 d-flex flex-column px-0", i, "movieDetails", "movie" + i);

            // movie name in info div
            elementBuilder("h2", "text-wrap", mName, "movieDetails" + i);

            // movie genre in info div
            elementBuilder("h4", " ", mGenre, "movieDetails" + i);

            // movie description in info div
            elementBuilder("p", " ", mDescription, "movieDetails" + i);
  
            // build container for likes
            containerBuilder("div", "likeSection d-flex flex-row justify-content-evenly", i, "likeContainer", "movieDetails" + i)

            // movie like button in container for likes
            elementBuilder("button", "button likeBtn mx-3", "Like", "likeContainer" + i);

            //movie likes in container for likes
            elementBuilder("span", "likes mx-3", mLikes, "likeContainer" + i)
        };
        appendix();
    }
}

movieGallery(moviesData); //call function

