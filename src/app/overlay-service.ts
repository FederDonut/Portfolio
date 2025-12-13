import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  
  projects = [
    {
      name: "Join",
      description: {
        EN: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
        DE: "Vom Kanban-System inspirierter Aufgabenmanager. Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu."
      },
      techstack:{
        Css:{img: "assets/img/techImgs/Tech_iconsCSS.png"},
        Html:{img: "assets/img/techImgs/Tech_iconsHTML.png"},
        Firebase:{img: "assets/img/techImgs/Tech_iconsFirebase.png"},
        Angular:{img: "assets/img/techImgs/Tech_iconsAngular.png"},
        TS:{img: "assets/img/techImgs/Tech_iconsTS.png"} 
      }
    },
    {
      name: "El Pollo Loco",
      description: {
        EN: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
        DE: "Sprung-, Lauf- und Wurfspiel, das auf einem objektorientierten Ansatz basiert. Hilf Pepe dabei, Münzen und Tabasco-Sauce zu finden, um gegen die verrückte Henne zu kämpfen."
      },
      techstack:{
        JS: {img: "/assets/img/techImgs/Tech_iconsJS.png"},
        Html: {img: "assets/img/techImgs/Tech_iconsHTML.png"},
        Css: {img: "assets/img/techImgs/Tech_iconsCSS.png"}
      }
    },
  ]

}
