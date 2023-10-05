import { arrangeGalleryPhotos } from "ui/article/gallery_helper";
import photo1 from "./photos/photo.jpg";

export default createFakeContent();

function createFakeContent() {
  const description =
    "Spring in Japan! This collection of images offers a glimpse into the country's captivating landscapes, vibrant cities, and cultural richness.";

  const photos = arrangeGalleryPhotos(
    Array.from({ length: 12 }, () => ({
      alt: "hello",
      imageMetadata: photo1,
      size: "SML"[Math.floor(Math.random() * 3)] as any,
    }))
  );

  return {
    description,
    photos,
  };
}
