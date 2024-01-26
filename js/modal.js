function toggleModal() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.toggle("modalActive");
}

function collapseModal() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("modalActive");
}

var theBody = document.getElementsByTagName("body")[0];
theBody.onscroll = function () {
    collapseModal();
};

document.onkeydown = function (e) {
    if (e.key === "Escape") {
        collapseModal();
    }
};

var silk = document.getElementById("silk");

silk.addEventListener("click", function (e) {
    toggleModal();
});

// Modal Markup

function populizeModal(index) {
    let dataItem = theData[index];

    let browserMockup = document.createElement("div");
    browserMockup.classList.add("browser-mockup");

    // image
    let img = document.createElement("img");

    // link
    let imgLink = document.createElement("a");
    imgLink.setAttribute("href", dataItem.url);
    imgLink.setAttribute("target", "_blank");

    if (dataItem.thumb != false) {
        img.src = `./img/${dataItem.thumb}`;
    } else {
        img.src = "./img/nothumb.jpg";
    }

    imgLink.appendChild(img);

    browserMockup.appendChild(imgLink);

    let modalHeader = document.getElementById("modalHeader");
    modalHeader.innerHTML = "";
    modalHeader.appendChild(browserMockup);

    let modalContent = document.getElementById("modalContent");
    modalContent.innerHTML = "";

    let title = document.createElement("h2");
    title.classList.add("lead");
    title.innerHTML = dataItem.title;
    modalContent.appendChild(title);

    if (dataItem.artist != false) {
        if (dataItem.artistWebsite != false) {
            let by = `<p class="meta">Tools: <a href="${dataItem.artistWebsite}" target="_blank">${dataItem.artist}</a></p>`;
            modalContent.insertAdjacentHTML("beforeend", by);
        } else {
            let by = `<p class="meta">Tools: ${dataItem.artist}</p>`;
            modalContent.insertAdjacentHTML("beforeend", by);
        }
    }

    if (dataItem.description != false) {
        let desc = document.createElement("p");
        desc.append(dataItem.description);
        modalContent.appendChild(desc);
    }

    let button = document.createElement("a");
    button.setAttribute("href", dataItem.url);
    button.setAttribute("target", "_blank");
    button.classList.add("btn");
    button.classList.add("m-top-15");
    button.innerHTML = "Launch";
    modalContent.appendChild(button);
}

var infoMarkup = `
       
    <p> TECH / TOOLS: 
    <li>Blazor</li>
    <li>.NET, ASP.NET</li>
    <li>C#</li>
    <li>SQL</li>
    <li>Python</li>
    <li>JavaScript</li>
    <li>HTML/CSS</li>
    <li>Computer Vision</li>
    <li>GenAI </li>

    

    </p>
    
    <p>Professional experiences are in my <a href="https://drive.google.com/file/d/1wt4w174VuBtT3uYG2S95z3tdyZpVJSkY/view?usp=drive_link" target="_blank">Resume</a></p>

    <p>Let's keep coding!</p>
  `;

var learnMoreBtn = document.getElementById("learnMore");
learnMoreBtn.addEventListener("click", function (e) {
    learnMore();
});

function learnMore() {
    let modalHeader = document.getElementById("modalHeader");
    modalHeader.innerHTML = "";

    let modalContent = document.getElementById("modalContent");
    modalContent.innerHTML = infoMarkup;

    toggleModal();
}
