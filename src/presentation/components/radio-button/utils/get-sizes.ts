import { PixelRatio } from 'react-native';

export const getSizes = (borderSize: number, size: number) => {
  const borderWidth = PixelRatio.roundToNearestPixel(borderSize);
  const sizeHalf = PixelRatio.roundToNearestPixel(size * 0.5);
  const sizeFull = PixelRatio.roundToNearestPixel(size);

  return {
    sizeHalf,
    sizeFull,
    borderWidth
  };
};
