// 
var theData;

// 
fetch("./data/sites.json")
  .then((response) => response.json())
  .then((data) => prepareHTML(data));

// Prepare HTML based on data

function clickItem(val) {
  toggleModal();
  populizeModal(val);
}

function prepareHTML(data) {
  // random sorting data if needed
 //data.sort(() => Math.random() - 0.5);

  // Storing a Copy of the Data Array in a Global Data Object
  theData = [...data];

  // Loop through data
  for (let i = 0; i < data.length; i++) {
    let dataItem = data[i];

    let item = document.createElement("a");

    item.addEventListener("click", function (e) {
      clickItem(i);
    });

    // item.setAttribute("href", dataItem.url);
    // item.setAttribute("target", "_blank");

    let img = document.createElement("img");
    if (dataItem.thumb != false) {
      img.src = `./img/${dataItem.thumb}`;
    } else {
      img.src = "./img/nothumb.jpg";
    }

    item.appendChild(img);

    let title = document.createElement("h3");
    title.innerHTML = dataItem.title;

    item.appendChild(title);

    let parent = document.getElementById("theGrid");
    parent.appendChild(item);
  }

  // n

  let artistsArray = [];

  for (let i = 0; i < data.length; i++) {
    let dataItem = data[i];
    artistsArray.push(dataItem.artist);
  }

  let uniqueArtistsArray = [...new Set(artistsArray)];

  let artistsSection = document.getElementById("artists");

  // for (let i = 0; i < uniqueArtistsArray.length; i++) {
  //   let artist = document.createElement("a");
  //   artist.innerHTML = uniqueArtistsArray[i];
  //   artist.classList.add("pill");

  //   artistsSection.appendChild(artist);

  //   console.log(uniqueArtistsArray[i]);
  // }
}
