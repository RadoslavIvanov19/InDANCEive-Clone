import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

const choreographersList = [
  {
    personName: "BILYANA TSOLOVA",
    url: "https://www.instagram.com/bibliq/",
    urlTitle: "@bibliq",
    img: "BILYANA-TSOLOVA.jpg",
  },
  {
    personName: "VANYA SANTEVA",
    url: "https://www.instagram.com/nyanishh",
    urlTitle: "@nyanishh",
    img: "VANYA-SANTEVA.jpg",
  },
  {
    personName: "MARIA-YOANNA TOTLYAKOVA",
    url: "https://www.instagram.com/_totlyakova",
    urlTitle: "@_totlyakova",
    img: "MARIA-YOANNA-TOTLYAKOVA.jpg",
  },
  {
    personName: "MARIANA STETSENKO",
    url: "https://www.instagram.com/maaaariannaaaa",
    urlTitle: "@maaaariannaaaa",
    img: "MARIANA-STETSENKO.jpg",
  },
  {
    personName: "ALEKSANDRA SIMEONOVA",
    url: "https://www.instagram.com/julto.drakonche",
    urlTitle: "@julto.drakonche",
    img: "ALEKSANDRA-SIMEONOVA.jpg",
  },
  {
    personName: "SVETLIN VALKOV",
    url: "https://www.instagram.com/svxt_txc",
    urlTitle: "@svxt_txc",
    img: "SVETLIN-VALKOV.jpg",
  },
];

@customElement("choreographers-list")
export class ChoreographersList extends LitElement {
  static styles = css`
    .flexWrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .choreographer {
      max-height: 100%;
      margin: 25px;
      border-radius: 5px;
      background-color: white;
      box-shadow: 6px 8px 30px rgba(0, 0, 0, 0.25);
      max-width: 240px;
    }

    .choreographer-image {
      height: 240px;
      width: 240px;
      border-radius: 5px 5px 0 0;
    }

    .choreographer-info {
      padding: 10px 15px 20px 15px;
      min-height: 126px;
      color: #353394;
      text-align: center;
      font-family: "Orbitron", sans-serif;
      display: flex;
      flex-direction: row;
      align-items: center;

      h2 {
        margin-bottom: 10px;
      }

      span {
        font-family: "ChakraPetch", sans-serif;
        font-size: 20px;
      }

      a {
        margin: 0 auto;
      }
    }

    .choreographer-info > a {
      text-decoration: none;
      color: #353394;
    }

    .choreographer-info > a:hover {
      text-decoration: underline;
      color: #353394;
    }

    .choreographer-info > a:link:visited {
      color: #353394;
    }

    .choreographer-info h2 {
      margin-top: 10px;
      font-size: 20px;
      text-transform: none;
    }

    @media (min-width: 768px) {
      .flexWrapper {
        max-width: 1024px;
        flex-flow: row wrap;
        justify-content: center;
        padding: 30px;
        margin: 0 auto;
      }
    }
  `;

  render() {
    return html`
      <div class="flexWrapper">
        ${choreographersList.map(
          ({ personName, url, urlTitle, img }) => html`
            <div class="choreographer">
              <div
                class="choreographer-image"
                style="background: url(${img}) center no-repeat; background-size: contain;"
              ></div>
              <div class="choreographer-info">
                <a href=${url}>
                  <h2>${personName}</h2>
                  <span>${urlTitle}</span>
                </a>
              </div>
            </div>
          `
        )}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "choreographers-list": ChoreographersList;
  }
}
