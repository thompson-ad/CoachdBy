import { createClient } from "@supabase/supabase-js";
require("dotenv").config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const assignProgramToClient = async (
  programName,
  clientId,
  coachId,
  workouts
) => {
  try {
    // Insert into programs table
    const { data: programData, error: programError } = await supabase
      .from("programs")
      .insert([{ name: programName, client_id: clientId, coach_id: coachId }])
      .single();

    if (programError) throw programError;

    const programId = programData.id;

    // Loop through each workout and insert them along with sections and movements
    for (const workout of workouts) {
      const { data: workoutData, error: workoutError } = await supabase
        .from("workouts")
        .insert([{ name: workout.name, program_id: programId }])
        .single();

      if (workoutError) throw workoutError;

      const workoutId = workoutData.id;

      for (const section of workout.sections) {
        const { data: sectionData, error: sectionError } = await supabase
          .from("sections")
          .insert([{ name: section.name, workout_id: workoutId }])
          .single();

        if (sectionError) throw sectionError;

        const sectionId = sectionData.id;

        for (const movement of section.movements) {
          const { data: movementData, error: movementError } = await supabase
            .from("movements")
            .select("id")
            .eq("name", movement.name)
            .single();

          let movementId;

          if (movementError && movementError.code === "PGRST116") {
            // Movement does not exist, insert it
            const { data: newMovementData, error: newMovementError } =
              await supabase
                .from("movements")
                .insert([{ name: movement.name, created_by: coachId }])
                .single();

            if (newMovementError) throw newMovementError;

            movementId = newMovementData.id;
          } else if (movementError) {
            throw movementError;
          } else {
            movementId = movementData.id;
          }

          const { error: sectionMovementError } = await supabase
            .from("section_movements")
            .insert([
              {
                section_id: sectionId,
                movement_id: movementId,
                sets: movement.sets,
                reps: movement.reps,
                rir: movement.rir,
                rest: movement.rest,
                notes: movement.notes,
              },
            ]);

          if (sectionMovementError) throw sectionMovementError;
        }
      }
    }

    console.log(
      `Program ${programName} assigned to client ${clientId} successfully.`
    );
  } catch (error) {
    console.error("Error assigning program to client:", error);
  }
};

// Example data
const programName = "Strength Training";
const clientId = "client-uuid";
const coachId = "coach-uuid";
const workouts = [
  {
    name: "Workout 1",
    sections: [
      {
        name: "Section 1",
        movements: [
          {
            name: "Squat",
            sets: 3,
            reps: "10",
            rir: "2",
            rest: 60,
            notes: "Keep back straight",
          },
          {
            name: "Bench Press",
            sets: 3,
            reps: "8",
            rir: "1",
            rest: 90,
            notes: "Focus on form",
          },
        ],
      },
      {
        name: "Section 2",
        movements: [
          {
            name: "Deadlift",
            sets: 3,
            reps: "6",
            rir: "1",
            rest: 120,
            notes: "Lift with legs",
          },
        ],
      },
    ],
  },
  {
    name: "Workout 2",
    sections: [
      {
        name: "Section 1",
        movements: [
          {
            name: "Overhead Press",
            sets: 3,
            reps: "12",
            rir: "3",
            rest: 60,
            notes: "Keep core tight",
          },
        ],
      },
    ],
  },
];

assignProgramToClient(programName, clientId, coachId, workouts);
