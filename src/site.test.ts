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

  it("should return 0 if no page was set", () => {
    const site = new Site();

    expect(site.currentPage).toEqual(0);
  });

  it("should return the index of a page it was set to", () => {
    const site = new Site();
    for (let c = 0; c < 5; c++) {
      site.addPage(new Page());
    }

    site.selectPage(3);

    expect(site.currentPage).toEqual(3);
  });

  it.each([1, 3, 4, 6])(
    "should increment the currentPage by one if selectNextPage is called",
    timesToTurn => {
      const site = new Site();
      for (let c = 0; c < 8; c++) {
        site.addPage(new Page());
      }

      for (var c = 0; c < timesToTurn; c++) {
        site.selectNextPage();
      }

      expect(site.currentPage).toEqual(timesToTurn);
    }
  );

  it.each([8, 9, 6])(
    "should not increment the currentPage if it would reach the length of pages",
    timesToTurn => {
      const site = new Site();
      for (let c = 0; c < 5; c++) {
        site.addPage(new Page());
      }

      for (var c = 0; c < timesToTurn; c++) {
        site.selectNextPage();
      }

      expect(site.currentPage).toEqual(site.pages.length - 1);
    }
  );

  it.each([1, 3, 4, 6])(
    "should decrement the currentPage by one if selectPreviousPage is called",
    timesToTurn => {
      const site = new Site();
      for (let c = 0; c < 8; c++) {
        site.addPage(new Page());
      }
      site.selectPage(7);

      for (var c = 0; c < timesToTurn; c++) {
        site.selectPreviousPage();
      }

      expect(site.currentPage).toEqual(7 - timesToTurn);
    }
  );

  it.each([10, 9, 16, 6])(
    "should not  decrement the currentPage below 0 by one if selectPreviousPage is called",
    timesToTurn => {
      const site = new Site();
      for (let c = 0; c < 8; c++) {
        site.addPage(new Page());
      }
      site.selectPage(7);

      for (var c = 0; c < timesToTurn; c++) {
        site.selectPreviousPage();
      }

      expect(site.currentPage).toBeGreaterThanOrEqual(0);
    }
  );
});
