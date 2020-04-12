const arrow = document.querySelector(".arrowimg");
const logo = document.querySelector(".logo");
const menu = document.querySelector(".menu");
const astronaut = document.querySelector(".astronaut");
const guide = document.querySelector(".guide");
const contentText = document.querySelector(".content-text");

const tl = new TimelineMax();

tl.fromTo(
  logo,
  1,
  { marginLeft: -500, opacityu: 0.2 },
  { marginLeft: 0, opacity: 1 }
);
tl.fromTo(
  menu,
  1,
  { marginRight: -500, opacityu: 0.2 },
  { marginRight: 0, opacity: 1 }
);
tl.fromTo(
  astronaut,
  1,
  { marginRight: -100, opacity: 0 },
  { marginRight: 0, opacity: 1 }
);
tl.fromTo(
  guide,
  1,
  { marginLeft: -100, opacity: 0 },
  { marginLeft: 0, opacity: 1 }
);
tl.fromTo(
  contentText,
  1,
  { marginLeft: -100, opacity: 0 },
  { marginLeft: 0, opacity: 1 }
);
tl.to(arrow, 1, { marginTop: 0, opacity: 1, repeat: -1 });
