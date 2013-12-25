describe('Cliche', function() {
  it('handles a single click event', function() {
    var one = document.querySelector('#one');
    var click = new Event('click');

    Cliche({
      '#one' : function(selector, event) {
        selector.style.color = 'red';
      }
    });

    one.dispatchEvent(click);
    proclaim.strictEqual(one.style.color, 'red');
  });

  it('handles a single click event with a target', function() {
    var one = document.querySelector('#one');
    var click = new Event('click');

    Cliche({
      '#one' : function(selector, event) {
        if (event.target.innerText == 'One') {
          selector.innerText = '1';
        }
      }
    });

    one.dispatchEvent(click);
    proclaim.strictEqual(one.innerText, '1');
  });

  it('handles multiple click events', function() {
    var one = document.querySelector('#one');
    var two = document.querySelector('#two');
    var click = new Event('click');

    Cliche({
      '#one' : function(selector, event) {
        selector.style.color = 'blue';
      },
      '#two' : function(selector, event) {
        selector.className = 'three';
      }
    });

    one.dispatchEvent(click);
    two.dispatchEvent(click);
    proclaim.strictEqual(one.style.color, 'blue');
    proclaim.strictEqual(two.className, 'three');
  });

  it('handles multiple click events with a target', function() {
    var one = document.querySelector('#one');
    var two = document.querySelector('#two');
    var click = new Event('click');

    Cliche({
      '#one' : function(selector, event) {
        if (event.target.id == 'one') {
          selector.innerText = 'Uno';
        }
      },
      '#two' : function(selector, event) {
        if (event.target.id == 'two') {
          selector.innerText = 'Dos';
        }
      }
    });

    one.dispatchEvent(click);
    two.dispatchEvent(click);
    proclaim.strictEqual(one.innerText, 'Uno');
    proclaim.strictEqual(two.innerText, 'Dos');
  });

  it('handles multiples of the same click event', function() {
    var infinite = document.querySelectorAll('.infinite');
    var click = new Event('click');

    Cliche({
      '.infinite' : function(selector, event) {
        selector.innerText = 'Ett';
      }
    });

    infinite[0].dispatchEvent(click);
    proclaim.strictEqual(infinite[0].innerText, 'Ett');
  });

  it('handles multiples of the same click event with a target', function() {
    var infinite = document.querySelectorAll('.infinite');
    var click = new Event('click');

    Cliche({
      '.infinite' : function(selector, event) {
        event.target.style.color = 'green';
      }
    });

    infinite[1].dispatchEvent(click);
    proclaim.strictEqual(infinite[0].style.color, '');
    proclaim.strictEqual(infinite[1].style.color, 'green');
  });
});
