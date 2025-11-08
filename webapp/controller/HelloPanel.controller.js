sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
], (Controller, MessageToast) => {
    "use strict";
    return Controller.extend("ui5.walkthrough.controller.HelloPanel", {
        onShowHello() {
            // read msg from i18n model
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sRecipient = this.getView().getModel().getProperty("/recipient/name");
            const sMsg = oBundle.getText("helloMsg", [sRecipient]);

            // show message
            MessageToast.show(sMsg);
        },

        async onOpenDialog() {
            // create dialog lazily. 
            // ??= is Nullish Coalescing Assignment op - assign value to a var only if the var's current value is null or undefined
            this.oDialog ??= await this.loadFragment({
                name: "ui5.walkthrough.view.HelloDialog"
            });
            this.oDialog.open();
        },

        onCloseDialog() {
            // this fn doesn't need tobe chained to the oDialog promise.
            // because this event handler is only called from within loaded dialog.
            this.byId("helloDialog").close();
        }
    });
});