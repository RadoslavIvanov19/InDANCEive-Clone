import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import hamburger from "/vol-one/hamburger.svg";
import cross from "/vol-one/cross.svg";
import { isTabletOrSmaller } from '../hooks';

const navigationList = [
  { title: '- home', url: '#home' },
  { title: '- choreographers', url: '#choreographers' },
  { title: '- schedule', url: '#info' },
  { title: '- contacts', url: '#contacts' },
  { title: '- archive', url: '/archive' },
];

@customElement('lit-nav')
export class Navigation extends LitElement {
  @property({ type: String }) volume = '';

  static styles = css`
    .navigationWrapper {
      background: white;
      position: fixed;
      top: 0;
      width: 100%;
      box-shadow: 6px 8px 30px rgba(0, 0, 0, 0.2);
      z-index: 10;
    }

    .navigationWrapper.desktop .hamburger {
      display: none;
    }

    .navigationWrapper.desktop .navigation {
      display: block;
      padding: 20px;
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
      text-decoration: none;
      padding: 10px;
      transition: 0.1s;
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
    window.addEventListener('resize', this.updateMobileState);
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.updateMobileState);
    super.disconnectedCallback();
  }

  private updateMobileState = () => {
    this.isMobileState = isTabletOrSmaller();
  }

  private toggleNavVisibility() {
    this.isVisible = !this.isVisible;
  }

  private toggleNav() {
    this.toggleNavVisibility();
  }

  render() {
    const linkColor = this.volume === 'one' ? '#353394' : '#32d966';

    return html`
      <div class="navigationWrapper ${this.isMobileState ? 'mobile' : 'desktop'}">
        <button class="hamburger" @click=${this.toggleNav}>
          <img src=${!this.isVisible ? hamburger : cross}>
        </button>
        <nav class="navigation ${this.isVisible ? 'visible' : null}">
          ${navigationList.map(({ url, title }) => html`
            <a 
              href=${url} 
              @click=${this.toggleNav} 
              style="color: ${linkColor};"
            >
              ${title}
            </a>
          `)}
        </nav>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lit-nav': Navigation;
  }
}
