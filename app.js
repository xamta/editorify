
var Widget = Backbone.View.extend({
    //className: 'editorify',
    initialize: function(option){
        console.log("widget option data: ", option || {});
        this.render(); // render template
        this.bindEditor();
    },
    render: function(){
       this.$el.html(engine.render('editorify-panel', this.dataSource()));
       return this;
    },
    events: {
      "click h1": "warn",
      "click .xmt-file": "file_selected",
    },
    bindEditor: function(){
        this.editor = ace.edit("xmt-editor-content");
        this.editor.setTheme("ace/theme/monokai");
        this.editor.session.setMode("ace/mode/javascript");
    },
    dataSource: function(){
        var data = {};
        return data;
    },
    file_selected: function(){
         this.editor.setValue("the new text here");
         //this.editor.session.setMode("ace/mode/css");
         this.editor.session.setMode("ace/mode/xml");
    },
    warn: function(){
      // throw Error("Great Error Message.");
    },
    destroy: function(){
//      this.el.remove();
//      this.unbind();
    }
});

// NOW LOADING TEMPLATE ENGINE SYSTEM
var engine = new QWeb2.Engine("./src/templates/templates.xml")
engine.debug = false;

var def = $.Deferred();
// Template will be loaded in async so use deffered , once load successful then def.resolve(); as works. execute code ahead.
// for any bocking ask me tejas@xamta.in
engine.add_template('./src/templates/templates.xml', function(err) {
    if (err) {
        def.reject(err);
    } else {
        def.resolve();
         $(function() {
         
           var input = new Widget({el:$("#editorify")});
           input.$el.appendTo($("#box1"));
          
           
            console.log(engine.render('xbox'));
       });
    }
});

//window.onerror = function(message, url, linenumber) {
//    console.log("message: ", message);
//  alert("JavaScript error: " + message + " on line " + linenumber + " for " + url);
//}


