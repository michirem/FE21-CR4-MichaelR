// Overview:
// 1.0 General functions
// 2.0 Page Creation
// 3.0 Bonus exercise

// 1.0 General functions

// 1.1 function to build containers
const containerBuilder = (containerType, classes, array_index, id, output_target) => {
    let container = document.createElement(containerType); // create container type
    container.setAttribute("id", id + [array_index]); // set id of container
    container.className = classes; // set classes of container
    console.log("Container " + container + " of index " + array_index + " built successfully");
    document.getElementById(output_target).appendChild(container); // append to output target
};

// 1.2 function to build elements with text
const elementBuilder = (elementType, classes, content, id, array_index, output_target) => {
    let elementT = document.createElement(elementType); // create element type
    elementT.className = classes; // assign classes
    elementT.setAttribute("id", id + [array_index]); // set id of element
    let elementContent = document.createTextNode(content); // create text node
    elementT.appendChild(elementContent); // append text node
    console.log("Element " + elementType + " built successfully");
    document.getElementById(output_target).appendChild(elementT); // append to output target
    console.log("Element " + elementType + " " + id + [array_index] + " appended to " + output_target);
};

// 1.3 function to build img elements
const imgBuilder = (src, classes, output_target) => {
    let newImg = document.createElement("img"); // create img
    newImg.className = classes; // assign classes
    newImg.src = src; // set source
    newImg.alt = "image"; // alt = image
    console.log("Img built successfully");
    document.getElementById(output_target).appendChild(newImg); // append to output target
    console.log("Img " + newImg + " appended to " + output_target);
};

// 1.4 function to build button
const btnBuilder = (classes, content, id, array_index, output_target) => {
    let button = document.createElement("button"); // create element type
    button.className = classes; // assign classes
    button.setAttribute("id", id + [array_index]);
    let buttonContent = document.createTextNode(content); // create text node
    button.appendChild(buttonContent); // append text node
    console.log("Button built successfully");
    document.getElementById(output_target).appendChild(button); // append to output target
    console.log("Button " + button + " " + id + [array_index] + " appended to " + output_target);
};

// 1.5 like button function
const increaseLikes = elementId => {
    let counter = document.getElementById(elementId); // select starting point from HTML
    let numberOfLikes = parseInt(counter.innerHTML); // store starting point as integer in variable
    numberOfLikes++; // increment by 1 on activation (integer)
    counter.innerHTML = numberOfLikes; // assign new value to HTML element
    console.log("like button " + elementId + " activated")
};

// 1.6 sort button function
const sortFunction = (baseArray, classOfElementToSortBy, classOfElementToBeSorted) => {
    for (let i = 0; i < baseArray.length; i++) {
        let nrOfLikes = document.querySelectorAll(classOfElementToSortBy)[i].innerHTML; //fetch no. of likes
        document.getElementsByClassName(classOfElementToBeSorted)[i].style.order = -nrOfLikes; //set style: order acc. to no. of likes
    };
};

// 2.0 Page Creation

// 2.1 JSON parse data from data.json file
let moviesData = JSON.parse(movies);

// 2.2 show movies in console as table
console.table(moviesData);

// 2.3 function to build movie gallery from data
const movieGallery = array => {
    // Create Sort button container in header
    // Arguments: containerType, classes, array_index, id, output_target
    containerBuilder("div", "d-flex justify-content-center bg-dark p-3", "1", "sortBtnContainer", "headsection");

    // Create Sort button inside sort button container
    // Arguments: classes, content, id, array_index, output_target
    btnBuilder("button", "Sort", "sortBtn", "1", "sortBtnContainer1");

    // Add event listener to sort button
    // Arguments: baseArray, classOfElementToSortBy, classOfElementToBeSorted
    document.getElementById("sortBtn1").addEventListener("click", function(){
        sortFunction(moviesData, `.likes`, "movieDiv");
    });

    // fetch data from array
    for (let i = 0; i < array.length; i++){
        let mName = array[i].movie_name;
        let mGenre = array[i].movie_genre;
        let mImage = array[i].movie_img;
        let mDescription = array[i].movie_description;
        let mLikes = array[i].likes;
        const appendix = () => {
            // movie div
            // Arguments: containerType, classes, array_index, id, output_target
            containerBuilder("div", "movieDiv col row my-2 bg-dark", i, "movie", "output");
            
            // movie img inside movie div
            // Arguments: src, classes, output_target
            imgBuilder(`${mImage}`, "col-6", "movie" + i);

            // info div inside movie div
            // Arguments: containerType, classes, array_index, id, output_target
            containerBuilder("div", "col-6 d-flex flex-column px-0 py-2", i, "movieDetails", "movie" + i);

            // movie name in info div
            // Arguments: elementType, classes, content, id, array_index, output_target
            elementBuilder("h2", " ", mName, "movieName", i, "movieDetails" + i);

            // movie genre in info div
            // Arguments: elementType, classes, content, id, array_index, output_target
            elementBuilder("h4", " ", mGenre, "movieGenre", i, "movieDetails" + i);

            // movie description in info div
            // Arguments: elementType, classes, content, id, array_index, output_target
            elementBuilder("p", " ", mDescription, "movieDescription", i, "movieDetails" + i);
  
            // build container for likes inside info div
            // Arguments: containerType, classes, array_index, id, output_target
            containerBuilder("div", "likeSection d-flex flex-row justify-content-evenly p-2", i, "likeContainer", "movieDetails" + i)

            // movie like button in container for likes
            // Arguments: classes, content, id, array_index, output_target
            btnBuilder("button likeBtn mx-3", "Like", "likeButton", i,  "likeContainer" + i);

            // like icon in container for likes
            // Arguments: src, classes, output_target
            imgBuilder("../img/thumbup.png", "likeImg", "likeContainer" + i);

            //movie likes in container for likes
            // Arguments: elementType, classes, content, id, array_index, output_target
            elementBuilder("span", "likes mx-3", parseInt(mLikes), "likes", i, "likeContainer" + i);

            // add event listener to each like button
            document.getElementById("likeButton" + i).addEventListener("click", function(){
                increaseLikes("likes" + i);
            });
        };
        appendix();
    }
}
// 2.2 execute function to create movie gallery
movieGallery(moviesData); //call function to display page

