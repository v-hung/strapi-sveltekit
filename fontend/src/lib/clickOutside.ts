/** Dispatch event on click outside of node */
export function clickOutside(node, callback) {

  function onClick(event) {
    if (!node.contains(event.target)) {
      callback();
    }
  }

  document.body.addEventListener('click', onClick);

  return {
    update(newCallbackFunction) {
      callback = newCallbackFunction;
    },
    destroy() {
      document.body.removeEventListener('click', onClick);
    }
  }
}
