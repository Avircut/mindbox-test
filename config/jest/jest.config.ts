import path from 'path';
/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  globals: { __IS_DEV__: true, __API__: '', __PROJECT__: 'jest' },
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\',
  ],
  moduleDirectories: [
    'node_modules',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  modulePaths: [
    '<rootDir>src',
    '<rootDir>node_modules',
  ],
  rootDir: '../../',
  testMatch: [
    '<rootDir>src/**/*(*.)@(spec|test|).[tj]s?(x)',
  ],
  setupFilesAfterEnv: ['<rootDir>src/shared/config/jest/setupTests.ts'],
  moduleNameMapper: {
    '\\.(s?css|less)$': 'identity-obj-proxy',
    '\\.(svg|png|jpg)': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
  },
  reporters: [
    'default',
    ['jest-html-reporters', {
      publicPath: '<rootDir>/reports/unit/',
      filename: 'report.html',
      // openReport: true,
      inlineSource: true,
    }],
  ],
};
