const { containerWidth, registerNextClick } = setup();

const elements = Array.from(document.querySelectorAll(".element"));

function getTops(timestamp) {
  return elements.map((element) => {
    const offset = element.offsetTop;
    const nextPosition = +(
      ((Math.sin(offset + timestamp / 1000) + 1) / 2) *
      containerWidth
    );

    return nextPosition;
  });
}

registerNextClick(function (timestamp) {
  const tops = getTops(timestamp);

  elements.forEach((element, index) => {
    element.style.transform = `translateX(${tops[index]}px)`;
  });
});
