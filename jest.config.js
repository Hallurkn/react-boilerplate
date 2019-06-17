module.exports = {
    setupFilesAfterEnv: ['<rootDir>/testSetup.js'],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': '<rootDir>/mocks/styleMock.js'
    }
}
