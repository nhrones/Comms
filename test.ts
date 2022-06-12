import {TypedEvents} from './typedEvents.ts'

export function tests() {
    
    return {
        test_on_off(assert: { equal: (arg0: number, arg1: number) => void; }) {
            let counter = 0;
            const e = new TypedEvents<{ change: never }>();
            const callback = () => counter += 1;
            e.on("change", callback);
            e.emit("change");
            e.off("change", callback);
            e.emit("change");
            assert.equal(counter, 1);
        },

        test_emit_value(assert: { equal: (arg0: number, arg1: number) => void; }) {
            let value = 0;
            const e = new TypedEvents<{ change: number }>();
            const callback = (v: number) => value = v;
            e.on("change", callback);
            e.emit("change", 5);
            e.off("change", callback);
            assert.equal(value, 5);
        },

        test_double_on(assert: { equal: (arg0: number, arg1: number) => void; }) {
            let counter = 0;
            const e = new TypedEvents<{ change: never }>();
            const callback = () => counter += 1;
            e.on("change", callback);
            e.on("change", callback);
            e.emit("change");
            e.off("change", callback);
            assert.equal(counter, 1);
        }
    };
}
