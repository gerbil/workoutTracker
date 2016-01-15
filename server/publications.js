Meteor.publish('publicWorkouts', function() {
    return Workouts.find({userId: {$exists: false}});
});

Meteor.publish('privateWorkouts', function() {
    if (this.userId) {
        return Workouts.find({userId: this.userId});
    } else {
        this.ready();
    }
});

Meteor.publish('workouts', function(listId) {
    check(listId, String);

    return Workouts.find({listId: listId});
});
