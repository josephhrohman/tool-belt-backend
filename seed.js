const db = require('./models'),
      bcrypt = require('bcryptjs');

const seedDatabase = async () => {
      try {
        // Delete All Users
        const deletedUsers = await db.User.deleteMany();
        console.log(`Deleted ${deletedUsers.deletedCount} Users`);

        //Delete All Projects
        const deletedProjects = await db.Project.deleteMany();
        console.log(`Deleted ${deletedProjects.deletedCount} Projects`);

        //Delete All Tools
        const deletedTools = await db.Tool.deleteMany();
        console.log(`Deleted ${deletedProjects.deletedCount} Tools`);

        //Delete All List
        const deletedList = await db.List.deleteMany();
        console.log(`Delete ${deletedLists.deletedCount} Posts`);

        // Hash User Passwords
        for (const user in usersData) {
          const hashedPassword = bcrypt.hashSync(usersData[user].password, 10);
          usersData[user].password = hashedPassword;
        }
        console.log('User passwords hashed...');

        // Create New Users
        const newUsers = await db.User.create(usersData);
        console.log(`Created ${newUsers.length} users...`);

        // Create New Projects
        const newProjects = await db.Project.create(projectsData);
        console.log(`Created ${newProjects.length} projects...`);

        // Create New Tools
        const newTools = await db.Tool.create(toolData);
        console.log(`Created ${newTools.length} cities...`);

        // Create New List
        const newLists = await db.List.create(listsData);
        console.log(`Created ${newLists.length} lists...`);

        // Associate Users/Projects/Tools/Lists
        console.log('Associating models...');

        const randomIndex = arr => Math.floor(Math.random() * arr.length);

        for (const project in newProjects) {
          console.log('Random Index = ', randomIndex(newProjects));

          newProjects[project].user_id = newUsers[randomIndex(newUsers)];
          newProjects[project].tool_id = newToolss[randomIndex(newTools)];

          // Save Post
          await newProjects[project].save();
      }

        console.log('Users, tools, and lists successfully associated');

        console.log('Exiting...');
        process.exit();
        
      } catch(err) {
        console.log(err);
      }
}
seedDatabase();
