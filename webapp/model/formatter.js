sap.ui.define([], () => {
    "use strict";
    return {
        statusText(sStatus) {
            const oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            switch(sStatus) {
                case "A":
                    return oResourceBundle.getText("invoiceStatusA"); // returns New 
                case "B":
                    return oResourceBundle.getText("invoiceStatusB"); // returns In Progress
                case "C":
                    return oResourceBundle.getText("invoiceStatusC"); // returns Done
                default:
                    return sStatus;
            }
        }
    }
})