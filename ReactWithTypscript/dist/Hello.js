"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Fabric_1 = require("office-ui-fabric-react/lib/Fabric");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Icon_1 = require("office-ui-fabric-react/lib/Icon");
var Dialog_1 = require("office-ui-fabric-react/lib/Dialog");
var Service_1 = require("./Service");
var MyPage = function () { return (React.createElement(Fabric_1.Fabric, null,
    React.createElement(Button_1.DefaultButton, { primary: true }, "I am a button."))); };
;
//export interface sample {
//    HelloProps: HelloProps;
//    serviceComponent: ServiceComponent;
//}
// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
var Hello = /** @class */ (function (_super) {
    __extends(Hello, _super);
    function Hello(props) {
        var _this = _super.call(this, props) || this;
        _this.getEmployee = function () {
            var k = _this.serviceComponent.getEmployees().map(function (emp) {
                return React.createElement("li", null,
                    "  ",
                    emp.name,
                    "  ");
            });
            return k;
        };
        _this._showDialog = function () {
            _this.setState({ hideDialog: false });
        };
        _this._closeDialog = function () {
            _this.setState({ hideDialog: true });
        };
        _this.state = {
            hideDialog: true
        };
        _this.serviceComponent = new Service_1.ServiceComponent();
        return _this;
    }
    Hello.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(MyPage, null),
            React.createElement(Icon_1.Icon, { iconName: 'CompassNW', className: 'ms-IconExample' }),
            React.createElement(Icon_1.Icon, { iconName: 'Dictionary', className: 'ms-IconExample' }),
            React.createElement(Icon_1.Icon, { iconName: 'TrainSolid', className: 'ms-IconExample' }),
            React.createElement("div", null,
                React.createElement(Button_1.DefaultButton, { description: 'Opens the Sample Dialog', onClick: this._showDialog, text: 'Open Dialog' }),
                React.createElement(Dialog_1.Dialog, { hidden: this.state.hideDialog, onDismiss: this._closeDialog, dialogContentProps: {
                        type: Dialog_1.DialogType.normal,
                        title: 'All emails together',
                        subText: 'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.'
                    }, modalProps: {
                        isBlocking: true,
                        containerClassName: 'ms-dialogMainOverride'
                    } },
                    React.createElement(Dialog_1.DialogFooter, null,
                        React.createElement(Button_1.PrimaryButton, { onClick: this._closeDialog, text: 'Save' }),
                        React.createElement(Button_1.DefaultButton, { onClick: this._closeDialog, text: 'Cancel' })))),
            React.createElement("ul", null, this.getEmployee())));
    };
    return Hello;
}(React.Component));
exports.Hello = Hello;
//# sourceMappingURL=Hello.js.map