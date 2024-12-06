import ErrorRepository from "./errorRepo";

const errList = new ErrorRepository();
console.log(errList.translate("1"));
console.log(errList.errors.size);