//! IF ANYTHING IN THIS FILE IS CHANGED MAKE SURE setVersion.js HAS ALSO BEEN UPDATED //TODO <-- remove this nonsense 
import App from "./App.svelte";

export default new App({
	target: document.body,
	props: {
		version: "1.3.0",
	}
});
