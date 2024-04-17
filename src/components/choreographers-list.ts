import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

const choreographersList = [
  {
    personName: "Michael Scott Michels Genson",
    url: "https://www.facebook.com/Street.Dance.School.The.Center/?locale=bg_BG",
    urlTitle: "@theTitleName",
    img: "questionMark.svg",
  },
  {
    personName: "Obamasim Teodoris",
    url: "#",
    urlTitle: "@theTitleName",
    img: "questionMark.svg",
  },
  {
    personName: "Zing the Zang",
    url: "#",
    urlTitle: "@theTitleName",
    img: "questionMark.svg",
  },
  {
    personName: ".....",
    url: "#",
    urlTitle: "",
    img: "questionMark.svg",
  },
  {
    personName: ".....",
    url: "#",
    urlTitle: "",
    img: "questionMark.svg",
  },
  {
    personName: ".....",
    url: "#",
    urlTitle: "",
    img: "questionMark.svg",
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
                style="background: url(${img}) center no-repeat;"
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
