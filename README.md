[Akh](https://github.com/mattbierner/akh) trampoline for basic tail calls

## API
### `require('akh.core.trampoline').tail(f, x)`
Create a tail call the will invoke `f(x)`

### `require('akh.core.trampoline').trampoline(f)`
Invoke `f` to completion using a trampoline.
