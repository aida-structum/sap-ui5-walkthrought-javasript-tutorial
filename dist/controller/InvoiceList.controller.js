sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel","../model/formatter","sap/ui/model/Filter","sap/ui/model/FilterOperator"],(e,t,o,n,i)=>{"use strict";return e.extend("sap-ui5-walkthrough.controller.InvoiceList",{formatter:o,onInit(){const e=new t({currency:"EUR"});this.getView().setModel(e,"view")},onFilterInvoices(e){const t=[];const o=e.getParameter("query");if(o){t.push(new n("ProductName",i.Contains,o))}const r=this.byId("invoiceList");const s=r.getBinding("items");s.filter(t)},onPress(e){const t=e.getSource();const o=this.getOwnerComponent().getRouter();o.navTo("detail",{invoicePath:window.encodeURIComponent(t.getBindingContext("invoice").getPath().substr(1))})}})});
//# sourceMappingURL=InvoiceList.controller.js.map