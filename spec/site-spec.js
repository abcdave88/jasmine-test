 describe("get content function", function(){
  it('should make a request to the ITV API', function() {
      spyOn(myApp, 'getContent').and.callThrough()
      myApp.getContent();
      expect(myApp.getContent).toHaveBeenCalled();
    });
 })
 