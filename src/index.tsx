import { root } from "@lynx-js/react";
import { furnituresPictures } from "./Pictures/furnitures/furnituresPictures.jsx";
import { Gallery } from "./GalleryAuto.jsx";

function AddAutoScroll() {
  return <Gallery pictureData={furnituresPictures} />;
}

root.render(<AddAutoScroll />);