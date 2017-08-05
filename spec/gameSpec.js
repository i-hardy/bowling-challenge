describe("Game", function () {
  var game;

  beforeEach(function () {
    game = new Game();
    game.setFrames();
  });

  describe("initialization", function() {
    it("should contain ten frames", function () {
      expect(game.frames.length).toEqual(10);
      game.frames.forEach(function (frame) {
        expect(frame instanceof Frame).toBeTruthy();
      });
    });
  });

  describe("playing a game", function() {
    it("does not roll a second roll if a frame is a strike", function() {
      spyOn(Frame.prototype, "isStrike").and.returnValue(true);
      spyOn(Frame.prototype, "secondRoll");
      game.play();
      expect(Frame.prototype.secondRoll).not.toHaveBeenCalled();
    });
  });

  describe("getting the score", function() {
    it("should calculate the score from all its frames", function () {
      spyOn(Frame.prototype, "getScore").and.returnValue(5);
      game.play();
      expect(game.getScore()).toEqual(50);
    });
  });
});
