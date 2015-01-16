Ext.define("NotesApp.controller.Notes", {

    extend: "Ext.app.Controller",
    config: {
        refs: {
            // We're going to lookup our views by xtype.
            notesListContainer: "noteslistcontainer"
        },
        control: {
            notesListContainer: {
                // The commands fired by the notes list container.
                newNoteCommand: "onNewNoteCommand",
                editNoteCommand: "onEditNoteCommand"
            }
        }
    },

    // Commands.
    onNewNoteCommand: function () {

        console.log("onNewNoteCommand in controller");
    },
    onEditNoteCommand: function (list, record) {

        console.log("onEditNoteCommand");
    },
    // Base Class functions.
    launch: function () {
        this.callParent(arguments);
          Ext.getStore("Notes").load();
         console.log("arguments in controller launch: " + arguments);
        console.log("launch in controller");
    },
    


    init: function () {
        this.callParent(arguments);
         console.log("arguments in controller init: " + arguments);
        console.log("init in controller");
    }
});