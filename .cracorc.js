const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@atoms': path.resolve(__dirname, 'src/components/atoms/'),
      '@molecules': path.resolve(__dirname, 'src/components/molecules/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@router': path.resolve(__dirname, 'src/router/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@features': path.resolve(__dirname, 'src/store/features/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@themes': path.resolve(__dirname, 'src/themes/'),
    },
  },
};
