module.exports = {
  overrides: [
    {
      files: [
        "*.html",
        "*.css",
        "*.scss",
        "*.js",
        "*.ts",
        "*.jsx",
        "*.tsx",
      ],
      options: {
        tabWidth: 2,
      },
    },
    {
      files: [
        "*js",
        "*ts",
        "*.jsx",
        "*.tsx",
      ],
      options: {
        printWidth: 160,
      },
    },
  ],
};
