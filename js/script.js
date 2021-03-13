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
const elementBuilder = (elementType, classes, content, id, array_index, output_target) => {
    let elementT = document.createElement(elementType); // create element type
    elementT.className = classes; // assign classes
    elementT.setAttribute("id", id + [array_index]);
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
    newImg.alt = "image";
    console.log(newImg);
    console.log("Img built successfully");
    document.getElementById(output_target).appendChild(newImg);
};

// function to build button
const btnBuilder = (classes, content, id, array_index, output_target) => {
    let button = document.createElement("button"); // create element type
    button.className = classes; // assign classes
    button.setAttribute("id", id + [array_index]);
    let buttonContent = document.createTextNode(content); // create text node
    button.appendChild(buttonContent); // append text node
    console.log("Button built successfully");
    document.getElementById(output_target).appendChild(button);
};

// like button function
const increaseLikes = elementId => {
    let counter = document.getElementById(elementId);
    let numberOfLikes = parseInt(counter.innerHTML);
    numberOfLikes++;
    console.log(numberOfLikes);
    counter.innerHTML = numberOfLikes;
    console.log(elementId + " activated")
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
            // Arguments: containerType, classes, array_index, id, output_target
            containerBuilder("div", "col row my-2 bg-dark", i, "movie", "output");
            
            // new movie img
            // Arguments: src, classes, output_target
            imgBuilder(`${mImage}`, "col-6", "movie" + i);

            // new info div
            // Arguments: containerType, classes, array_index, id, output_target
            containerBuilder("div", "col-6 d-flex flex-column px-0", i, "movieDetails", "movie" + i);

            // movie name in info div
            // Arguments: elementType, classes, content, id, array_index, output_target
            elementBuilder("h2", " ", mName, "movieName", i, "movieDetails" + i);

            // movie genre in info div
            // Arguments: elementType, classes, content, id, array_index, output_target
            elementBuilder("h4", " ", mGenre, "movieGenre", i, "movieDetails" + i);

            // movie description in info div
            // Arguments: elementType, classes, content, id, array_index, output_target
            elementBuilder("p", " ", mDescription, "movieDescription", i, "movieDetails" + i);
  
            // build container for likes
            // Arguments: containerType, classes, array_index, id, output_target
            containerBuilder("div", "likeSection d-flex flex-row justify-content-evenly", i, "likeContainer", "movieDetails" + i)

            // movie like button in container for likes
            btnBuilder("button likeBtn mx-3", "Like", "likeButton", i,  "likeContainer" + i);

            // like icon in container for likes
            // Arguments: src, classes, output_target
            imgBuilder("../img/thumbup.png", "likeImg", "likeContainer" + i);

            //movie likes in container for likes
            // Arguments: elementType, classes, content, id, array_index, output_target
            elementBuilder("span", "likes mx-3", parseInt(mLikes), "likes", i, "likeContainer" + i);

            // add event listener to each button
            document.getElementById("likeButton" + i).addEventListener("click", function(){
                increaseLikes("likes" + i);
            });
        };
        appendix();
    }
}

movieGallery(moviesData); //call function


// document.querySelectorAll(".likeBtn").addEventListener("click",(function(){

// })();