import { errorsList } from "./errorsList";

export default class ErrorRepository {
  constructor() {
    this.errors = new Map(errorsList);
  }

  translate(code) {
    const key = Number(code);
    if (!this.errors.get(key)) {
      return 'Unknown error';
    }

    return this.errors.get(key);
  }
}