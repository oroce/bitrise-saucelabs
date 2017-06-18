describe('buttons', function () {
  it('increase should increase', function () {
    browser().navigateTo('/test-page');
    element('#btn-incr').click();
    element('#btn-incr').click();
    expect(element('.content').text()).toBe('2');
  });

  it('clear should clear', function () {
    browser().navigateTo('/test-page');
    element('.content').text('na');
    element('#btn-clear').click();
    expect(element('.content').text()).toBe('0');
  });
});
