"use strict";
const InstanceAttributes = Symbol("InstanceAttributes");
class Maybe {
    static [Symbol.hasInstance](instance) {
        return instance === Just || instance === None;
    }
}

Maybe.Just = Just;
Maybe.None = None;

function Just(value) {
    var _a;
    class Just extends Maybe {
        constructor(value) {
            super();
            this[_a] = new Map();
            this[InstanceAttributes].set("value", value);
        }
        map(fn) {
            return new Just(fn(this[InstanceAttributes].get("value")));
        }
        static [(_a = InstanceAttributes, Symbol.hasInstance)](instance) {
            return instance === Maybe.Just;
        }
    }
    return new Just(value);
}

function None() {
    var _a;
    class None extends Maybe {
        constructor() {
            super();
            this[_a] = new Map();
        }
        map(_) {
            return new None();
        }
        static [(_a = InstanceAttributes, Symbol.hasInstance)](instance) {
            return instance === Maybe.None;
        }
    }
    return new None();
}

Match._ = Symbol("MatchAll");
function Match(base, instance) {
    let done = false;
    const matchObj = { when, unwrap: () => { throw new Error("Inexhaustive Pattern"); } };
    return matchObj;
    function when(childConstructor, cb) {
        if (!done && childConstructor === Match._)
            matchObj.unwrap = () => cb(), done = true;
        if (done)
            return matchObj;
        done = childConstructor instanceof base && childConstructor instanceof instance.constructor;
        if (!done)
            return matchObj;
        matchObj.unwrap = () => instance[InstanceAttributes].size > 0
            ? cb(Object.fromEntries(instance[InstanceAttributes]))
            : cb();
        return matchObj;
    }
}

// const x = Just(10)
// const y = Match(Maybe, x)
//     .when(Just, ({ value }) => String(value).repeat(2))
//     .when(None, () => String(''))
//     .when(Match._, () => "no match found").unwrap()
// console.log(y)
