import { WorkAndPlayImages } from './WorkAndPlayImage.model';

export class WorkAndPlay {
    id: string;
    name: string;
    descriptionMini: string;
    descriptionLong: string;
    images: WorkAndPlayImages[];
    githubUrl: string;
    color: string;
}