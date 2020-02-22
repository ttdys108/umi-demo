function CLOG(...args) {
  args.forEach(s => console.log(s));
}

function CERROR(...args) {
  args.forEach(s => console.error(s));
}

export { CERROR, CLOG }


