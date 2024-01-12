class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card-left");

        const author = document.createElement("span");
        author.textContent = "By " + (this.getAttribute("author") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content")

        cardLeft.appendChild(author);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card-right");

        const newsImg = document.createElement("img");
        newsImg.src = (this.getAttribute("photo") || "./assets/img/default-img.jpg");
        newsImg.alt = "Foto da notícia"

        cardRight.appendChild(newsImg);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
            .card {
                width: 80%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                box-shadow: 8px 8px 24px -3px rgba(0,0,0,0.64);
                -webkit-box-shadow: 8px 8px 24px -3px rgba(0,0,0,0.64);
                -moz-box-shadow: 8px 8px 24px -3px rgba(0,0,0,0.64);
            }
    
            .card-left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
    
            .card-left > span {
                font-weight: 400;
            }
    
            .card-left > a {
                margin-top: 15px;
                font-size: 25pt;
                text-decoration: none;
                font-weight: bold;
            }
    
            .card-left > p {
                color: rgb(102, 102, 102);
            }
        `

        return style;
    }
}

customElements.define("card-news", CardNews)