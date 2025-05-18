window.onload = function () {
    document.body.style.backgroundColor = "#2f2f2f"; 

    const header = document.querySelector(".header");
    if (header) {
        header.style.backgroundColor = "#ff9900"; 
        header.style.color = "#000000"; 
        header.style.padding = "20px";
        header.style.borderRadius = "8px";
    }

    const articles = document.querySelectorAll(".anime-article");
    articles.forEach(article => {
        article.style.backgroundColor = "#000000";
        article.style.color = "#cccccc";
        article.style.padding = "15px";
        article.style.borderRadius = "5px";
        article.style.marginBottom = "15px";
    });
};
