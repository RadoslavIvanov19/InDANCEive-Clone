import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import hamburger from "/hamburger.svg";
import cross from "/cross.svg";
import { isTabletOrSmaller } from '../hooks';

const navigationList = [
  {
    title: '- home',
    url: '#home',
  },
  {
    title: '- choreographers',
    url: '#choreographers',
  },
  {
    title: '- schedule',
    url: '#info',
  },
  {
    title: '- contacts',
    url: '#contacts',
  },
];

@customElement('lit-nav')
export class Navigation extends LitElement {
  static styles = css`
    .navigationWrapper {
      background: white;
      position: fixed;
      top: 0;
      width: 100%;
      box-shadow: 6px 8px 30px rgba(0, 0, 0, 0.2);
      z-index: 10;
    }

    .navigationWrapper.desktop {
      .hamburger {
        display: none;
      }

      .navigation {
        display: block;
        padding: 20px;

        @media (min-width: 768px) {
          padding-left: 40px
        }
      }
    }

    .navigation {
      display: none;
      padding: 10px;
      flex-direction: column;
    }

    .hamburger {
      display: block;
      margin-left: auto;
      padding: 10px 20px 5px 10px;
    }

    a {
      font-family: "ChakraPetch", sans-serif;
      font-size: 25px;
      font-weight: bold;
      color: #353394;
      text-decoration: none;
      padding: 10px;
      transition: 0.1s;

      &:hover {
        color: #DD5FA4;
      }
    }

    .navigation.visible {
      display: flex;
    }

    button {
      background: none;
      border: none;
    }

    @media (min-width: 768px) {
      a {
        margin-left: 15px;
      }
    }
  `;

  @state() isVisible: boolean = false;
  @state() isMobileState: boolean = isTabletOrSmaller();

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', () => {
      this.isMobileState = isTabletOrSmaller();
    });
  };

  disconnectedCallback() {
    window.removeEventListener('resize', () => {
      this.isMobileState = isTabletOrSmaller();
    });
    super.disconnectedCallback();
  };

  private toggleNavVisibility() {
    this.isVisible = !this.isVisible
  };

  private toggleNav() {
    this.toggleNavVisibility();
  };

  render() {
    return html`
    <div class="navigationWrapper ${this.isMobileState ? 'mobile' : 'desktop'}">
      <button class="hamburger" @click=${this.toggleNav}>
        <img src=${ !this.isVisible ? hamburger : cross}>
      </button>
      <nav class="navigation ${this.isVisible ? 'visible' : null}">
        ${navigationList.map(({ url, title }) => html`<a href=${url} @click=${this.toggleNav}>${title}</a>`)}
      </nav>
    </div>
    `
  };
};

declare global {
  interface HTMLElementTagNameMap {
    'lit-nav': Navigation
  }
};
