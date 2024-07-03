module.exports = {
    moduleNameMapper: {
      '\\.(css|scss)$': 'identity-obj-proxy',
    },
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest', // Use babel-jest to transform JavaScript files
    },
    transformIgnorePatterns: [
      '/node_modules/(?!axios)', // Transform axios and other ES modules
    ],
  };
  