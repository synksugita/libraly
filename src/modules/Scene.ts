import * as Pixim from "@tawaship/pixim.js";
export abstract class Scene extends Pixim.Container{
    constructor(){
        super();
    }
}
export abstract class SceneManager extends Pixim.Container{
    private scene:Scene|null;
    constructor(){
        super();

        this.scene=null;
    }
    protected changeScene<T extends Scene>(scene:T):T{
        this.scene&&this.scene.destroy();
        this.addChild(this.scene=scene);
        return scene;
    }
}