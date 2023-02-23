export const { Some, None } = (() => {
    var _a;
    const KEY = Symbol("key");
    class Some {
        constructor(value) {
            this[_a] = null;
            this.map = (fn) => {
                const value = fn(this[KEY]);
                return value instanceof None ? value : _Some(value);
            };
            this.flatMap = (fn) => {
                let flatValue = this[KEY];
                if (flatValue instanceof None)
                    return flatValue;
                else if (flatValue instanceof Some)
                    return flatValue.flatMap(fn);
                return fn(flatValue);
            };
            this.unwrap = (_default) => this[KEY];
            this.match = (fnx, fny) => {
                const err = () => { throw new Error('Inexhaustive pattern'); };
                return (fnx.length && fnx || fny.length && fny || err)(this[KEY]);
            };
            this.try = (fn) => {
                try {
                    return fn(this[KEY]);
                }
                catch (_b) {
                    return None;
                }
            };
            this[KEY] = value;
        }
    }
    _a = KEY;
    class None {
        constructor() {
            this.map = (_) => this;
            this.flatMap = (fn) => this;
            this.unwrap = (_default) => {
                if (_default)
                    return _default;
                throw Error("Cannot unwrap None");
            };
            this.match = (fnx, fny) => {
                const err = () => { throw new Error('Inexhaustive pattern'); };
                return (!fnx.length && fnx || !fny.length && fny || err)();
            };
            this.try = (fn) => {
                try {
                    return fn();
                }
                catch (_b) {
                    return None;
                }
            };
        }
    }
    const _Some = (a) => Object.freeze(new Some(a));
    const _None = Object.freeze(new None());
    const _Option = (value) => {
        return value instanceof None ? value : _Some(value);
    };
    return { Some: _Some, None: _None };
})()