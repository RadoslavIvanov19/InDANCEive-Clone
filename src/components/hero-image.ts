import desktop from "/DesktopHeader.jpg"
import tablet from "/TabletHeader.jpg";
import mobile from "/MobileHeader.jpg";

import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

const mobileMaxWidth = 425;
const tabletMaxWidth = 769;

const getDefaultHeader = () => {
  if (window.innerWidth < mobileMaxWidth) {
    return mobile;
  } else if (window.innerWidth < tabletMaxWidth && window.innerWidth < mobileMaxWidth) {
    return tablet;
  }
  return desktop;
}

@customElement('hero-image')
export class MyElement extends LitElement {
  static styles = css`
    header img {
      width: 100%;
      max-width: 100%;
      height: auto;
      margin-top: 60px;
    }
  `
  @property({
    type: {
      currentHeader: HTMLElement,
    }
  })
  currentHeader = getDefaultHeader();

  private updateHeaderImage() {
    const headerImage = document.querySelector<HTMLImageElement>("#header-image");
    if (headerImage) {
      headerImage.src = this.currentHeader;
    }
  }

  private checkScreenSize = () => {
    if (window.innerWidth < mobileMaxWidth) {
      this.currentHeader = mobile;
    } else if (window.innerWidth < tabletMaxWidth && window.innerWidth < mobileMaxWidth) {
      this.currentHeader = tablet;
    } else {
      this.currentHeader = desktop;
    }
    this.updateHeaderImage();
  };

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this.checkScreenSize);
    this.updateHeaderImage();
  }
  disconnectedCallback() {
    window.removeEventListener('resize', this.checkScreenSize);
    super.disconnectedCallback();
  }

  render() {
    return html`
      <header>                 
        <img id="header-image" src="${this.currentHeader}" alt="Header Image" />
      </header>
    `;
  }
}
