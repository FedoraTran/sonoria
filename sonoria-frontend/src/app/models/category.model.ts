import {TrackModel} from './track.model';

export interface CategoryModel {
  id: string;
  name: string;
  image?: string;
  tracks?: TrackModel[];
}
