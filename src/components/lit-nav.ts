import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import hamburger from "/hamburger.svg";
import cross from "/cross.svg";

const navigationList = [
  {
    title: 'начало',
    url: '#home',
  },
  {
    title: 'хореографи',
    url: '#choreographers',
  },
  {
    title: 'график',
    url: '#info',
  },
  {
    title: 'контакти',
    url: '#contacts',
  },
];

const isMobile = () => {
  if (window.innerWidth > 769) {
    console.log('wa');
    
    return false;
  }
  return true;
}

@customElement('lit-nav')
export class Navigation extends LitElement {
  static styles = css`
    /* ::slotted(*) { font-family: 'Orbitron'; } */

    .navigationWrapper {
      background: white;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 10;
    }

    .navigationWrapper.desktop {
      .hamburger {
        display: none;
      }

      .navigation {
        display: block;
        padding: 20px;
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
      font-family: 'Orbitron', sans-serif;
      font-size: 25px;
      color: #353394;
      text-decoration: none;
      padding: 10px;
    }

    .navigation.visible {
      display: flex;
    }

    button {
      background: none;
      border: none;
    }

    /* @media (min-width: 768px) {

    } */
  `;

  @state() isVisible: boolean = false;
  @state() isMobileState: boolean = isMobile();

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', () => {
      this.isMobileState = isMobile();
    });
  };

  disconnectedCallback() {
    window.removeEventListener('resize', () => {
      this.isMobileState = isMobile();
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
