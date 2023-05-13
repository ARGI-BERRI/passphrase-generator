export interface Env {
  // environment configuration here...
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    return get();
  },
};

function get(): Response {
  const data = {
    passphrases: self.crypto.getRandomValues(new Uint32Array(10)),
  };

  const json = JSON.stringify(data, null, 2);
  return new Response(json, {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
}
