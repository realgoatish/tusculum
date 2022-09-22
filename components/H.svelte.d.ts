import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** Set an optional class name for the top-level element of this component to enable
             * scoped styling of each component instance from outside (in parent components or pages)
             */ wrapperClass?: string;
        level?: string | number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type HProps = typeof __propDef.props;
export declare type HEvents = typeof __propDef.events;
export declare type HSlots = typeof __propDef.slots;
export default class H extends SvelteComponentTyped<HProps, HEvents, HSlots> {
}
export {};
