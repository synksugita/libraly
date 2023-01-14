import * as Pixim from "@tawaship/pixim.js";
import { Content } from "./Content";
const [width,height]=[0x200,0x200];
const application=new Pixim.Application({
    width:width,
    height:height
});
Content.setConfig({
    width:width,
    height:height
});
const content=new Content();
application.attachAsync(content).then((e)=>{
    application.play();
});