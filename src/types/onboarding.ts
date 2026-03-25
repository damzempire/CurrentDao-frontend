export interface TutorialStep {
  id: string;
  title: string;
  content: string;
  targetId?: string; // HTML ID of the element to highlight
  action?: 'click' | 'input' | 'none';
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export interface OnboardingState {
  isTutorialActive: boolean;
  currentStepIndex: number;
  completedSteps: string[];
  isDismissed: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'trading' | 'account' | 'technical' | 'general';
}

export interface VideoTutorialData {
  id: string;
  title: string;
  url: string;
  duration: string;
  thumbnail: string;
}
