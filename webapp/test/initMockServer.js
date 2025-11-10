sap.ui.define([
    "../localService/mockserver"
], (mockserver) => {
    "use strict";

    // initialize mock server
    mockserver.init();

    // initialize embedded component on HTML page
    sap.ui.require(["sap/ui/core/ComponentSupport"]);
})