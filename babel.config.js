module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                targets: {
                    // Transform JS code to be compatible with ES environments
                    esmodules: true,
                },
            },
        ],
    ],
};
