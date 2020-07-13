import Realm from 'realm';
import ChapterSchema from '../schemas/ChapterSchema';
import PraySchema from '../schemas/PraySchema';
import BookProgressSchema from '../schemas/BookProgress';

export default function getRealm() {
  return Realm.open({
    schema: [
      ChapterSchema.schema,
      PraySchema.schema,
      BookProgressSchema.schema,
    ],
  });
}
