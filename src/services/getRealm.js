import Realm from 'realm';
import ChapterSchema from '../schemas/ChapterSchema';

export default function getRealm() {
  return Realm.open({
    schema: [ChapterSchema],
  });
}
