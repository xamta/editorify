var Workspace = Backbone.Router.extend({

  routes: {
     "": "help",
    "help":                 "help",    // #help
    "search/:query":        "search",  // #search/kiwis
    "search/:query/p:page": "search"   // #search/kiwis/p7
  },

  help: function() {
       console.log("helping is my help route");
  },

  search: function(query, page) {
        console.log("nice to hearing you.");
  }

});
var t =  new Workspace();
Backbone.history.start();
// FOR ROUTER ITS IS ESSENTIAL TO HAVE Backbone.history.start(); after initialize (like var t =  new Workspace();) then only it works well.


var Widget = Backbone.View.extend({
    initialize: function(option){
       console.log("widget option data: ", option || {});
       this.render(); // render template
    },
    render: function(){
       this.$el.append("<h1>working</h1>");
       console.log("this.el",this.el);
       console.log("this.$el",this.$el);
    },
    events: {
      "click h1": "warn",
    },
    warn: function(){
       throw Error("Great Error Message.");
    },
    destroy: function(){
      this.el.remove();
      this.unbind();
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
           var input = new Widget();
           input.$el.appendTo($("#box1"));
          
           
            console.log(engine.render('xbox'));
       });
    }
});

window.onerror = function(message, url, linenumber) {
    console.log("message: ", message);
  alert("JavaScript error: " + message + " on line " + linenumber + " for " + url);
}


