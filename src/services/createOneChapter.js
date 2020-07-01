import getRealm from '../services/getRealm';

export default async function createOneChapter(chapter, isRead) {
  try {
    const data = {
      id: chapter.id,
      read: !isRead,
      note: '',
      parentId: chapter.parentId,
      section: chapter.section,
    };
    const realm = await getRealm();
    realm.write(() => {
      realm.create('Chapter', data, 'modified');
    });
  } catch (err) {
    console.log(err);
  }
}
