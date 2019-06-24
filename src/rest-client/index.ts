export const restGet = (url : string) : any => async (
  opts : any = {},
) : Promise<object> => {
  const headers = !!opts.headers ? opts.headers : {};
  headers['Content-Type'] = 'application/json';
  const response = await fetch(url, {
    headers,
    method: 'GET',
    ...opts,
  });
  return response.json();
};

export const restPost = (url : string) : any => (
  payload : any,
  opts : any = {},
) : any => async () : Promise<object> => {
  const headers = !!opts.headers ? opts.headers : {};
  headers['Content-Type'] = 'application/json';
  const response = await fetch(url, {
    method: 'POST',
    ...opts,
    body: JSON.stringify(payload),
    headers,
  });
  return response.json();
};
