exports.parse = (event) => {
  const { body, path, httpMethod, queryStringParameters, pathParameters, stageVariables, headers, requestContext } =
    event;

  return {
    method: httpMethod,
    body,
    path,
    headers,
    stageVariables,
    queryParams: queryStringParameters,
    pathParams: pathParameters,
    identity: requestContext?.identity,
  };
};
