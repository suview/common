module.exports = {
    collectCoverage: false,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    collectCoverageFrom: ['src/**/*.ts'],
    coveragePathIgnorePatterns: [
        'index.ts',
        'src\/[^/]+\/type'
    ],
    coverageReporters: ['text'],
    coverageThreshold: {
        global: {
            branches: 97,
            functions: 97,
            lines: 97,
            statements: 97
        }
    },
    moduleDirectories: [
        'node_modules',
        'src'
    ],
    moduleFileExtensions: [
        'js',
        'ts'
    ]
};
