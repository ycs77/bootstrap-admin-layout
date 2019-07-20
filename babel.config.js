module.exports = function(api) {
  let presets = []

  if (api.env('scssbanner')) {
    presets.push(['@babel/env'])
  }

  return {
    presets
  };
}
