// Project : sticky notes application

// --- title
let pageTitle = document.createElement("h1");
pageTitle.textContent = "MY Repos";
document.body.appendChild(pageTitle);
pageTitle.style.cssText =
  "text-align:center;font-size:35px;font-Family:monospace;margin-bottom:70px";
// --------

// Start Code

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/bilal-friend/repos");
myRequest.send();
myRequest.onreadystatechange = function () {
  console.log(myRequest.readyState);
  console.log(myRequest.status);
  // check that we are the right condition
  if (this.readyState === 4 && this.status === 200) {
    // console.log(this.responseText);
    let jsData = JSON.parse(this.response);
    console.log(jsData);
    // create the container
    let container = document.createElement("div");
    // add id to the container
    container.id = "container";
    // loop on all repos
    for (let i = 0; i < jsData.length; i++) {
      // just for testing in the console
      console.log(jsData[i].url);
      // Create Box
      let box = document.createElement("div");
      // add className
      box.className = "box";
      // -- Create Box's Title
      let title = document.createElement("h1");
      let titleText = document.createTextNode(jsData[i].name);
      // -- create link
      let link = document.createElement("a");
      // adding Url to the link
      link.href = jsData[i].html_url;
      // open in new window
      link.target = "_blank";
      // add text for link
      link.textContent = "==> Go Repos";
      // append the text to the title
      title.appendChild(titleText);
      // append the title to the box
      box.appendChild(title);
      // append link to the box
      box.append(link);
      container.appendChild(box);
      // style the link
      link.style.cssText =
        "color:black;text-decoration:none;font-Fimily:sans-serif;font-size:19px";
      // Style the box
      box.style.cssText =
        "border: 1px solid dodgerBlue;width:400px;padding:10px;text-align:center;height: 150px;color:dodgerBlue;font-Family:cursive;border-radius:10px";
    }

    document.body.appendChild(container);
    // Style Container
    document.getElementById("container").style.cssText =
      "display:flex;justify-content: center;align-items: center;flex-wrap: wrap;gap:40px 20px;";
    // adding margin to the body
    document.body.style.margin = "40px";
  }
};
console.log(myRequest);
