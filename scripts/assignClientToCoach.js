import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabaseUrl = "";
const serviceRoleKey = "";

const supabase = createClient(supabaseUrl, serviceRoleKey);

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
    console.error("Error assigning client to coach:", error.message);
  }
};

// Replace with actual IDs for testing
const coachId = "coach-uuid";
const clientId = "client-uuid";

assignClientToCoach(coachId, clientId);
