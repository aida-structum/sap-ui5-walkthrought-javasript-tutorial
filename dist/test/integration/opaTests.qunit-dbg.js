QUnit.config.autostart = false;

sap.ui.require(["sap/ui/core/Core"], async(Core) => {
	"use strict";

	await Core.ready();

	sap.ui.require([
        "sap-ui5-walkthrough/localService/mockserver",
        "sap-ui5-walkthrough/test/integration/NavigationJourney"
	], (mockserver) => {
        // initialize the mock server
        mockserver.init();
        QUnit.start();
	});
});