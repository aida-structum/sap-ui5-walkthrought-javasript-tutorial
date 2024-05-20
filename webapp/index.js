sap.ui.define([
	"sap/ui/core/ComponentContainer"
], (ComponentContainer) => {
	"use strict";

	new ComponentContainer({
		name: "sap-ui5-walkthrough",
		settings : {
			id : "walkthrough"
		},
		async: true
	}).placeAt("content");
});
