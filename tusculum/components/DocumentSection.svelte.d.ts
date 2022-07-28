import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** Set an optional class name for the top-level element of this component to enable
           * scoped styling of each component instance from outside (in parent components or pages)
          */ wrapperClass?: string | undefined;
        level?: string | number | undefined;
        tag?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type DocumentSectionProps = typeof __propDef.props;
export declare type DocumentSectionEvents = typeof __propDef.events;
export declare type DocumentSectionSlots = typeof __propDef.slots;
export default class DocumentSection extends SvelteComponentTyped<DocumentSectionProps, DocumentSectionEvents, DocumentSectionSlots> {
}
export {};
