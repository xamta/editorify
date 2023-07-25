var Workspace = Backbone.Router.extend({

  routes: {
    "help":                 "help",    // #help
    "search/:query":        "search",  // #search/kiwis
    "search/:query/p:page": "search"   // #search/kiwis/p7
  },

  help: function() {
    alert();
  },

  search: function(query, page) {
        alert();
  }

});


   var engine = new QWeb2.Engine("./src/templates/templates.xml")
        engine.debug = true;
        
        var def = $.Deferred();
        engine.add_template('./src/templates/templates.xml', function(err) {
            if (err) {
                def.reject(err);
            } else {
                def.resolve();
                
            }
        });
        
        
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
    
   $(function() {
       var input = new Widget();
       input.$el.appendTo($("#box1"));
       
       console.log(engine.render('xbox'));
       
   });
   
   window.onerror = function(message, url, linenumber) {
        console.log("message: ", message);
      alert("JavaScript error: " + message + " on line " + linenumber + " for " + url);
   }

