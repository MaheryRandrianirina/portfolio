"use client";

import { createContext, Dispatch, SetStateAction } from "react";
import { Theme } from "../types";

export const ThemeContext = createContext<[theme: Theme, dispatcher: ()=>void|null]>(["dark", ()=>{ return }]);