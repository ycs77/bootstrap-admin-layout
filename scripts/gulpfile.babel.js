import { src, dest } from 'gulp'
import header from 'gulp-header'
import modifyFile from 'gulp-modify-file'
import banner from './banner'

const updateScssBanner = () => {
  return src('./../scss/bootstrap-admin-layout.scss')
    .pipe(modifyFile((content, path, file) => {
      // Clear the old banner
      return content.replace(/^\/\*\!(.|\r|\n)+\*\/(\r|\n)*((.|\r|\n)*)$/, '$3')
    }))
    .pipe(header(banner + '\n'))
    .pipe(dest('./../scss/'))
}

export {
  updateScssBanner
}
