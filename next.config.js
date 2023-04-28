// @ts-check
const UnoCSS = require('@unocss/webpack').default
const AutoImport = require('unplugin-auto-import/webpack')
// @ts-check
const runtimeCaching = require('next-pwa/cache')

const withPWA = require('next-pwa')({
  dest: 'public',
  runtimeCaching,
  disable: process.env.NODE_ENV === 'development',
})
const { i18n } = require('./next-i18next.config.js')

// You can remove the following 2 lines when integrating our example.
const { loadCustomBuildParams } = require('./next-utils.config')

const { esmExternals = false, tsconfigPath }
  = loadCustomBuildParams()

/** @type {import('next').NextConfig} */
const NextConfig = {
  experimental: {
    esmExternals, // https://nextjs.org/blog/next-11-1#es-modules-support
  },
  reactStrictMode: true,
  i18n,
  typescript: {
    tsconfigPath,
  },
  webpack: (config, context) => {
    config.plugins.push(UnoCSS())
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    config.plugins.push(AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
      imports: [
        'react',
        'react-i18next',
      ],
      dirs: ['hooks', 'composables', 'stores', 'utils'],
      dts: 'typings/auto-import.d.ts',
      vueTemplate: true,
    }))
    if (context.buildId !== 'development') {
      // * disable filesystem cache for build
      // * https://github.com/unocss/unocss/issues/419
      // * https://webpack.js.org/configuration/cache/
      config.cache = false
    }
    return config
  },
}
module.exports = withPWA(NextConfig)
