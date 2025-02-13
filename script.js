 let cols = document.querySelectorAll(".image");
      cols.forEach((col) => {
        col.addEventListener("dragstart", (e) => {
          col.style.opacity = 0.5;
          e.dataTransfer.setData("text", col.id);
        });
        col.addEventListener("dragend", (e) => {
          col.style.opacity = 1;
        });
      });
      let parent = document.getElementById("parent");
      parent.addEventListener("dragover", (e) => {
        e.preventDefault();
      });
      parent.addEventListener("drop", (e) => {
        e.preventDefault();
        let cardId = e.dataTransfer.getData("text");
        let movingCard = document.getElementById(cardId);
        parent.appendChild(movingCard);
      });