// scaleUtil.js
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

// Wrapper functions for readability
const scaleWidth = (size, factor = 0.5) =>
  moderateScale(size, factor);

const scaleHeight = (size, factor = 0.5) =>
  moderateVerticalScale(size, factor);

// Export everything
export {
  scale,                 // Direct width scaling
  verticalScale,         // Direct height scaling
  moderateScale,         // Moderate width scaling (recommended)
  moderateVerticalScale, // Moderate height scaling
  scaleWidth,            // Wrapper for moderateScale
  scaleHeight,           // Wrapper for moderateVerticalScale
};
