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
      techstack: [
      { name: "CSS", img: "assets/img/techImgs/greenImgs/CSS.png" },
      { name: "HTML", img: "assets/img/techImgs/greenImgs/HTML.png" },
      { name: "Firebase", img: "assets/img/techImgs/greenImgs/Firebase.png" },
      { name: "Angular", img: "/assets/img/techImgs/greenImgs/Angular.png" },
      { name: "TypeScript", img: "assets/img/techImgs/greenImgs/TS.png" }
      ],
      photo: "/assets/img/Photos/Join-Photo-overlay.png",
      number: "01",
    },
    {
      name: "El Pollo Loco",
      description: {
        EN: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
        DE: "Sprung-, Lauf- und Wurfspiel, das auf einem objektorientierten Ansatz basiert. Hilf Pepe dabei, Münzen und Tabasco-Sauce zu finden, um gegen die verrückte Henne zu kämpfen."
      },
      techstack: [
          { name: "JavaScript", img: "/assets/img/techImgs/greenImgs/JS.png" },
          { name: "HTML", img: "assets/img/techImgs/greenImgs/HTML.png" },
          { name: "CSS", img: "assets/img/techImgs/greenImgs/CSS.png" }
      ],
      photo: "/assets/img/Photos/Pollo-Loco-overlay.png",
      number: "02",
    },
  ]

}
