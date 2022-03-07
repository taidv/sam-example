const isLocal = process.env.AWS_EXECUTION_ENV === undefined;
const { eventParser, logger } = require(isLocal ? '../../layers/shared-internal-modules/index' : '/opt/nodejs/index');
const { debug } = logger;

exports.handler = async (event, context) => {
  debug('greeting handler start', { event, context, isLocal });
  const data = eventParser.parse(event);
  debug('parsed', { data });
  const { queryParams } = data;

  const name = queryParams?.name || 'there';

  try {
    const res = {
      statusCode: 200,
      body: JSON.stringify({
        message: `Hello, ${name}`,
      }),
    };
    debug(res);
    return res;
  } catch (err) {
    debug(err);
    return err;
  }
};

if (isLocal) {
  (async () => {
    const data = process.argv[2] || {};
    debug('start debug ', data);
    var result = await exports.handler(data);
    console.log(result);
  })();
}
