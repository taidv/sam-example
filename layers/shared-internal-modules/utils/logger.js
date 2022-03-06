const format = (level, args) =>
  `${new Date().toISOString()} ${level} ${args.map((arg) => JSON.stringify(arg)).join(' ')}`;

exports.debug = (...args) => console.debug(format('DEBUG', args));
