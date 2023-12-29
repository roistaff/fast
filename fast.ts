import * as mod from "https://deno.land/std@0.210.0/fmt/colors.ts";
let start = Date.now()
const response = await fetch("")
let end = Date.now()
const time = (end - start)/1000
const blob = response.blob()
console.log(time,blob.size)


