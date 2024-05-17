const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const addUser = async (email, password, role, firstName, lastName) => {
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
        role,
      },
    },
  });

  if (error) {
    console.error("Error signing up:", error);
    return;
  }

  console.log(`User ${email} added successfully as ${role}`);
};

// Example usage
addUser("coach@example.com", "temporaryPassword123", "coach", "Cam", "Ralph");
addUser(
  "client@example.com",
  "temporaryPassword123",
  "client",
  "Aaron",
  "Thompson"
);
