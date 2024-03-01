// Import our outputted wasm ES6 module
// Which, export default's, an initialization function
import init from "./pkg/hello_wasm.js";

const runWasm = async () => {
    // Instantiate our wasm module
    const helloWorld = await init("./pkg/hello_wasm_bg.wasm");

    // Call the Add function export from wasm, save the result
    const addResult = helloWorld.add(24, 24);

    // Set the result onto the body
    document.body.textContent = `Hello World! addResult: ${addResult}`;
};
runWasm();