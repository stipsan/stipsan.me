let ratio

export default () => {
  if (ratio) {
    return ratio
  }

  let ratio = 1
  // To account for zoom, change to use deviceXDPI instead of systemXDPI
  if (
    global.screen &&
    global.screen.systemXDPI !== undefined &&
    global.screen.logicalXDPI !== undefined &&
    global.screen.systemXDPI > global.screen.logicalXDPI
  ) {
    // Only allow for values > 1
    ratio = global.screen.systemXDPI / global.screen.logicalXDPI
  } else if (global.devicePixelRatio !== undefined) {
    ratio = global.devicePixelRatio
  }
  return ratio
}
