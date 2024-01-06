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
export type SectionProps = typeof __propDef.props;
export type SectionEvents = typeof __propDef.events;
export type SectionSlots = typeof __propDef.slots;
export default class Section extends SvelteComponent<SectionProps, SectionEvents, SectionSlots> {
}
export {};
