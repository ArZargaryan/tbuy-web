// jest.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./"
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/config/CSSStub.js",
    "^@/(.*)$": "<rootDir>/$1",
    "^@core/(.*)$": "<rootDir>/core/$1",
    "^@libs/(.*)$": "<rootDir>/libs/$1",
    "^@layouts/(.*)$": "<rootDir>/core/layouts/$1",
    "^@features/(.*)$": "<rootDir>/features/$1",
    "^@public/(.*)$": "<rootDir>/public/$1",
    "^@styles/(.*)$": "<rootDir>/styles/$1",
    "^@pages/(.*)$": "<rootDir>/pages/$1",
    "^@tests/(.*)$": "<rootDir>/__tests__/$1",
    "^@mocks/(.*)$": "<rootDir>/__mocks__/$1"
  },
  testEnvironment: "jest-environment-jsdom",
  transformIgnorePatterns: ["/node_modules/(?!(uuid|swiper|ssr-window|dom7))(.*)"]
};

async function jestConfig() {
  const nextJestConfig = await createJestConfig(customJestConfig)();
  // /node_modules/ is the first pattern
  nextJestConfig.transformIgnorePatterns[0] = "/node_modules/(?!(uuid|swiper|ssr-window|dom7))(.*)";
  return nextJestConfig;
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = jestConfig;
