```
import { useEffect, useReducer, useCallback } from 'react';
```
class ObservableInternals
  observers: []
  constructor: (@state) ->

  get: () ->
    @state
  
  set: (state) ->
    console.log('set', state)
    @state = state
    @update()
  
  update: () ->
    @observers.forEach((fn) => fn())
  
  reactSet: (...args) =>
    #useCallback (...args) -> @set(...args)
    @set(...args)
  
  reactGet: (options) =>
    reducer = (state) => @get()
    [state, rerender] = useReducer(reducer, @state)
    #endObserve = @observe rerender
    delay = options?.delay
    useEffect => 
      endObserve = @observe =>
        # rerender
        if (typeof delay is 'number')
          setTimeout rerender, delay
        else
          rerender()
      return endObserve
    return state
  
  reactUseState: (options) ->
    return [
          @reactGet(options),
          @reactSet,
      ]
  
  observe: (listener) ->
    @observers.push(listener)
    return () => 
      index = @observers.indexOf(listener)
      console.log('End of observe', listener)
      @observers.splice(index, 1)
      #@observers.delete(listener)
    
observable = (...args) -> new ObservableInternals(...args)

```
export {observable};
```