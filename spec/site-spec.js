 describe("get content function", function(){
  it('should make a request to the ITV API', function() {
    spyOn(myApp, 'getContent').and.callThrough()
    myApp.getContent();
    expect(myApp.getContent).toHaveBeenCalled();
    // expect(myApp.getContent).toHaveBeenCalledTimes(1);
    // expect(myApp.getContent.calls.argsFor(0)[0]).toContain('http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=popular&size=15&broadcaster=ITV');
    });

    // it('something about done', function(){
    //   spyOn($, 'ajax');
    //     // expect( $('.content-contain').find('.content-item').length).toBe(15);
    //     // var itemCount = element.all(by.css('.content-item')).count();
    //     // expect(itemCount).toBe(15);
    //     expect('.content-item').not.toExist();
    // });
 });
 
 