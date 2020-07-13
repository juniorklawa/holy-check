import getRealm from '../services/getRealm';

export default async function createOneChapter(chapter) {
  try {
    const data = {
      id: chapter.id,
      read: chapter.read,
      note: '',
      parentId: chapter.parentId,
      section: chapter.section,
      readAt: chapter.readAt,
    };
    const realm = await getRealm();
    realm.write(() => {
      realm.create('Chapter', data, 'modified');
    });
  } catch (err) {
    console.log(err);
  }
}
