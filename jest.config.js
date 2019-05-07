module.exports = {
  transform: {'^.+\\.ts?$': 'ts-jest'},
  testEnvironment: 'node',
  testRegex: '(/__tests__/.|(\\.|/)(spec))\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testResultsProcessor: 'jest-sonar-reporter',
  coveragePathIgnorePatterns: [
    '/.yarn-cache/',
    '/node_modules/',
  ],
  testPathIgnorePatterns: [
    '/.yarn-cache/',
    '/node_modules/',
  ],
};
