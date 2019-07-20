import { title, version, author, homepage } from '../package.json'

const start_year = 2019
const now_year = new Date().getFullYear()
const year = String(start_year) + (now_year > start_year ? '-' +  now_year : '')
const banner = `/*!
 * ${title} v${version} (${homepage})
 * Copyright ${year} ${author}
 * Licensed under MIT (${homepage}/blob/master/LICENSE)
 */
`

export default banner
