import React from "react";
import {HtagProps} from "./Htag.props";

export const Htag = ({ tag, children }: HtagProps): React.ReactElement => {
    switch (tag) {
        case 'h1':
            return <h1 className="text-center">{ children }</h1>
        case 'h2':
            return <h2 className="text-center">{ children }</h2>
        case 'h3':
            return <h3 className="text-center">{ children }</h3>
        default:
            return <></>;
    }
}
