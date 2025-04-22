'use client';

import { useState, useEffect } from 'react';
import { createExperiment, type ExperimentConfig } from '@/lib/ab-testing';

export function useExperiment(config: ExperimentConfig) {
  const [variant, setVariant] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const experiment = createExperiment(config);
    const variantId = experiment.getVariant();
    setVariant(variantId);
    setIsLoading(false);
  }, [config]);
  
  return {
    variant,
    isLoading,
    isVariant: (variantId: string) => variant === variantId
  };
} 
