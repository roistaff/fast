import * as mod from "https://deno.land/std@0.210.0/fmt/colors.ts";
let start = Date.now()
const response = await fetch("https://github.com/roistaff/fast/raw/master/test10M")
let end = Date.now()
const time = (end - start)/1000
const size = response.headers.get('Content-Length');
console.log(size / (1024 * 1024 ) + "MB")

