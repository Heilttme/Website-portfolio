import React from 'react';

const useBlockScroll = () => {
  let block = () => {
    if (document.body) {
        document.body.style.overflow = "hidden"
    }
    if (document.html) {
        document.html.style.overflow = "hidden"
    }
  }

  let allow = () => {
    if (document.body) {
        document.body.style.overflow =  ""
      }
    if (document.html) {
        document.html.style.overflow = ""
    }
  }

  return [block, allow]
};

export default useBlockScroll;