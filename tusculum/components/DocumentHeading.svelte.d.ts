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
export declare type DocumentHeadingProps = typeof __propDef.props;
export declare type DocumentHeadingEvents = typeof __propDef.events;
export declare type DocumentHeadingSlots = typeof __propDef.slots;
export default class DocumentHeading extends SvelteComponentTyped<DocumentHeadingProps, DocumentHeadingEvents, DocumentHeadingSlots> {
}
export {};
