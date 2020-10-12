import { Project } from '../_Models/Project/Project.model';

export const PROJECTS : Project[] =
[
    {
      id : "workAndPlay-1",
      name : "Bio'Connect",
      descriptionMini : "My first project ! It is a web application, which makes it possible to display a map of collaborative, solidarity and ecological brands. ",
      descriptionLong : "jfghdzekjfhikudshfhkjdshkfhkdshjkfhjkdhsjkfhjkdshjkfhjkdsh",
      images : [
        {
          //le nom du document est name + "-" + id + "." + format
          //name lower case & space remplace by -
          id : "1",
          name: "bio-connect",
          format : "png",
          alt : "Bio'Connect first image"
        },
        {
          id : "2",
          name: "bio-connect",
          format : "png",
          alt : "Bio'Connect first image"
        },
        {
          id : "3",
          name: "bio-connect",
          format : "png",
          alt : "Bio'Connect first image"
        }
      ],
    githubUrl : "url exemple",
    color : "#C2D53F"
    },
    {
      id : "workAndPlay-2",
      name : "Piggy Banks",
      descriptionMini : "A Ecommerce web site ! Piggy Banks it's",
      descriptionLong : "jfghdzekjfhikudshfhkjdshkfhkdshjkfhjkdhsjkfhjkdshjkfhjkdsh",
      images : [
        {
          //le nom du document est name + "-" + id + "." + format
          //name lower case & space remplace by -
          id : "1",
          name: "piggy-banks",
          format : "png",
          alt : "Bio'Connect first image"
        },
        {
          id : "2",
          name: "piggy-banks",
          format : "png",
          alt : "Bio'Connect first image"
        },
        {
          id : "3",
          name: "piggy-banks",
          format : "png",
          alt : "Bio'Connect first image"
        },
        {
          id : "4",
          name: "piggy-banks",
          format : "png",
          alt : "Bio'Connect first image"
        },
        {
          id : "5",
          name: "piggy-banks",
          format : "png",
          alt : "Bio'Connect first image"
        },

      ],
    githubUrl : "url exemple",
    color : "#02C9C9"
    }
  ]