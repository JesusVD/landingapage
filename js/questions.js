(function () {
  const titleQuestions = [...document.querySelectorAll(".questions__title")];

  titleQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      let height = 0;
      let answer = question.nextElementSibling; //siguiente elemento
      let addPadding = question.parentElement.parentElement; //question__padding

      addPadding.classList.toggle("questions__padding--add");

      question.children[0].classList.toggle("questions__arrow--rotate");

      if (answer.clientHeight === 0) {
        height = answer.scrollHeight; //alto minimo para que un elemento exista pero no da padding
      }

      answer.style.height = `${height}px`;
    });
  });
})();
//funcion autoinvocada para proteger las variables y no se mezclen con otros archivos
