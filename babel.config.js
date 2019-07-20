module.exports = function(api) {
  let presets = []

  if (api.env('scss-banner')) {
    presets.push(['@babel/env'])
  }

  return {
    presets
  };
}
