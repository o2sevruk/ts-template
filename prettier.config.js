module.exports = {
  overrides: [
    {
      files: ['*.html', '*.css', '*.scss', '*.js', '*.ts'],
      options: {
        tabWidth: 2,
      },
    },
    {
      files: ['*js', '*ts'],
      options: {
        printWidth: 160,
      },
    },
  ],
};
