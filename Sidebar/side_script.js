document
          .querySelector(".side-panel-toggle")
          .addEventListener("click", () => {
            document
              .querySelector(".wrapper")
              .classList.toggle("side-panel-open");
            document
              .querySelector(".side-panel-toggle")
              .classList.toggle("buff");
          });