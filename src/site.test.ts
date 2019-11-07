import Site from "./site";
import Page from "./page";

describe("Site", () => {
  it("should return a array of pages", () => {
    const site = new Site();

    const pages: Array<Page> = site.pages;
  });

  it("should return a array with the added pages", () => {
    const site = new Site();
    const mockPage = new Page();
    mockPage.content = "someContent";

    site.addPage(mockPage);

    expect(site.pages).toContain(mockPage);
  });

  it.each([1, 3, 5, 6])(
    "should return the index of a added page",
    (pagesToCreate: Number) => {
      const site = new Site();
      let lastPage: Page;
      let lastPageIndex: number;
      for (let c = 0; c < pagesToCreate; c++) {
        lastPage = new Page();
        lastPage.content = c.toString();
        lastPageIndex = site.addPage(lastPage);
      }

      expect(site.pages[lastPageIndex]).toEqual(lastPage);
    }
  );
});
