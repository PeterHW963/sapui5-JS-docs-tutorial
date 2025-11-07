// this file holds our application setup.
sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
], (UIComponent, JSONModel) => {
    "use strict";
    return UIComponent.extend("ui5.walkthrough.Component", {
        // metadata section
        metadata: {
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
        },

        // init section: called when component is initialized
        init() {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            // set data model
            const oData = {
                recipient: {
                    name: "World"
                }
            };
            const oModel = new JSONModel(oData);
            this.setModel(oModel);
        }
    })
})