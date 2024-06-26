const coachId = 'e85ae5e8-785f-43aa-902a-15a994ab43d9'; // Cam
const clientId = '57ec45b8-5c66-4cb7-9cb5-cce8c5fd3de5'; // Aaron

const complexProgram1 = {
  programName: 'Complex Training Program 2',
  clientId: clientId,
  coachId: coachId,
  workouts: [
    {
      name: 'Day 1',
      day: 1,
      type: 'Lift',
      sections: [
        {
          name: 'Structural Balance (Shoulder)',
          type: 'Strength',
          order: 1,
          movements: [
            {
              name: 'Dumbbell upright row',
              sets: null,
              reps: '10',
              rest: null,
              notes: 'EMOM x 12 mins',
              superset_group: 'superset-uuid-1',
              circuit_group: null,
              order: 1,
            },
            {
              name: 'Dumbbell front raises',
              sets: null,
              reps: '10',
              rest: null,
              notes: 'EMOM x 12 mins',
              superset_group: 'superset-uuid-1',
              circuit_group: null,
              order: 2,
            },
            {
              name: 'YTW',
              sets: null,
              reps: '5/5/5',
              rest: null,
              notes: 'EMOM x 12 mins',
              superset_group: 'superset-uuid-1',
              circuit_group: null,
              order: 3,
            },
            {
              name: 'Poliquin Raises',
              sets: null,
              reps: '10',
              rest: null,
              notes: 'EMOM x 12 mins',
              superset_group: 'superset-uuid-1',
              circuit_group: null,
              order: 4,
            },
          ],
        },
        {
          name: 'Strength (Push & Pull)',
          type: 'Strength',
          order: 2,
          movements: [
            {
              name: 'Bench Press',
              sets: '5',
              reps: '8',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 1,
            },
            {
              name: 'Landmine press',
              sets: null,
              reps: '8-10',
              rest: 60,
              notes: 'EMOM 9 minutes',
              superset_group: 'superset-uuid-2',
              circuit_group: null,
              order: 2,
            },
            {
              name: 'Hammer Curls with ISO hold',
              sets: null,
              reps: '6-10',
              rest: 60,
              notes: 'EMOM 9 minutes',
              superset_group: 'superset-uuid-2',
              circuit_group: null,
              order: 3,
            },
            {
              name: 'Banded tricep extensions',
              sets: null,
              reps: '20-30',
              rest: 60,
              notes: 'EMOM 9 minutes',
              superset_group: 'superset-uuid-2',
              circuit_group: null,
              order: 4,
            },
            {
              name: 'Weighted bar dips',
              sets: '5',
              reps: '8',
              rest: 60,
              notes: '5 sets for quality',
              superset_group: 'superset-uuid-3',
              circuit_group: null,
              order: 5,
            },
            {
              name: 'Double dumbbell Zottman curls',
              sets: '5',
              reps: '12',
              rest: 60,
              notes: '5 sets for quality',
              superset_group: 'superset-uuid-3',
              circuit_group: null,
              order: 6,
            },
          ],
        },
        {
          name: 'Accessory (Stability)',
          type: 'Accessory',
          order: 3,
          movements: [
            {
              name: 'Banded wood chops',
              sets: null,
              reps: '10',
              rest: null,
              notes: 'EMOM for 9 minutes',
              superset_group: 'superset-uuid-4',
              circuit_group: null,
              order: 1,
            },
            {
              name: 'Russian Twist',
              sets: null,
              reps: '20',
              rest: null,
              notes: 'EMOM for 9 minutes',
              superset_group: 'superset-uuid-4',
              circuit_group: null,
              order: 2,
            },
            {
              name: 'Dumbbell side plank rotations',
              sets: null,
              reps: '6-8',
              rest: null,
              notes: 'EMOM for 9 minutes',
              superset_group: 'superset-uuid-4',
              circuit_group: null,
              order: 3,
            },
            {
              name: 'Wall facing handstand hold',
              sets: '3',
              reps: '20s',
              rest: 20,
              notes: '3 sets for quality',
              superset_group: 'superset-uuid-5',
              circuit_group: null,
              order: 4,
            },
            {
              name: 'Supinated grip chin over bar hold',
              sets: '3',
              reps: '20s',
              rest: 20,
              notes: '3 sets for quality',
              superset_group: 'superset-uuid-5',
              circuit_group: null,
              order: 5,
            },
          ],
        },
      ],
    },
    {
      name: 'Day 2',
      day: 2,
      type: 'Lift',
      sections: [
        {
          name: 'Structural Balance (lower)',
          type: 'Strength',
          order: 1,
          movements: [
            {
              name: 'Temp VMO cyclist squats',
              sets: null,
              reps: '10',
              rest: null,
              notes: 'EMOM 9 minutes',
              superset_group: 'superset-uuid-6',
              circuit_group: null,
              order: 1,
            },
            {
              name: 'Dumbbell Hamstring curls',
              sets: null,
              reps: '15',
              rest: null,
              notes: 'EMOM 9 minutes',
              superset_group: 'superset-uuid-6',
              circuit_group: null,
              order: 2,
            },
            {
              name: 'Kettlebell Cossack Deadlifts',
              sets: null,
              reps: '8',
              rest: null,
              notes: 'EMOM 9 minutes',
              superset_group: 'superset-uuid-6',
              circuit_group: null,
              order: 3,
            },
          ],
        },
        {
          name: 'Strength (Squat)',
          type: 'Strength',
          order: 2,
          movements: [
            {
              name: 'Single leg box jumps',
              sets: null,
              reps: '3',
              rest: null,
              notes: 'EMOM for 6 minutes',
              superset_group: 'superset-uuid-7',
              circuit_group: null,
              order: 1,
            },
            {
              name: 'Front squat',
              sets: '2',
              reps: '3',
              rest: null,
              notes: '96 kg',
              superset_group: null,
              circuit_group: null,
              order: 2,
            },
            {
              name: 'Front squat',
              sets: '2',
              reps: '3',
              rest: null,
              notes: '102 kg',
              superset_group: null,
              circuit_group: null,
              order: 3,
            },
            {
              name: 'Front squat',
              sets: '1',
              reps: '3',
              rest: null,
              notes: '108 kg at a 9/10 RPE',
              superset_group: null,
              circuit_group: null,
              order: 4,
            },
          ],
        },
        {
          name: 'Conditioning',
          type: 'Conditioning',
          order: 3,
          movements: [
            {
              name: 'C2 Bike',
              sets: null,
              reps: '24 cals',
              rest: null,
              notes: '5 rounds for time',
              superset_group: 'superset-uuid-8',
              circuit_group: null,
              order: 1,
            },
            {
              name: 'Alternating Dumbbell hang snatch',
              sets: null,
              reps: '16',
              rest: null,
              notes: '5 rounds for time',
              superset_group: 'superset-uuid-8',
              circuit_group: null,
              order: 2,
            },
            {
              name: 'Burpee box jump overs',
              sets: null,
              reps: '8',
              rest: null,
              notes: '24 inches, 5 rounds for time',
              superset_group: 'superset-uuid-8',
              circuit_group: null,
              order: 3,
            },
          ],
        },
      ],
    },
    {
      name: 'Day 3',
      day: 3,
      type: 'Lift',
      sections: [
        {
          name: 'Structural Balance (Upper)',
          type: 'Strength',
          order: 1,
          movements: [
            {
              name: 'Dumbbell internal rotations',
              sets: null,
              reps: '10',
              rest: null,
              notes: 'each side',
              superset_group: null,
              circuit_group: null,
              order: 1,
            },
            {
              name: 'Prone Y Raises',
              sets: null,
              reps: '10',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 2,
            },
            {
              name: 'Banded pull aparts',
              sets: null,
              reps: '20',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 3,
            },
          ],
        },
        {
          name: 'Strength (Push and pull)',
          type: 'Strength',
          order: 2,
          movements: [
            {
              name: 'Single arm bent over row',
              sets: null,
              reps: '6',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 1,
            },
            {
              name: 'Double dumbbell bent over row',
              sets: '2',
              reps: '12',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 2,
            },
            {
              name: 'Alternating dumbbell shoulder press',
              sets: null,
              reps: '16',
              rest: 60,
              notes: 'EMOM 9 minutes',
              superset_group: 'superset-uuid-9',
              circuit_group: null,
              order: 3,
            },
            {
              name: 'Hand release push ups',
              sets: null,
              reps: 'max in 40s',
              rest: 60,
              notes: 'EMOM 9 minutes',
              superset_group: 'superset-uuid-9',
              circuit_group: null,
              order: 4,
            },
            {
              name: 'Barbell bicep 21s',
              sets: '3',
              reps: '7/7/7',
              rest: 60,
              notes: '3 sets for quality',
              superset_group: 'superset-uuid-10',
              circuit_group: null,
              order: 5,
            },
            {
              name: 'Dumbbell Tricep kickback',
              sets: '3',
              reps: '10',
              rest: 60,
              notes: 'each side, 3 sets for quality',
              superset_group: 'superset-uuid-10',
              circuit_group: null,
              order: 6,
            },
          ],
        },
        {
          name: 'Accessory (Core)',
          type: 'Accessory',
          order: 3,
          movements: [
            {
              name: 'Side plank pulses',
              sets: '3',
              reps: '30',
              rest: null,
              notes: 'each side',
              superset_group: null,
              circuit_group: null,
              order: 1,
            },
            {
              name: 'Hanging oblique crunches',
              sets: '3',
              reps: '15',
              rest: null,
              notes: 'each side',
              superset_group: null,
              circuit_group: null,
              order: 2,
            },
          ],
        },
      ],
    },
    {
      name: 'Day 4',
      day: 4,
      type: 'Lift',
      sections: [
        {
          name: 'Structural balance (lower)',
          type: 'Strength',
          order: 1,
          movements: [
            {
              name: 'GHD prone hold',
              sets: null,
              reps: '30-40s',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 1,
            },
            {
              name: 'GHD nordic extensions',
              sets: null,
              reps: '6-10',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 2,
            },
            {
              name: 'GHD hip extensions',
              sets: null,
              reps: '10-15',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 3,
            },
          ],
        },
        {
          name: 'Strength (Lower)',
          type: 'Strength',
          order: 2,
          movements: [
            {
              name: 'Build to heavy 5 reps',
              sets: null,
              reps: '5',
              rest: null,
              notes: 'Every 2 minutes x 4-6 sets',
              superset_group: 'superset-uuid-11',
              circuit_group: null,
              order: 1,
            },
            {
              name: '2 x 10 reps',
              sets: null,
              reps: '10',
              rest: null,
              notes: 'Every 2 minutes x 4-6 sets',
              superset_group: 'superset-uuid-11',
              circuit_group: null,
              order: 2,
            },
            {
              name: 'Bulgarian split squat',
              sets: null,
              reps: '4',
              rest: null,
              notes: 'Build to heavy, each side',
              superset_group: 'superset-uuid-12',
              circuit_group: null,
              order: 3,
            },
            {
              name: 'Bulgarian split squat',
              sets: '2',
              reps: '8',
              rest: null,
              notes: '70%, each side',
              superset_group: 'superset-uuid-12',
              circuit_group: null,
              order: 4,
            },
          ],
        },
        {
          name: 'Conditioning',
          type: 'Conditioning',
          order: 3,
          movements: [
            {
              name: 'Double Dumbbell Farmers Carry',
              sets: null,
              reps: '20m',
              rest: null,
              notes: 'EMOM 10 minutes',
              superset_group: 'superset-uuid-13',
              circuit_group: null,
              order: 1,
            },
            {
              name: 'Sandbag Bear Hug Carry',
              sets: null,
              reps: '20m',
              rest: null,
              notes: 'EMOM 10 minutes',
              superset_group: 'superset-uuid-13',
              circuit_group: null,
              order: 2,
            },
            {
              name: 'Double Dumbbell bench press',
              sets: null,
              reps: '50',
              rest: null,
              notes: 'Each time you break, row 25 calories',
              superset_group: null,
              circuit_group: null,
              order: 3,
            },
          ],
        },
      ],
    },
  ],
};

