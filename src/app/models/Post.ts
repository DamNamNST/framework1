import { Moment } from 'moment';

export interface PostType {
  id?: number | null;
  title: string;
  image: string;
  createAt: string | Moment;
  categoriesPostId: number;
  short_desc: string;
  desc: string;
  categoriesPost?: { id: number; name: string };
}
