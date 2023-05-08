export default function ({ store, app: { $axios }, route, redirect }) {
  // the two interceptors here will run in every $axios requests
  // On Request for this purpose is used to add the Bearer token on every request
  $axios.onRequest((config) => {
    let accessToken = store.state.client_token;
    if (accessToken && config.url !== "/employees/login") {
      config.headers.Authorization = "Bearer " + accessToken;
    }
    return config;
  });
  // On Error, when there is no Bearer token or token expired it will trigger logout
  $axios.onError(async (error) => {
    // Error status code
    const statusCode = error.response ? error.response.status : -1;
    console.log(route.path);
    if (route.path !== "/" && (statusCode === 401 || (statusCode === 500 && error.response.data.status === 401))) {
      store.dispatch("logout");
      return redirect("/");
    }
    return Promise.reject(error);
  });
}
