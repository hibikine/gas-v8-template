module.exports = {
  resolver: require.resolve('jest-pnp-resolver'),
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*)\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'wasm'],
  testEnvironment: 'node',
};
