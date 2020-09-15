import { ProjectImage } from './ProjectImage.model';

export class Project {
    id: string;
    name: string;
    descriptionMini: string;
    descriptionLong: string;
    images: ProjectImage[];
    githubUrl: string;
    color: string;
}