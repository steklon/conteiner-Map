import ErrorRepository from "../errorRepo";

describe("проверка метода translate класса ErrorRepository", () => {
  test("проверка получения текста ошибки", () => {
    const errors = new ErrorRepository();

    expect(errors.translate("3")).toBe("описание ошибки 3");
  });

  test("проверка получения неизвестной ошибки", () => {
    const errors = new ErrorRepository();

    expect(errors.translate("9")).toBe("Unknown error");
  });
});

test("проверка коллекции ошибок", () => {
  const errors = new ErrorRepository();

  expect(errors.errors.size).toBe(8);
});