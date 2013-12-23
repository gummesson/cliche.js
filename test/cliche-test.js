(function() {

  'use strict';

  test('Single click event', function() {
    var one = document.querySelector('#one');
    var click = new Event('click');

    Cliche({
      '#one' : function() {
        one.style.color = 'red';
      }
    });

    one.dispatchEvent(click);
    strictEqual(one.style.color, 'red');
  });


  test('Single click event with target', function() {
    var one = document.querySelector('#one');
    var click = new Event('click');

    Cliche({
      '#one' : function(event) {
        if (event.target.innerText == 'One') {
          one.innerText = '1';
        }
      }
    });

    one.dispatchEvent(click);
    strictEqual(one.innerText, '1');
  });

  test('Multiple click events', function() {
    var one = document.querySelector('#one');
    var two = document.querySelector('#two');
    var click = new Event('click');

    Cliche({
      '#one' : function() {
        one.style.color = 'blue';
      },
      '#two' : function() {
        two.className = 'three';
      }
    });

    one.dispatchEvent(click);
    two.dispatchEvent(click);
    strictEqual(one.style.color, 'blue');
    strictEqual(two.className, 'three');
  });

  test('Multiple click events with targets', function() {
    var one = document.querySelector('#one');
    var two = document.querySelector('#two');
    var click = new Event('click');

    Cliche({
      '#one' : function(event) {
        if (event.target.id == 'one') {
          one.innerText = 'Uno';
        }
      },
      '#two' : function(event) {
        if (event.target.id == 'two') {
          two.innerText = 'Dos';
        }
      }
    });

    one.dispatchEvent(click);
    two.dispatchEvent(click);
    strictEqual(one.innerText, 'Uno');
    strictEqual(two.innerText, 'Dos');
  });


  test('A single click event with multiple targets', function() {
    var infinite = document.querySelectorAll('.infinite');
    var click = new Event('click');

    Cliche({
      '.infinite' : function(event) {
        event.target.style.color = 'green';
      }
    });

    infinite[0].dispatchEvent(click);
    strictEqual(infinite[0].style.color, 'green');
    strictEqual(infinite[1].style.color, '');
  });

})();
