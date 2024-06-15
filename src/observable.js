
import { useEffect, useReducer, useCallback } from 'react';
;
var ObservableInternals, observable;

ObservableInternals = (function() {
  class ObservableInternals {
    constructor(state1) {
      this.reactSet = this.reactSet.bind(this);
      this.reactGet = this.reactGet.bind(this);
      this.state = state1;
    }

    get() {
      return this.state;
    }

    set(state) {
      console.log('set', state);
      this.state = state;
      return this.update();
    }

    update() {
      return this.observers.forEach((fn) => {
        return fn();
      });
    }

    reactSet(...args) {
      //useCallback (...args) -> @set(...args)
      return this.set(...args);
    }

    reactGet(options) {
      var delay, reducer, rerender, state;
      reducer = (state) => {
        return this.get();
      };
      [state, rerender] = useReducer(reducer, this.state);
      //endObserve = @observe rerender
      delay = options != null ? options.delay : void 0;
      useEffect(() => {
        var endObserve;
        endObserve = this.observe(() => {
          // rerender
          if (typeof delay === 'number') {
            return setTimeout(rerender, delay);
          } else {
            return rerender();
          }
        });
        return endObserve;
      });
      return state;
    }

    reactUseState(options) {
      return [this.reactGet(options), this.reactSet];
    }

    observe(listener) {
      this.observers.push(listener);
      return () => {
        var index;
        index = this.observers.indexOf(listener);
        console.log('End of observe', listener);
        return this.observers.splice(index, 1);
      };
    }

  };

  ObservableInternals.prototype.observers = [];

  return ObservableInternals;

}).call(this);

//@observers.delete(listener)
observable = function(...args) {
  return new ObservableInternals(...args);
};


export {observable};
;
