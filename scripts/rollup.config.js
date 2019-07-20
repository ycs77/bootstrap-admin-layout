import fs from 'fs'
import path from 'path'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import { camelCase } from 'lodash'
import { name } from '../package.json'
import banner from './banner'

const base = path.resolve(__dirname, '..')
const js_src = path.resolve(base, 'js')
const dist = path.resolve(base, 'dist')

// The base rollup configuration
const baseConfig = {
  input: path.resolve(js_src, 'index.js'),
  plugins: [
    resolve(),
    commonjs(),
    babel({ exclude: 'node_modules/**' })
  ]
}

// Ensure dist directory exists
if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist)
}

export default [
  {
    ...baseConfig,
    output: {
      format: 'umd',
      name: camelCase(name),
      file: path.resolve(dist, `${name}.js`),
      banner
    }
  },
  {
    ...baseConfig,
    output: {
      format: 'umd',
      name: camelCase(name),
      file: path.resolve(dist, `${name}.min.js`),
      banner
    },
    plugins: [terser({
      output: {
        comments: 'all'
      }
    })]
  }
]
