const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const supabaseUrl = "";
const serviceRoleKey = "";

const supabase = createClient(supabaseUrl, serviceRoleKey);

const addUser = async (email, roles, firstName, lastName) => {
  // create a user in the auth system without a password
  // note that a trigger function is set up to automatically add users to the profiles table

  const { error } = await supabase.auth.admin.createUser({
    email,
    email_confirm: true, // Since we are manually creating users, we can confirm their email directly.
    user_metadata: {
      first_name: firstName,
      last_name: lastName,
      roles, // Pass roles as an array
    },
  });

  if (error) {
    console.error("Error creating auth user:", error);
    return;
  }

  console.log(
    `User ${email} added successfully with roles ${roles.join(", ")}`
  );
};

// Example usage
addUser("coach@example.com", ["coach"], "Cam", "Ralph");
addUser("thompson_ad@outlook.com", ["client"], "Aaron", "Thompson");
addUser("coachclient@example.com", ["coach", "client"], "Jamie", "Doe");
