window.onload = () => {
  const infoBox = document.getElementsByClassName("info-box");

  window.onscroll = () => {
    console.log(window.scrollY);
  };

  for (let i = 0; i < infoBox.length; i++) {
    infoBox[0].style.transform = "translate(0%)";
    setTimeout(() => {
      infoBox[0].style.opacity = "1";
    }, 50);

    /* Second box transition */
    window.onscroll = () => {
      if (window.scrollY > 250) {
        infoBox[1].style.transform = "translate(0%)";
        setTimeout(() => {
          infoBox[1].style.opacity = "1";
        }, 50);
      }

      if (window.scrollY > 550) {
        infoBox[2].style.transform = "translate(0%)";
        setTimeout(() => {
          infoBox[2].style.opacity = "1";
        }, 50);
      }

      if (window.scrollY > 850) {
        infoBox[3].style.transform = "translate(0%)";
        setTimeout(() => {
          infoBox[3].style.opacity = "1";
        }, 50);
      }
    };
  }
};
