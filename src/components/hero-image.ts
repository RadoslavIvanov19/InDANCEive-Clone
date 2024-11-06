import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import desktopVol1 from "/vol-one/DesktopHeader.jpg";
import tabletVol1 from "/vol-one/TabletHeader.jpg";
import mobileVol1 from "/vol-one/MobileHeader.jpg";

import desktopVol2 from "/vol-two/DesktopHeader.jpg";
import tabletVol2 from "/vol-two/TabletHeader.jpg";
import mobileVol2 from "/vol-two/MobileHeader.jpg";

const mobileMaxWidth = 425;
const tabletMaxWidth = 769;

@customElement("hero-image")
export class HeroImage extends LitElement {
  static styles = css`
    header img {
      width: 100%;
      max-width: 100%;
      height: auto;
      margin-top: 60px;
    }
  `;

  @property({ type: String }) volume = "one";

  private getDefaultHeader() {
    const isVolumeOne = this.volume === "one";

    if (window.innerWidth < mobileMaxWidth) {
      return isVolumeOne ? mobileVol1 : mobileVol2;
    } else if (window.innerWidth < tabletMaxWidth) {
      return isVolumeOne ? tabletVol1 : tabletVol2;
    } else {
      return isVolumeOne ? desktopVol1 : desktopVol2;
    }
  }

  @property({ type: String }) currentHeader = this.getDefaultHeader();

  private updateHeaderImage() {
    const headerImage =
      this.shadowRoot?.querySelector<HTMLImageElement>("#header-image");
    if (headerImage) {
      headerImage.src = this.currentHeader;
    }
  }

  private checkScreenSize = () => {
    this.currentHeader = this.getDefaultHeader();
    this.updateHeaderImage();
  };

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("resize", this.checkScreenSize);
    this.updateHeaderImage();
  }

  disconnectedCallback() {
    window.removeEventListener("resize", this.checkScreenSize);
    super.disconnectedCallback();
  }

  updated(changedProperties: any) {
    if (changedProperties.has("volume")) {
      // Re-evaluate the header image when the volume changes
      this.currentHeader = this.getDefaultHeader();
      this.updateHeaderImage();
    }
  }

  render() {
    return html`
      <header>
        <img id="header-image" src="${this.currentHeader}" alt="Header Image" />
      </header>
    `;
  }
}
