import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** Set an optional class name for the top-level element of this component to enable
           * scoped styling of each component instance from outside (in parent components or pages)
          */ wrapperClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type HeadingProps = typeof __propDef.props;
export declare type HeadingEvents = typeof __propDef.events;
export declare type HeadingSlots = typeof __propDef.slots;
export default class Heading extends SvelteComponentTyped<HeadingProps, HeadingEvents, HeadingSlots> {
}
export {};
