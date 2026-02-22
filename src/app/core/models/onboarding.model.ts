export type EnglishLevel = 'A1' | 'A2' | 'B1' | 'B2' | null;
export type Goal = 'Trabajo' | 'Universidad' | 'Conversación' | 'Certificación' | null;
export type Urgency = 'Alta (1-2 meses)' | 'Media (3-6 meses)' | 'Baja (Sin prisa)' | null;

export interface OnboardingState {
  level: EnglishLevel;
  goal: Goal;
  urgency: Urgency;
}

export const LEVEL_LABELS: Record<string, string> = {
  'A1': 'A1 · Soy principiante',
  'A2': 'A2 · Entiendo cosas básicas',
  'B1': 'B1 · Me puedo defender',
  'B2': 'B2 · Quiero más fluidez',
};

export const ONBOARDING_GOALS: Goal[] = ['Trabajo', 'Universidad', 'Conversación', 'Certificación'];
export const ONBOARDING_URGENCIES: Urgency[] = ['Alta (1-2 meses)', 'Media (3-6 meses)', 'Baja (Sin prisa)'];
