// app instance
let app = document.getElementById("app");

// Declaring app posts
let allPosts;
let user;

//
async function getPosts() {
  let posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
  allPosts = posts.data.splice(0, 10);
  displayPosts();
}
//
async function getUser() {
  let { data } = await axios.get("https://randomuser.me/api/?results=10");
  user = data.results;
  // return user;
  console.log(user);
}

getUser();

function displayPosts() {
  allPosts.forEach((post, index) => {
    //
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("mainDiv", "my-5", "shadow", "rounded-lg", "mx-auto");
    let mainRow = document.createElement("div");
    mainRow.classList.add("row", "mb-0", "p-3");

    // Creating col element
    let colElement = document.createElement("div");

    // Craeting flexed div
    let flexedDiv = document.createElement("div");

    // Craeting flexed div image
    let flexedDivImg = document.createElement("img");

    // Craeting flexed div span
    let flexedDivSpan = document.createElement("span");
    flexedDivSpan.textContent = user[index].name.first;

    // Craeting flexed div icon
    let flexedDivIcon = document.createElement("i");
    flexedDivIcon.classList.add("fa", "fa-star");

    // Creating elipsis div
    let elipsesDiv = document.createElement("div");
    elipsesDiv.classList.add("col-md-5", "text-end", "offset-md-2");

    // Creating elipsis icon
    let elipsesDivIcon = document.createElement("i");
    elipsesDivIcon.classList.add("fa", "fa-ellipsis-h");

    elipsesDiv.appendChild(elipsesDivIcon);

    // Adding image source and styles to flexedDivImg
    flexedDivImg.setAttribute("src", user[index].picture.large);
    flexedDivImg.classList.add("flexedDivImage");

    // createing post text
    let postTextDiv = document.createElement("div");
    postTextDiv.classList.add("mb-3", "p-3");
    let postText = document.createElement("p");
    let postTextTwo = document.createElement("p");
    postText.textContent = user[index].email;
    postTextTwo.textContent = user[index].gender.toUpperCase();
    postTextDiv.appendChild(postText);
    postTextDiv.appendChild(postTextTwo);

    // Creating postImageContainer
    let postImageContainer = document.createElement("div");
    // Creating Post Image
    let postImage = document.createElement("img");
    postImage.setAttribute("src", user[index].picture.large);
    postImage.classList.add("w-100");

    // creating postTextContainer
    let postTextContainer = document.createElement("div");
    postTextContainer.classList.add("bg-light", "p-3");

    // Creating postTextContent
    let postTextContentOne = document.createElement("p");
    postTextContentOne.classList.add("small", "mb-0");

    postTextContentOne.textContent = "ARSENAL.COM";
    let postTextContentTwo = document.createElement("p");
    postTextContentTwo.classList.add("mb-0");
    postTextContentTwo.textContent = post.title;

    postTextContainer.appendChild(postTextContentOne);
    postTextContainer.appendChild(postTextContentTwo);
    // Adding classes to colElement
    colElement.classList.add("col-md-5", "align-items-center");

    // Adding classes to flexedDiv
    flexedDiv.classList.add("d-flex", "align-items-center");
    flexedDiv.style.gap = "1rem";

    // Creating Reactions

    let reactionsContainer = document.createElement("div");
    reactionsContainer.classList.add(
      "d-flex",
      "p-3",
      "g-1",
      "justify-content-around",
      "border-top"
    );
    let x = 1;
    let increament = 0;
    while (x <= 3) {
      let iconsArray = ["fa-thumbs-up", "fa-comment", "fa-share"];
      let div = document.createElement("div");
      let iconTag = document.createElement("i");
      iconTag.classList.add("fa", iconsArray[x - 1]);
      iconTag.onclick = function (e) {
        if (e.target.classList.contains("fa-thumbs-up")) {
          e.target.classList.toggle("text-primary");
        }
        if (e.target.classList.contains("fa-comment")) {
          e.target.classList.toggle("text-danger");
        }
        if (e.target.classList.contains("fa-share")) {
          e.target.classList.toggle("text-success");
        }
      };
      console.log(iconsArray[0]);
      // iconTag.textContent = "Hi";
      div.appendChild(iconTag);
      console.log(div);
      reactionsContainer.appendChild(div);
      increament++;
      x++;
    }

    // Adding Children to element
    // appending to postImageContainer
    postImageContainer.appendChild(postImage);
    postImageContainer.appendChild(postTextContainer);
    postImageContainer.appendChild(reactionsContainer);

    // Adding flexeddiovImg to flexedDiv
    flexedDiv.appendChild(flexedDivImg);
    flexedDiv.appendChild(flexedDivSpan);
    flexedDiv.appendChild(flexedDivIcon);
    // Adding children of colElement
    colElement.appendChild(flexedDiv);
    mainRow.appendChild(colElement);
    mainRow.appendChild(elipsesDiv);

    mainDiv.appendChild(mainRow);
    mainDiv.appendChild(postTextDiv);
    mainDiv.appendChild(postImageContainer);
    // mainDiv.appendChild(colElement);
    // appending colElement to app instance
    app.appendChild(mainDiv);
  });
}

setInterval(() => {
  getPosts();
}, 5000);
