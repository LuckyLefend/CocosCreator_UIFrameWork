import BaseUIForm from "../UIFrame/BaseUIForm";
import { UIFormType } from "../UIFrame/config/SysDefine";
import AdaptationManager, { AdaptationType } from "../UIFrame/AdaptationManager";
import { UIType } from "../UIFrame/FormType";
import GEventManager from "../UIFrame/GEventManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UserInfoForm extends BaseUIForm {

    UIType = new UIType(UIFormType.Fixed);   
    
    @property(cc.Node)
    backNode: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        AdaptationManager.getInstance().adaptationFormByType(AdaptationType.Top, this.node);
        this.backNode.on('click', () => {
            this.showUIForm("UIForm/LoginForm");
        });

        /**  */
        GEventManager.on('SendGold', (gold: number) => {
            cc.log('收到了来自FriendRankForm的消息');
        }, this);
    }

    // update (dt) {}
}
