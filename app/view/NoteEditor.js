Ext.define("NotesApp.view.NoteEditor", {
    extend: "Ext.form.Panel",
    requires: "Ext.form.FieldSet",
    alias: "widget.noteeditor",
    config:{
        scrollable:'vertical'
    },
    initialize: function () {

        this.callParent(arguments);

    }
});