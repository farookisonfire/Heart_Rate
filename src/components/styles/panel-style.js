const defaultBreakpoints = {
    extraSmall: 480,
    small: 768,
    medium: 992,
    large: 1000,
}

exports.panelWidth = (browser) => {
  let width = '480';
  if(browser.greaterThan.extraSmall) width = defaultBreakpoints.extraSmall
  if(browser.greaterThan.small) width = defaultBreakpoints.small
  if(browser.greaterThan.medium) width = defaultBreakpoints.medium
  if(browser.greaterThan.large) width = defaultBreakpoints.large
  return width
}



exports.panelStyle = (width) => {
  return {
    width: width,
    height: '390px',
    textAlign:'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '100px',
    backgroundColor: 'linear-gradient(to bottom right, #EDF5FC, #445467)',
    opacity: '.85',
    boxShadow: '10px 8px 5px #333',
    borderRadius: '8px'
  }
}



exports.panelStyleEnrolled = {
  width: '600px',
  height: '390px',
  textAlign:'center',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '100px',
  backgroundColor: 'linear-gradient(to bottom right, #EDF5FC, #445467)',
  opacity: '.85',
  boxShadow: '10px 8px 5px #333',
  borderRadius: '8px'
}

exports.panelStyleProgram = {
  width: '800px',
  height: '390px',
  textAlign:'center',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '100px',
  backgroundColor: 'linear-gradient(to bottom right, #EDF5FC, #445467)',
  opacity: '.85',
  boxShadow: '10px 8px 5px #333',
  borderRadius: '8px'
}

exports.panelStyleApplied = {
  width: '1000',
  height: '390px',
  textAlign:'center',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '100px',
  backgroundColor: 'linear-gradient(to bottom right, #EDF5FC, #445467)',
  opacity: '.85',
  boxShadow: '10px 8px 5px #333',
  borderRadius: '8px'
}

exports.panelStyleHome = {
  backgroundColor: 'linear-gradient(to bottom right, #EDF5FC, #445467)',
  opacity: '.85',
  borderRadius: '2px',
  margin: '0',
}

exports.panelStyleHomeBig = {
  backgroundColor: 'linear-gradient(to bottom right, #EDF5FC, #445467)',
  opacity: '.85',
  borderRadius: '2px',
  boxShadow: '10px 8px 5px #333',
}
