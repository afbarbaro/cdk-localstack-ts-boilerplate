module.exports = {
	// roots: ['<rootDir>/tests'],
	// testMatch: ['**/*.test.ts'],
	// transform: {
	// 	'^.+\\.tsx?$': 'ts-jest'
	// }
	// };
	preset: 'ts-jest',
	testEnvironment: 'node',
	reporters: ["default", "jest-junit"],
	testTimeout: 10000,
	roots: ["<rootDir>/tests"],
	setupFiles: ["dotenv/config"],
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.tests.json'
		}
	}
};