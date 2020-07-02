import Realm from 'realm';
import ChapterSchema from '../schemas/ChapterSchema';
import PraySchema from '../schemas/PraySchema';

export default function getRealm() {
  return Realm.open({
    schema: [ChapterSchema, PraySchema],
  });
}
