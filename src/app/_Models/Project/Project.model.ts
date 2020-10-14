import { ProjectImage } from './ProjectImage.model';
import { ProjectFonctionnality } from './ProjectFonctionnality.model';

export class Project {
    id: string;
    name: string;
    subhead: string;
    descriptionMini: string;
    descriptionLong: string;
    projectFonctionnalities : ProjectFonctionnality [];
    images: ProjectImage[];
    githubUrl: string;
    color: string;
}