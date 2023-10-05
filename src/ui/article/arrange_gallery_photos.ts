import { Props as PhotoProps } from "ui/photo/photo.astro";

const spanMap = {
  S: [4, 3],
  M: [4, 4],
  L: [6, 4],
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
    const [colSpan, rowSpan] = spanMap[photo.size];
    compiledPhoto.colSpan = colSpan;
    compiledPhoto.rowSpan = rowSpan;
    return compiledPhoto as PhotoProps;
  });
}
