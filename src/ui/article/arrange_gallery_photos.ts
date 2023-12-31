import { Props as PhotoProps } from "ui/photo/photo.astro";

const colWidth = 210;
const rowHeight = 45;

const spanMap = {
  S: [
    [1, 2],
    [1, 3],
  ],
  M: [
    [1, 4],
  ],
  L: [
    [1, 5],
    [1, 6],
    [2, 3],
    [2, 4],
    [2, 5],
  ],
};

type PhotoConfig = {
  alt: string;
  imageMetadata: ImageMetadata;
  size: "S" | "M" | "L";
};

export function arrangeGalleryPhotos(photos: PhotoConfig[]): PhotoProps[] {
  return photos.map((photo) => {
    const compiledPhoto: Partial<PhotoProps> = {};
    compiledPhoto.alt = photo.alt;
    compiledPhoto.imageMetadata = photo.imageMetadata;

    const imageRatio = photo.imageMetadata.width / photo.imageMetadata.height;
    const spans = spanMap[photo.size];
    let bestSpan = spans[0];
    let bestScore = Infinity;
    for (const span of spans) {
      const sizeRatio = (span[0] * colWidth) / (span[1] * rowHeight);
      const score = Math.abs(Math.log(sizeRatio) - Math.log(imageRatio));
      if (bestScore > score) {
        bestSpan = span;
        bestScore = score;
      }
    }
    compiledPhoto.colSpan = bestSpan[0];
    compiledPhoto.rowSpan = bestSpan[1];

    return compiledPhoto as PhotoProps;
  });
}
