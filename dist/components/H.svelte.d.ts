import { SvelteComponent } from "svelte";
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
export type HProps = typeof __propDef.props;
export type HEvents = typeof __propDef.events;
export type HSlots = typeof __propDef.slots;
export default class H extends SvelteComponent<HProps, HEvents, HSlots> {
}
export {};
