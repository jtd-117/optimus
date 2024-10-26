module.exports = {
    // Transpile all JS files to support modern JS features
    transform: {
        "^.+\\.js$": "babel-jest",
    },

    // Only recognise vanilla JS files
    moduleFileExtensions: ["js"],

    // Provide detailed output for each test
    verbose: true,

    // Tell Jest where to look for tests
    roots: ["<rootDir>/src/tests"],
};
