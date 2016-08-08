Router.configure({
	layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
  this.render('welcome',{
  	to:"main"
  });
});
Router.route('/discussion', function () {
  this.render('navbar',{
  	to:"navbar"
  });
  this.render('comment',{
  	to:"main"
  	
  });
});


Template.comment.helpers({
		comments:function(){
			//var id=Session.get("userid");
			if(Comment.find({}).count()!=0)
			{
				return true;
			}
			else
			{
				return false;
			}

		}
});

Template.array_list.helpers({
	commentt:function()
		{return Comment.find({},{sort:{Email:1}});}
});

Accounts.ui.config({
		passwordSignupFields: "USERNAME_AND_EMAIL"
	});

Template.comment.events({
		"submit .js-save-comment":function(event){
			//console.log(Meteor.user().emails[0].address);
			var comment=event.target.commentt.value;
			var user=Meteor.user().username;
				//array.push(arr);
				Comment.insert({
					//username:Meteor.user().username,
					Email:Meteor.user().emails[0].address,
					comment:comment,
					createdOn:new Date(),
					createdBy:Meteor.user()._id

				});
			return false;
		}
	});
