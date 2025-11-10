// this file holds our application setup.
sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], (UIComponent, JSONModel, Device) => {
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

            // set device model
            const oDeviceModel = new JSONModel(Device);
            oDeviceModel.setDefaultBindingMode("OneWay"); // best to set OneWay cus device model is read-only, but by default it's TwoWay
            // which lets us databind to change the model
            this.setModel(oDeviceModel, "device");

            // create views based on url
            this.getRouter().initialize();
        },

        getContentDensityClass() {
            return Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact";
        }
    })
})