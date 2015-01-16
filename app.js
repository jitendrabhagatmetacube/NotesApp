Ext.application({
    name: "NotesApp",
 	models: ["Note"],
    controllers: ["Notes"], 
	views: ["NotesList", "NotesListContainer"],
	stores: ["Notes"],
    launch: function () {

        //var notesListContainer = Ext.create("NotesApp.view.NotesListContainer");
         var notesListContainer = {
            xtype: "noteslistcontainer"
        };
        
        Ext.Viewport.add(notesListContainer);
    }
});

