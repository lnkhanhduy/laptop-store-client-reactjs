export function PostAPI(path, body, token) {
  const options = {
    method: 'POST',
    url: 'https://laptop-store-server-nodejs-n1bo1155h-lnkhanhduy.vercel.app/' + path,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    data: body,
  };

  return options;
}
