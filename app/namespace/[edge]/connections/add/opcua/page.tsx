'use client';

import { useState } from 'react';
import PageLayout from '../../../../components/Layout/PageLayout';
import ConnectionWizard from '../../../../components/Connections/ConnectionWizard';
import BasicInfoStep from '../../../../components/Connections/Steps/OpcUa/BasicInfoStep';
import ConnectionInfoStep from '../../../../components/Connections/Steps/OpcUa/ConnectionInfoStep';
import AddTagsStep from '../../../../components/Connections/Steps/OpcUa/AddTagsStep';

interface OpcUaConnectionPageProps {
  params: {
    edge: string;
  };
}

export default function OpcUaConnectionPage({ params }: OpcUaConnectionPageProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    { number: 1, title: 'Basic Info', component: BasicInfoStep },
    { number: 2, title: 'Connection Info', component: ConnectionInfoStep },
    { number: 3, title: 'Add Tags', component: AddTagsStep }
  ];

  return (
    <PageLayout>
      <ConnectionWizard
        title="New OPC UA Connection"
        currentStep={currentStep}
        steps={steps}
        onStepChange={setCurrentStep}
        edgeName={params.edge}
      />
    </PageLayout>
  );
}