const complexProgram2 = {
  programName: 'Complex Training Program',
  clientId: clientId,
  coachId: coachId,
  workouts: [
    {
      name: 'Day 1 (Lift)',
      day: 1,
      type: 'Lift',
      sections: [
        {
          name: 'Strength',
          type: 'Strength',
          order: 1,
          movements: [
            {
              name: 'Deadlift',
              sets: '3',
              reps: 'Warm-up',
              rest: null,
              notes: '3 set warm-up',
              superset_group: null,
              circuit_group: null,
              order: 1,
            },
            {
              name: 'Deadlift',
              sets: null,
              reps: '8',
              rest: 60,
              notes: 'EMOM 20 minutes',
              superset_group: 'superset-uuid-1',
              circuit_group: null,
              order: 2,
            },
            {
              name: 'Dead hang',
              sets: null,
              reps: '30s',
              rest: 60,
              notes: 'EMOM 20 minutes, 5 x leg raises',
              superset_group: 'superset-uuid-1',
              circuit_group: null,
              order: 3,
            },
            {
              name: 'Hip Thrust',
              sets: '3',
              reps: '10',
              rest: 60,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 4,
            },
            {
              name: 'Pull ups',
              sets: '3',
              reps: '10',
              rest: 60,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 5,
            },
            {
              name: 'Cable/low row',
              sets: '3',
              reps: '10',
              rest: 60,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 6,
            },
            {
              name: 'Pallof Press',
              sets: '3',
              reps: '10',
              rest: 60,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 7,
            },
          ],
        },
        {
          name: 'Conditioning',
          type: 'Conditioning',
          order: 2,
          movements: [
            {
              name: '1 km Row',
              sets: null,
              reps: '1 km',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 1,
            },
            {
              name: 'Wall balls',
              sets: null,
              reps: '50',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 2,
            },
            {
              name: 'Lunges',
              sets: null,
              reps: '40',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 3,
            },
            {
              name: 'Pushups',
              sets: null,
              reps: '30',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 4,
            },
            {
              name: 'Burpees',
              sets: null,
              reps: '20',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 5,
            },
            {
              name: 'Pull ups',
              sets: null,
              reps: '10',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 6,
            },
          ],
        },
      ],
    },
    {
      name: 'Day 2 (Tempo Intervals)',
      day: 2,
      type: 'Cardio',
      sections: [
        {
          name: 'Tempo Intervals',
          type: 'Cardio',
          order: 1,
          movements: [
            {
              name: 'Warm-up',
              sets: null,
              reps: '2km',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 1,
            },
            {
              name: '800m run',
              sets: null,
              reps: '8/10 intensity',
              rest: null,
              notes: 'Rolling 800s',
              superset_group: 'superset-uuid-2',
              circuit_group: null,
              order: 2,
            },
            {
              name: '800m run',
              sets: null,
              reps: '4/10 intensity',
              rest: null,
              notes: 'Rolling 800s',
              superset_group: 'superset-uuid-2',
              circuit_group: null,
              order: 3,
            },
            {
              name: 'Cool down',
              sets: null,
              reps: '1km',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 4,
            },
          ],
        },
      ],
    },
    {
      name: 'Day 3 (Lift)',
      day: 3,
      type: 'Lift',
      sections: [
        {
          name: 'Strength',
          type: 'Strength',
          order: 1,
          movements: [
            {
              name: 'Front squat',
              sets: '3',
              reps: 'Warm-up',
              rest: null,
              notes: '3 set warm-up',
              superset_group: null,
              circuit_group: null,
              order: 1,
            },
            {
              name: 'Front squat',
              sets: null,
              reps: '8',
              rest: 60,
              notes: 'EMOM 20 minutes',
              superset_group: 'superset-uuid-3',
              circuit_group: null,
              order: 2,
            },
            {
              name: 'Russian twists',
              sets: null,
              reps: '16',
              rest: 60,
              notes: 'EMOM 20 minutes',
              superset_group: 'superset-uuid-3',
              circuit_group: null,
              order: 3,
            },
            {
              name: 'Belt/Goblet Squat',
              sets: '3',
              reps: '10',
              rest: 60,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 4,
            },
            {
              name: 'Push ups (weighted)',
              sets: '3',
              reps: '10',
              rest: 60,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 5,
            },
            {
              name: 'Strict Press',
              sets: '3',
              reps: '5',
              rest: 60,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 6,
            },
            {
              name: 'Walking lunges',
              sets: '3',
              reps: '16',
              rest: 60,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 7,
            },
            {
              name: 'Push Press',
              sets: '3',
              reps: '5',
              rest: 60,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 8,
            },
          ],
        },
        {
          name: 'Conditioning',
          type: 'Conditioning',
          order: 2,
          movements: [
            {
              name: 'Assault bike',
              sets: null,
              reps: '10 cals',
              rest: null,
              notes: '',
              superset_group: 'superset-uuid-4',
              circuit_group: null,
              order: 1,
            },
            {
              name: 'Sled push',
              sets: null,
              reps: '10m',
              rest: null,
              notes: '',
              superset_group: 'superset-uuid-4',
              circuit_group: null,
              order: 2,
            },
          ],
        },
      ],
    },
    {
      name: 'Day 4 (Conditioning)',
      day: 4,
      type: 'Conditioning',
      sections: [
        {
          name: 'Erg Conditioning',
          type: 'Conditioning',
          order: 1,
          movements: [
            {
              name: '1km row',
              sets: null,
              reps: '1 km',
              rest: null,
              notes: '1-5 rounds',
              superset_group: 'superset-uuid-5',
              circuit_group: null,
              order: 1,
            },
            {
              name: '1km ski erg',
              sets: null,
              reps: '1 km',
              rest: null,
              notes: '1-5 rounds',
              superset_group: 'superset-uuid-5',
              circuit_group: null,
              order: 2,
            },
          ],
        },
      ],
    },
    {
      name: 'Day 5 (Long Run)',
      day: 5,
      type: 'Cardio',
      sections: [
        {
          name: 'Long Run',
          type: 'Cardio',
          order: 1,
          movements: [
            {
              name: 'Easy pace',
              sets: null,
              reps: '15 min',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 1,
            },
            {
              name: '1km run',
              sets: null,
              reps: '8/10 intensity',
              rest: null,
              notes: '3-5 rounds',
              superset_group: 'superset-uuid-6',
              circuit_group: null,
              order: 2,
            },
            {
              name: '1km run',
              sets: null,
              reps: '5/10 intensity',
              rest: null,
              notes: '3-5 rounds',
              superset_group: 'superset-uuid-6',
              circuit_group: null,
              order: 3,
            },
            {
              name: 'Cool down',
              sets: null,
              reps: '15 min',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 4,
            },
          ],
        },
      ],
    },
  ],
};

