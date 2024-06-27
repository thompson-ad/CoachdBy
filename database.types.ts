export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      coach_client: {
        Row: {
          client_id: string;
          coach_id: string;
          updated_at: string | null;
        };
        Insert: {
          client_id: string;
          coach_id: string;
          updated_at?: string | null;
        };
        Update: {
          client_id?: string;
          coach_id?: string;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'coach_client_client_id_fkey';
            columns: ['client_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'coach_client_coach_id_fkey';
            columns: ['coach_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          },
        ];
      };
      movements: {
        Row: {
          created_at: string;
          created_by: string;
          id: string;
          name: string;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          created_by: string;
          id?: string;
          name: string;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          created_by?: string;
          id?: string;
          name?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'movements_created_by_fkey';
            columns: ['created_by'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          },
        ];
      };
      profiles: {
        Row: {
          created_at: string;
          email: string;
          first_name: string | null;
          id: string;
          last_name: string | null;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          email: string;
          first_name?: string | null;
          id: string;
          last_name?: string | null;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          email?: string;
          first_name?: string | null;
          id?: string;
          last_name?: string | null;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'profiles_id_fkey';
            columns: ['id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      programs: {
        Row: {
          client_id: string | null;
          coach_id: string | null;
          created_at: string;
          id: string;
          name: string;
          updated_at: string;
        };
        Insert: {
          client_id?: string | null;
          coach_id?: string | null;
          created_at?: string;
          id?: string;
          name: string;
          updated_at?: string;
        };
        Update: {
          client_id?: string | null;
          coach_id?: string | null;
          created_at?: string;
          id?: string;
          name?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'programs_client_id_fkey';
            columns: ['client_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'programs_coach_id_fkey';
            columns: ['coach_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          },
        ];
      };
      progress: {
        Row: {
          client_id: string;
          created_at: string;
          date: string;
          id: string;
          movement_id: string;
          reps: number;
          sets: number;
          updated_at: string;
          weight: number;
        };
        Insert: {
          client_id: string;
          created_at?: string;
          date?: string;
          id?: string;
          movement_id: string;
          reps: number;
          sets: number;
          updated_at?: string;
          weight: number;
        };
        Update: {
          client_id?: string;
          created_at?: string;
          date?: string;
          id?: string;
          movement_id?: string;
          reps?: number;
          sets?: number;
          updated_at?: string;
          weight?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'progress_client_id_fkey';
            columns: ['client_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'progress_movement_id_fkey';
            columns: ['movement_id'];
            isOneToOne: false;
            referencedRelation: 'movements';
            referencedColumns: ['id'];
          },
        ];
      };
      roles: {
        Row: {
          id: number;
          role_name: string;
          updated_at: string | null;
        };
        Insert: {
          id?: number;
          role_name: string;
          updated_at?: string | null;
        };
        Update: {
          id?: number;
          role_name?: string;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      section_movements: {
        Row: {
          circuit_group: string | null;
          movement_id: string;
          notes: string | null;
          order: number | null;
          reps: string;
          rest: number | null;
          rir: string | null;
          section_id: string;
          sets: number;
          superset_group: string | null;
          updated_at: string | null;
        };
        Insert: {
          circuit_group?: string | null;
          movement_id: string;
          notes?: string | null;
          order?: number | null;
          reps: string;
          rest?: number | null;
          rir?: string | null;
          section_id: string;
          sets: number;
          superset_group?: string | null;
          updated_at?: string | null;
        };
        Update: {
          circuit_group?: string | null;
          movement_id?: string;
          notes?: string | null;
          order?: number | null;
          reps?: string;
          rest?: number | null;
          rir?: string | null;
          section_id?: string;
          sets?: number;
          superset_group?: string | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'section_movements_movement_id_fkey';
            columns: ['movement_id'];
            isOneToOne: false;
            referencedRelation: 'movements';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'section_movements_section_id_fkey';
            columns: ['section_id'];
            isOneToOne: false;
            referencedRelation: 'sections';
            referencedColumns: ['id'];
          },
        ];
      };
      sections: {
        Row: {
          created_at: string;
          id: string;
          name: string | null;
          order: number | null;
          type: string | null;
          updated_at: string;
          workout_id: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          name?: string | null;
          order?: number | null;
          type?: string | null;
          updated_at?: string;
          workout_id: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          name?: string | null;
          order?: number | null;
          type?: string | null;
          updated_at?: string;
          workout_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'sections_workout_id_fkey';
            columns: ['workout_id'];
            isOneToOne: false;
            referencedRelation: 'workouts';
            referencedColumns: ['id'];
          },
        ];
      };
      user_roles: {
        Row: {
          profile_id: string;
          role_id: number;
          updated_at: string | null;
        };
        Insert: {
          profile_id: string;
          role_id: number;
          updated_at?: string | null;
        };
        Update: {
          profile_id?: string;
          role_id?: number;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'user_roles_profile_id_fkey';
            columns: ['profile_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'user_roles_role_id_fkey';
            columns: ['role_id'];
            isOneToOne: false;
            referencedRelation: 'roles';
            referencedColumns: ['id'];
          },
        ];
      };
      workouts: {
        Row: {
          created_at: string;
          day: number;
          id: string;
          name: string;
          program_id: string;
          type: string;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          day: number;
          id?: string;
          name: string;
          program_id: string;
          type: string;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          day?: number;
          id?: string;
          name?: string;
          program_id?: string;
          type?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'workouts_program_id_fkey';
            columns: ['program_id'];
            isOneToOne: false;
            referencedRelation: 'programs';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
        PublicSchema['Views'])
    ? (PublicSchema['Tables'] &
        PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never;
