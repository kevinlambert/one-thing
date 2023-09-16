const documentHeight = () => {
  // timeout fixes race condition when mobile screen orientation changes
  setTimeout(() => {
    const doc = document.documentElement;
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
  }, 20);
};
// this is a fallback when dvh css element is not valid
window.addEventListener("resize", documentHeight);
documentHeight();
