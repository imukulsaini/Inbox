export function errorHandler(error){

    if (error.response) {
        let err = error.response.data.message || "Response Error";
        return err;
      } else if (error.request) {
        return "Network Error Please Try Again";
      } else {
        console.log(error);
      }
      console.log(error.config);
}