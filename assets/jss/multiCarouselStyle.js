import { container } from "assets/jss/nextjs-material-kit.js";
import imagesStyle from "assets/jss/nextjs-material-kit/imagesStyles.js";

const multiCarouselStyle = {
  section: {
    padding: "70px 0",
  },
  container,
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important",
  },
  ...imagesStyle,
};

export default multiCarouselStyle;
