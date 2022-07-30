import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** Set an optional class name for the top-level element of this component to enable
           * scoped styling of each component instance from outside (in parent components or pages)
          */ wrapperClass?: string | undefined;
        level?: string | number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type SectionProps = typeof __propDef.props;
export declare type SectionEvents = typeof __propDef.events;
export declare type SectionSlots = typeof __propDef.slots;
export default class Section extends SvelteComponentTyped<SectionProps, SectionEvents, SectionSlots> {
}
export {};
