import { arrangeGalleryPhotos } from "ui/article/arrange_gallery_photos";
import photo1 from "./photos/photo.jpg";
import port from "./photos/port.png";
import land from "./photos/land.png";

export default createFakeContent();

function createFakeContent() {
  const description =
    "Spring in Japan! This collection of images offers a glimpse into the country's captivating landscapes, vibrant cities, and cultural richness.";

  const photos = arrangeGalleryPhotos(
    Array.from({ length: 12 }, (_, i) => ({
      alt: "hello",
      imageMetadata: [photo1, port, land][i % 3],
      size: "SML"[Math.floor(Math.random() ** 2 * 3)] as any,
    }))
  );

  return {
    description,
    photos,
  };
}
