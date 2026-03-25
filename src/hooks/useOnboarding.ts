'use client';

import { useMemo, useCallback } from 'react';
import { useTutorialProgress } from './useTutorialProgress';
import { TutorialStep } from '../types/onboarding';

const MARKETPLACE_TUTORIAL: TutorialStep[] = [
  {
    id: 'welcome',
    title: 'Welcome to CurrentDao',
    content: 'Let\'s get you started with a quick tour of our decentralized energy marketplace.',
    position: 'top',
  },
  {
    id: 'dashboard',
    title: 'Your Dashboard',
    content: 'This is where you can track your energy production, consumption, and portfolio performance at a glance.',
    targetId: 'dashboard-overview',
    position: 'bottom',
  },
  {
    id: 'trading',
    title: 'Energy Trading',
    content: 'Browse active orders and execute trades instantly on the blockchain. You can buy or sell clean energy kWh here.',
    targetId: 'trading-activity',
    position: 'left',
  },
  {
    id: 'wallets',
    title: 'Connect Your Wallet',
    content: 'Securely connect your Stellar or Ethereum wallet to sign transactions and manage your digital energy assets.',
    targetId: 'wallet-connector',
    position: 'right',
  },
  {
    id: 'conclusion',
    title: 'All Set!',
    content: 'You\'re now ready to participate in the future of energy production. Explore the marketplace or visit the help center if you need more guidance.',
    position: 'top',
  },
];

export function useOnboarding() {
  const {
    isTutorialActive,
    currentStepIndex,
    completedSteps,
    isDismissed,
    startTutorial,
    nextStep: advance,
    prevStep,
    skipTutorial,
    resetTutorial,
  } = useTutorialProgress();

  const currentStep = useMemo(() => MARKETPLACE_TUTORIAL[currentStepIndex], [currentStepIndex]);

  const nextStep = useCallback(() => {
    if (currentStepIndex < MARKETPLACE_TUTORIAL.length - 1) {
      advance(currentStep.id);
    } else {
      skipTutorial(); // End of tutorial
    }
  }, [currentStepIndex, currentStep.id, advance, skipTutorial]);

  const isLastStep = currentStepIndex === MARKETPLACE_TUTORIAL.length - 1;
  const isFirstStep = currentStepIndex === 0;

  return {
    isTutorialActive,
    currentStep,
    currentStepIndex,
    totalSteps: MARKETPLACE_TUTORIAL.length,
    completedSteps,
    isDismissed,
    isLastStep,
    isFirstStep,
    startTutorial,
    nextStep,
    prevStep,
    skipTutorial,
    resetTutorial,
  };
}
