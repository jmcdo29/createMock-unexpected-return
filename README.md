# Odd Jest Error

When using `@golevelup/ts-jest` with Nest's new [`autoMock` feature](https://docs.nestjs.com/fundamentals/testing#auto-mocking), if no return or resolve value is provided for the mock, then jest provides a rather strange error message.

```
Unexpected return from a matcher function.
Matcher functions should return an object in the following format:
  {message?: string | function, pass: boolean}
'{"actual": {}, "expected": "some string", "message": [Function anonymous], "name": "toEqual", "pass": {}}' was returned
```

I've found that this _is_ because there's no mock return value from the mock created by `createMock`. You can see the setup in the [`test.ts `](test.ts) file, while I admit that the `foo` method _should_ be told what to return via `mockReturnValue`, I just wanted to point out that this error does arise. It looks like this is similar to [#160](https://github.com/golevelup/nestjs/issues/160).

## Steps to reproduce

1) clone
2) install
3) test

## Expected Behavior

Jest reports that the return is `undefined`