const simpleProgram = {
  programName: 'Full body 3 x per week',
  clientId: clientId,
  coachId: coachId,
  workouts: [
    {
      name: 'Day 1',
      day: 1,
      type: 'Strength',
      sections: [
        {
          name: 'Strength Training',
          type: 'Strength',
          order: 1,
          movements: [
            {
              name: 'Trap bar deadlift',
              sets: 4,
              reps: '6-8',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 1,
            },
            {
              name: 'High incline shoulder press',
              sets: 3,
              reps: '8-10',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 2,
            },
            {
              name: 'Chest supported DB row',
              sets: 3,
              reps: '10-12',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 3,
            },
            {
              name: 'DB Walking lunge',
              sets: 3,
              reps: '10-12',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 4,
            },
            {
              name: 'Goblet cossack squat',
              sets: 3,
              reps: '6-8',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 5,
            },
            {
              name: 'Dual cable lat raise',
              sets: 3,
              reps: '15',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 6,
            },
            {
              name: 'Cable facepull',
              sets: 3,
              reps: '15-20',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 7,
            },
          ],
        },
      ],
    },
    {
      name: 'Day 2',
      day: 2,
      type: 'Strength',
      sections: [
        {
          name: 'Strength Training',
          type: 'Strength',
          movements: [
            {
              name: 'Incline DB press (30 degrees)',
              sets: 3,
              reps: '8-10',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 1,
            },
            {
              name: 'Romanian Deadlift',
              sets: 4,
              reps: '8-12',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 2,
            },
            {
              name: 'Deadbug with plate',
              sets: 3,
              reps: '12',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 3,
            },
            {
              name: 'Single arm lat pull down',
              sets: 3,
              reps: '12',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 4,
            },
            {
              name: 'Single arm cable lat raise',
              sets: 3,
              reps: '12',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 5,
            },
            {
              name: 'Leg extension',
              sets: 2,
              reps: '24',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 6,
            },
            {
              name: 'Seated adductor',
              sets: 2,
              reps: '12-15',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 7,
            },
          ],
        },
      ],
    },
    {
      name: 'Day 3',
      day: 3,
      type: 'Strength',
      sections: [
        {
          name: 'Strength Training',
          type: 'Strength',
          movements: [
            {
              name: 'Front foot elevated reverse lunge',
              sets: 3,
              reps: '8-10',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 1,
            },
            {
              name: 'Chest supported single arm row',
              sets: 3,
              reps: '10-12',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 2,
            },
            {
              name: 'Hanging leg raise',
              sets: 3,
              reps: '8-12',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 3,
            },
            {
              name: 'Seated cable chest press',
              sets: 3,
              reps: '10-12',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 4,
            },
            {
              name: 'Seated cable row',
              sets: 3,
              reps: '10-12',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 5,
            },
            {
              name: 'Crossbody tricep extension',
              sets: 3,
              reps: '15',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 6,
            },
            {
              name: 'Dual cable curl',
              sets: 3,
              reps: '15',
              rest: null,
              notes: '',
              superset_group: null,
              circuit_group: null,
              order: 7,
            },
          ],
        },
      ],
    },
  ],
};

module.exports = {
  complexProgram1,
  complexProgram2,
  simpleProgram,
};
