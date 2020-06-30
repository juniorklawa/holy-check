export default function getBookTypeColors(type) {
  switch (type) {
    case 'paul_epistle':
      return ['#3CBAF0', '#1957C7'];
    case 'law':
      return ['#FFA726', '#EF6C00'];
    case 'history':
      return ['#4DD0E1', '#00838F'];
    case 'poetry':
      return ['#BA68C8', '#6A1B9A'];
    case 'major':
      return ['#AD1457', '#F06292'];
    case 'minor':
      return ['#558B2F', '#AED581'];
    case 'gospel':
      return ['#FBC02D', '#FBC02D'];
    case 'church_history':
      return ['#616161', '#9E9E9E'];
    case 'general_epistle':
      return ['#c62828', '#ef5350'];
    default:
      return ['#3CBAF0', '#1957C7'];
  }
}
