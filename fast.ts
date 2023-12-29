import * as mod from "https://deno.land/std@0.210.0/fmt/colors.ts";
let start = Date.now()
const response = await fetch("https://github.com/roistaff/fast/raw/master/test50M")
let end = Date.now()
const time = (end - start)/1000
const size = response.headers.get('Content-Length') / (1024 * 1024 );
console.log(time,size)
const mbps = (size/time).toFixed(2)
console.log(mbps + "Mbps")

