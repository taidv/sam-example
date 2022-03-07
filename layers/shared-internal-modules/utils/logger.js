const isLocal = process.env.AWS_EXECUTION_ENV === undefined;

const format = (level, args) =>
  `${new Date().toISOString()} ${isLocal ? level : ''} ${args.map((arg) => JSON.stringify(arg)).join(' ')}`;

exports.debug = (...args) => console.debug(format('DEBUG', args));
