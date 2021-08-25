const path = require('path')

const config = {
  stories: ['../src/**/*.story.@(ts|mdx)'],
// @ts-ignore
  webpackFinal (config) {
    // SCSS
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../')
    })

    // TypeScript
    config.resolve.extensions.push('.ts')

    return config
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions'
  ]
}

module.exports = config
