const FauxWindow = {
  getComputedStyle(node) {
    return {
      getPropertyValue: node.style.getProperty,
    };
  },
};

export default FauxWindow;
