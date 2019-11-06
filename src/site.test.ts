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
});
