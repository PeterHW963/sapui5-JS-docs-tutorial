// this file holds our application setup.
sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], (UIComponent, JSONModel, ResourceModel) => {
    "use strict";
    return UIComponent.extend("ui5.walkthrough.Component", {
        // metadata section
        metadata: {
            "interfaces": ["sap.ui.core.IAsyncContentCreation"],
            "rootView": {
                "viewName": "ui5.walkthrough.view.App",
                "type": "XML",
                "id": "app"
            }
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

            // set i18n (internationalization) model on view
            const i18nModel = new ResourceModel({
                bundleName: "ui5.walkthrough.i18n.i18n"
            });
            this.setModel(i18nModel, "i18n");
        }
    })
})