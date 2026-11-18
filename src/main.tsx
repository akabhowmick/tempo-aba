import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./components/Router";
import "./index.css";

export const createRoot = ViteReactSSG({ routes });
