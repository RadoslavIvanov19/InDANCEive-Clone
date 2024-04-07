import desktop from "../public/DesktopHeader.jpg";
import tablet from "../public/TabletHeader.jpg";
import mobile from "../public/MobileHeader.jpg";

let currentHeader = mobile; // Initialize with mobile image by default
const mobileMaxWidth = 376; // Maximum width for mobile devices
const tabletMaxWidth = 769; // Maximum width for tablet devices

const isMobile = () => {
  return window.innerWidth < mobileMaxWidth;
};

const isTablet = () => {
  return window.innerWidth < tabletMaxWidth && !isMobile();
};

const checkScreenSize = () => {
  if (isMobile()) {
    currentHeader = mobile;
  } else if (isTablet()) {
    currentHeader = tablet;
  } else {
    currentHeader = desktop;
  }
  updateHeaderImage();
};

const updateHeaderImage = () => {
  const headerImage = document.querySelector<HTMLImageElement>("#header-image");
  if (headerImage) {
    headerImage.src = currentHeader;
  }
};

checkScreenSize();

window.addEventListener("resize", checkScreenSize);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <header>
    <img id="header-image" src="${currentHeader}" alt="Header Image" />
  </header>
`;
