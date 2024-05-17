import { createClient } from "@supabase/supabase-js";
require("dotenv").config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const assignClientToCoach = async (coachId, clientId) => {
  try {
    // Insert into coach_client table
    const { error: insertError } = await supabase
      .from("coach_client")
      .insert([{ coach_id: coachId, client_id: clientId }]);

    if (insertError) throw insertError;

    console.log(
      `Client ${clientId} assigned to coach ${coachId} successfully.`
    );
  } catch (error) {
    console.error("Error assigning client to coach:", error);
  }
};

// Replace with actual IDs
const coachId = "coach-uuid";
const clientId = "client-uuid";

assignClientToCoach(coachId, clientId);
