sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.View1", {
        onInit: function () {
            // Initialize model with sample data for inventory and warehouses
            var oModel = new sap.ui.model.json.JSONModel({
                inventory: [
                    { id: "1", name: "Item A", category: "Category 1", quantity: 10, price: 100 },
                    { id: "2", name: "Item B", category: "Category 2", quantity: 5, price: 200 },
                    { id: "3", name: "Item C", category: "Category 3", quantity: 20, price: 150 },
                    { id: "4", name: "Item D", category: "Category 1", quantity: 7, price: 300 },
                    { id: "5", name: "Item E", category: "Category 2", quantity: 15, price: 250 }
                ],
                warehouses: [
                    { id: "1", country: "USA", city: "New York", address: "123 Main St" },
                    { id: "2", country: "Canada", city: "Toronto", address: "456 Queen St" },
                    { id: "3", country: "Germany", city: "Berlin", address: "789 King St" },
                    { id: "4", country: "Japan", city: "Tokyo", address: "101 Tokyo St" },
                    { id: "5", country: "Australia", city: "Sydney", address: "202 Sydney St" }
                ]
            });
            this.getView().setModel(oModel);
        },

        onSearchInventory: function (oEvent) {
            // Implement search logic for inventory
            var sQuery = oEvent.getParameter("query");
            var oTable = this.byId("inventoryTable");
            var oBinding = oTable.getBinding("items");
            if (sQuery) {
                var aFilters = [
                    new Filter("name", FilterOperator.Contains, sQuery),
                    new Filter("category", FilterOperator.Contains, sQuery)
                ];
                oBinding.filter(new Filter({
                    filters: aFilters,
                    and: false
                }));
            } else {
                oBinding.filter([]);
            }
        },

        onSearchWarehouse: function (oEvent) {
            // Implement search logic for warehouses
            var sQuery = oEvent.getParameter("query");
            var oTable = this.byId("warehouseTable");
            var oBinding = oTable.getBinding("items");
            if (sQuery) {
                var aFilters = [
                    new Filter("country", FilterOperator.Contains, sQuery),
                    new Filter("city", FilterOperator.Contains, sQuery)
                ];
                oBinding.filter(new Filter({
                    filters: aFilters,
                    and: false
                }));
            } else {
                oBinding.filter([]);
            }
        },

        onAddItem: function () {
            // Implement logic to add a new item
        },

        onEditItem: function () {
            // Implement logic to edit an item
        },

        onDeleteItem: function () {
            // Implement logic to delete an item
        },

        onEditWarehouse: function () {
            // Implement logic to edit a warehouse
        },

        onDeleteWarehouse: function () {
            // Implement logic to delete a warehouse
        }
    });
});
