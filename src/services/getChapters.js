import getRealm from '../services/getRealm';

export default async function getChapters(parentId) {
  const realm = await getRealm();
  const db = realm.objects('Chapter');
  const result = parentId
    ? db.filtered(`parentId = "${parentId}" AND read = ${true}`)
    : db.filtered(`read = ${true}`);
  return result;
}
