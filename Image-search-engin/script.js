const searchForm = document.getElementById("search-form");
const searchBox = document.getElemenntById("search-box");
const searchResult = document.getElementnById = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword ="";
let page =1;

async function searchImage(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&clint_id=${accesskey}&per_page=12`;

    const response =awit fetch(url);
    const data = awit response.json();

    const result = data.results;

    if(page === 1){
        searchResult.innerHtml = "";
    }
   

    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href =result.links.html;
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display = block;
}

searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages()
})

showMoreBtn.addEventListener("click", () =>{
    page++;
    searchImages();
})