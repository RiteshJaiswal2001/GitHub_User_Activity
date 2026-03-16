console.log("Github User Activity.");

const username = process.argv[2];

if (!username) {
    console.log(`Please write the username.`)
    process.exit(1)
}
const userApi = `https://api.github.com/users/${username}/events`;

async function userDetails(userApi) {
  try {
    let user = await fetch(userApi);

    if (!user.ok) {
        console.log("User not found.");
        return
    }
    let userDetail = await user.json();

    if (userDetail.length === 0) {
        console.log("No recent activity found.");
            return;
    }
  
    console.log(userDetail[0]);
  } catch (error) {
    console.log(`error in fetchin user: ${error.message}`);
    
  }
}

userDetails(userApi);
