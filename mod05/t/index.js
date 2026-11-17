'use strict';

const form = document.querySelector("#search-form");
const resultsContainer = document.querySelector("#results");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

    const query = document.querySelector('#query').value;

try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);

    const data = await response.json();
    console.log(data); //tehtävä 2 tulostaa konsoliin hakutuloksen
    
    resultsContainer.innerHTML = "";

    for (const item of data) {
        const show = item.show;
        const article = document.createElement("article"); // article elementti.
        
        const h2 = document.createElement("h2");
        h2.textContent = show.name; // nimi h2 elemttiin

        const link = document.createElement("a");
        link.href = show.url;
        link.target = "_blank";
        link.textContent = "More information";

        const img = document.createElement("img");
        img.src = show.image ? show.image.medium : "https://placehold.co/210x295?text=Not%20Found";
        img.alt = show.name;
    
        const summaryDiv = document.createElement("div");
        summaryDiv.innerHTML = show.summary;

        article.appendChild(h2);
        article.appendChild(link);
        article.appendChild(img);
        article.appendChild(summaryDiv);
    
        resultsContainer.appendChild(article)
    }
} catch (error) {
    console.error("error in search:", error)
  }
});