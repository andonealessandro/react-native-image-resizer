import React from 'react-native';

const ImageResizerAndroid = React.NativeModules.ImageResizerAndroid;

export default {
  createResizedImage: (imagePath, newWidth, newHeight, compressFormat, quality, rotation = 0, imageName, outputPath) => {
    return new Promise((resolve, reject) => {
      ImageResizerAndroid.createResizedImage(
        imagePath,
        newWidth,
        newHeight,
        compressFormat,
        quality,
        rotation,
        imageName,
        outputPath,
        resolve,
        reject
      );
    });
  },
};
