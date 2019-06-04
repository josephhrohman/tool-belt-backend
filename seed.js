// const db = require('./models'),
//       bcrypt = require('bcryptjs');


// const seedDatebase = async () => {
//   try {
//     const deletedUsers = await db.User.deleteMany();
//     console.log(`Deleted ${deletedUsers.deletedCount} Users`);

//     //Delete All Projects
//     const deletedProjects = await db.Project.deleteMany();
//     console.log(`Deleted ${deletedProjects.deletedCount} Projects`);

//     //Delete All Tools
//     const deletedTools = await db.Tool.deleteMany();
//     console.log(`Delete ${deletedTools.deletedCount} Tools`);

//     //Hash User Passwords
//     // usersData.forEach()  Do not use array method 'forEach' because it is not async
//     // Use 'for-in' loop
//     for (const user in usersData) {
//       const passwordHasher = await bcrypt.hashSync(usersData[user].password, 10);
//       usersData[user]. password = passwordHasher;
//     };

//     //Create New Users
//     const newUsers = await db.User.create(usersData);
//     console.log(`Created ${newUsers.length} Users`);

//     //Create New Cities
//     const newProjects = await db.Project.create(projectsData);
//     console.log(`Created ${newProjects.length} Projects`);

//     //Create New Posts
//     const newTools = await db.Tools.create(toolsData);
//     console.log(`Created ${newTools.length} Tools`);

//   } catch(err){
//     console.log('err');
//   }
// };

// seedDatebase();
    