import DeepThought from "./deepThought";

describe("Deep Thought", () => {
  it('should return the answer to life the universe and everything',()=>{
    const deepThought = new DeepThought();

    const theAnswer = deepThought.oDeepThoughtTellUsTheAnswerToLifeTheUniverseAndEverything();

    expect(theAnswer).toBe(42);
  });
});
