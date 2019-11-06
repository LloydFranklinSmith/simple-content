import Page from "./page";
import DeepThought from "./deepThought";

describe("Page", () => {
  it("should return a title string", () => {
    const page = new Page();

    expect(typeof page.title).toEqual("string");
  });

  it("should return a content string", () => {
    const page = new Page();

    expect(typeof page.content).toEqual("string");
  });

  it("should return the title that was pased to it", () => {
    const page = new Page();

    page.title = "bannana";

    expect(page.title).toEqual("bannana");
  });

  it("should return the content that was pased to it", () => {
    const page = new Page();

    page.content = "some content";

    expect(page.title).toEqual("some content");
  });
});
