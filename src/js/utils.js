export const addCommas = x => {
  x = parseInt(x);
  var parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}

export const getVisibleScale = (maps, filter) => {
  switch (filter) {
    case 'large':
      return maps.filter(d => { if (d.properties.scale === 'large') return d })
    case 'medium':
      return maps.filter(d => { if (d.properties.scale === 'medium') return d })
    case 'small':
      return maps.filter(d => { if (d.properties.scale === 'small') return d })
    case 'tiny':
      return maps.filter(d => { if (d.properties.scale === 'tiny') return d })
    default:
      return []
  }
}
