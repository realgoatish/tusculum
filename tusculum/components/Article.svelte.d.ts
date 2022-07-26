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
export declare type ArticleProps = typeof __propDef.props;
export declare type ArticleEvents = typeof __propDef.events;
export declare type ArticleSlots = typeof __propDef.slots;
export default class Article extends SvelteComponentTyped<ArticleProps, ArticleEvents, ArticleSlots> {
}
export {};
