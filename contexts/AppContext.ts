// import { State, StateContext } from "@models/state.model";
import { StateContext } from "@models/State.model";
import React from "react";

const AppContext = React.createContext({} as StateContext);

export default AppContext;