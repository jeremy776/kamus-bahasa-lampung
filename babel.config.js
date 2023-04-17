module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      '@babel/preset-typescript',
      "babel-preset-expo",
      [
        "@babel/preset-env",
        {
          targets: {
            node: "current",
          },
        },
      ],
    ],
    plugins: [
      ['@babel/plugin-proposal-private-methods', { loose: true }],
    ]
  };
};
