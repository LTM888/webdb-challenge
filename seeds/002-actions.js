exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          project_id: "1",
          description: "something to place ",
          notes: "when you need some space"
        },

        {
          project_id: "1",
          description: "also",
          notes: "some space"
        },
        {
          project_id: "2",
          description: "just think of me",
          notes: "when you go to sleep"
        },
        {
          project_id: "2",
          description: "sike",
          notes: "just needed to write something"
        },

       
      ]);
    });
};