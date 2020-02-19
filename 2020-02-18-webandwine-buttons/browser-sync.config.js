// Disabling ESM specific rules
/* eslint-disable strict, import/unambiguous */
"use strict";

module.exports = {
    watch: true,
    server: {
        baseDir: ".",
        index: "index.html",
    },
    startPath: "index.html",
    files: ["./example", "./exercise", "./slide", "./solution"],
    ignore: ["**/node_modules"],
    reloadDelay: 3000,
};
